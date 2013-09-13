/*
 * Copyright (C) 2011-2013 sMap Project and its contributors.
 * See the NOTICE file for details.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/*
 * IMPORTANT NOTICE
 *
 * This file is a placeholder. It only serves as a base for your own configuration.
 */
 
var config = {
	
	version : "4.1.1",
	projection : "", // TODO: Add projection name for layers
	resolutions : [ ], // TODO: Add resolutions
	
    // TODO: The extents need to be adjusted based on your layer definitions and
    //   what you want visible on the map.
	maxExtent : {
		w : 0,
		s : 0,
		e : 0,
		n : 0
	},

	defaultExtent : {
		w : 0,
		s : 0,
		e : 0,
		n : 0
	},
	
	proxyHost : "", 
	
	iFrame : false,
	
	rootURL : document.URL.split("?")[0],
	
	layers : {
		
		overlays : [
			{
                // TODO: Insert overlay layers definitions here
			}
		],
		
		baselayers : [
			{
                // TODO: Insert base layer definitions here
			}			
		]
	},
	
	modules : 
	[
		{
			init : null, // TODO: Replace with module initializer
			config : {
                // TODO: Insert configuration specific to the module here
			}
		},
	]
};