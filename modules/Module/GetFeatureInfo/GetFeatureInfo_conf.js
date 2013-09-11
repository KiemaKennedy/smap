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



sMap.moduleConfig.GetFeatureInfo = {
		
		/**
		 * If true, calls module's methods "activate" after methods
		 * "initialize" and "drawContent" have been called.
		 */ 
		activateFromStart : false,
		/**
		 * Default properties
		 */
		toolbarIndex : 8,
		addToToolsMenu : true,
		/**
		 * Dialog start position and size
		 */
		dialogStartPosition : [50,200],
		height : 300,
		width: 360,
		/**
		 * automatic removal o fall features in infolayer before new feature is being added?
		 */
		autoclear : true,
		/**
		 * The layer to get information from
		 */
		getInfoLayer:"hojddata",
		/**
		 * Attribute name for the elevation to extract
		 */
		attributeName : "GRAY_INDEX",
		/**
		 * Number of decimals in x,y,elevation
		 */
		decimals : 1,
		/**
		 * Add a button to list all labels with northing, easting, attribute
		 */
		listButton : true,
		/**
		 * Configuration for the info layer
		 */
		infoLayerConfig : {
			name : "theInfoLayer",
			displayName:"Markhöjder",
			layerType: "vector",
			geomType : 'point',
			selectable : true,
			displayInLayerSwitcher : true,
			selectAttributes: ["${info}"],
			popup : "<div class='popup-header1'>Markhöjd</div>" +
				"<span id='info-text' class='popup-text1'>${info} RH2000</span>",
			/**
			 * The styleMap for the info layer.
			 * 
			 * See: http://docs.openlayers.org/library/feature_styling.html 
			 */
			style : {
				"default" : {
					pointRadius : 4,
					fillColor : "#000000",
					fillOpacity : 1,
					graphicName: "cross",
					strokeWidth : 0.3,
					strokeColor : "#000000",
					strokeOpacity : 1,
					cursor : "pointer",
					label:"${info}",
					fontColor:"#000",
					fontSize:"14px",
					fontFamily:"Arial",
					fontWeight:"normal",
					labelAlign:"lb",
					labelXOffset:0,
					labelYOffset:5
				},
				"temporary" : {
					pointRadius : 6,
					fillColor : "#ff5b00",
					fillOpacity : 0.3,
					graphicName: "square",
					strokeWidth : 4,
					strokeColor : "#ff5b00",
					strokeOpacity : 1,
					cursor : "pointer"
				},
				"select" : {
					pointRadius : 6,
					fillColor : "#00FFFF",
					fillOpacity : 0.3, // Make it invisible (meaning only original icon is visible)
					strokeOpacity : 1,
					graphicName: "circle",
					strokeWidth : 4,
					strokeColor : "#00FFFF",
					cursor : "pointer"
				}
			}
		},
		/**
		 * Makes the drawlayer to be drawn over the overlays
		 */
		zIndex: 696
};