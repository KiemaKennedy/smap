#
# Copyright (C) 2013 sMap Project and its contributors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

from StringIO import StringIO
from fnmatch import filter as fnfilter
from os import walk
from os.path import join
from shlex import split
from subprocess import Popen, PIPE
from sys import argv


BASE_DIRECTORIES = ['core', 'modules']


def find_files(ext):
    paths = []
    for base_dir in BASE_DIRECTORIES:
        for root, directories, filenames in walk(base_dir):
            paths.extend(map(lambda f: join(root, f), fnfilter(filenames, ext)))
    print 'Found %d files matching pattern %s' % (len(paths), ext)
    return paths


def concatenate(paths):
    body = StringIO()
    for path in paths:
        with open(path, 'rb') as f:
            body.write(f.read())
    return body.getvalue()


def compress(body, filename):
    print 'Compressing to %s...' % (filename, ),
    ext = filename.split('.')[-1]
    args = split('java -jar tools/yuicompressor-2.4.7.jar -o %s --charset utf-8 --type %s' % (filename, ext))
    p = Popen(args, stdin=PIPE)
    out, err = p._communicate(body)
    rc = p.wait()
    if rc:
        print out
        print err
        exit(1)
    else:
        print 'done'


def save(body, filename):
    with open(filename, 'wb') as f:
        f.write(body)


if __name__ == '__main__':
    js = concatenate(find_files('*.js'))
    css = concatenate(find_files('*.css'))

    if len(argv) == 2 and argv[1] == 'debug':
        save(js, 'smap.min.js')
        save(css, 'smap.min.css')
    else:
        compress(js, 'smap.min.js')
        compress(css, 'smap.min.css')

    print 'OK'
