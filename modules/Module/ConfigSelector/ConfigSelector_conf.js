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



sMap.moduleConfig.ConfigSelector = {
		/**
		 * Module for switching config file. 
		 * Listeners:
		 * afterapplyingwebparams
		 * Sets the current config option from the web params
		 */
		/**
		 * If true, calls module's methods "activate" after methods
		 * "initialize" and "drawContent" have been called.
		 */ 
		activateFromStart : false,
		/**
		 * Available config files and their corresponding theme names
		 * optional could overlays "ol" and backgroundlayer "bl" be specified. 
		 * These will override ol and bl specified by the user in the current map
		 */
		dropDownItems : {
			// "plan3": {
		   		// file : "configs/test_3008.js",
		   		// name : "Planerade bostäder",
		   		// ol   : ""
		   	// },
			// "gsdggsdg": {
		   		// file : "configs/atlas_v_higgins5.js",
		   		// name : "stadskartaaaaa",
		   		// ol   : "",
		   		// bl   : "stadskartan"
		   	// }
		},
		/**
		 * Toolbarindex
		 */
		toolbarIndex : 15,
		/**
		 * Keep zoom and center in new theme
		 */
		keepZoom : true,
		/**
		 * Keep backgroundlayer in new theme. Overridden if bl specified in dropDownItems
		 */
		keepBackground : true,
		/**
		 * Keep overlays in new theme. Overridden if ol specified in dropDownItems
		 */
		keepOverlays : true,
		/**
		 * Keep opacity values for the overlays
		 */
		keepOpacities : false,
		/**
		 * Keep drawn features in new theme
		 */
		keepFeatures : true
};