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



sMap.moduleConfig.Select = {
		
		/**
		 * If true, calls module's methods "activate" after methods
		 * "initialize" and "drawContent" have been called.
		 */
		activateFromStart : true,
		
		
		defaultStyle : {
			pointRadius : 18,
			//externalGraphic : "img/icon_hjalp.png",
			strokeWidth : 4,
			strokeColor: "#00ffff",
			fillColor: 	"#00ffff",
			strokeOpacity : 1,
			fillOpacity: 0.7,
			graphicZIndex: 499
		},
		selectStyle : {
			pointRadius : 8,
			//externalGraphic : "img/icon_hjalp.png",
			strokeWidth : 4,
			strokeColor: "#00ffff",
			fillColor: 	"#00ffff",
			strokeOpacity : 1,
			fillOpacity: 0.7,
			graphicZIndex: 499
		},
		
		zIndex: 499,
		
		/**
		 * Allow more than one selected feature at the same time.
		 */
		multiple : true,
		
		/**
		 * Select only the closest feature to the click location.
		 */
		forceOne: true,
		
		/**
		 * @property handlerType {String}
		 * Choose the select module's event listener.
		 * Can be either "box" or "click".
		 */
		handlerType : "click",
		/**
		 * @property addSelectWithKey {Boolean}
		 * If true - the keyMask specified in handlerOptions (for the handler
		 * of choice) can be used for adding features to selection.
		 * Note that if addSelectWithKey equals true, zoomBox will not work
		 * when holding the shift key.
		 */
		addSelectWithKey : true,
		/**
		 * @property dialogIfMany {Boolean}
		 * If true, create a dialog if more than one feature was found on request.
		 * In the dialog the user has to choose one feature.
		 */
		dialogIfMany : true,
		
		
		/**
		 * Pressing the keyMask key will add to the selection.
		 */
		handlerOptions : {
			click : {
				keyMask : OpenLayers.Handler.MOD_CTRL
			},
			box : {
				keyMask : OpenLayers.Handler.MOD_CTRL
			}
		},
		
		clickRadius : 8,
		maxLength : 20
		
		
		
};