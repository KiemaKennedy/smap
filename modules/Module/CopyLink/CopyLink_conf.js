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



sMap.moduleConfig.CopyLink = {
		/**
		 * Label the button with text
		 */
		labelButton : true,
		/**
		 * The different categories, to add to the copyDiv.
		 */
		cats : {
			copyLink : true, // Simply a link to the map
			embedLink : true // iFrame-code with src set to the current link to the map
		},
		
		/**
		 * Possible values for "shortenOption" below: "toDb"/"bitLy". 
		 * If set to any of these, a button for shortening the URL is added, plus:
		 *		- "toDb" shortens the "features"-parameter of the URL, and saves it to a SQlite-database.
		 *			"saveToDbPath" is the path to script for saving long part of the URL.
		 *
		 *		- "bitLy" shortens the whole URL via bit.ly.
		 * 			"bitLyPath" is the path to script for shortening via bit.ly
		 * 
		 */
		
		shortenOption : "toDb", 
		saveToDbPath : "http://www.smap.se/cgi-bin/shorten/sMap_save.py", 
		//fetchFromDbPath : Path to script for retrieving long part of the URL. Set in Draw_conf.js!
		bitLyPath : "http://www.smap.se/cgi-bin/shorten/sMaply.py",

		/**
		 * If true, calls module's methods "activate" after methods
		 * "initialize" and "drawContent" have been called.
		 */
		activateFromStart : false
};