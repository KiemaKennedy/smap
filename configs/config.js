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
	resolutions : [27.781305, 13.229193, 5.291677, 2.645839],
	
	proxyHost : "", 
	
	maxExtent : {
		w : 100000,
		s : 6148850,
		e : 139000,
		n : 6173450
	},

	defaultExtent : {
		w : 104853,
		s : 6150876,
		e : 131653,
		n : 6171076
	},
	
	iFrame : false,
	
	rootURL : document.URL.split("?")[0],
	
	layers : {
		
		overlays : [

		],
		
		baselayers : [
			{
				displayName : "Karta",
				name : "karta_sv",
				URL: document.location.protocol + "//xyz.malmo.se/data_e/github_tilecache/",
				layer : "malmo_map",
				layerType : "tilecache",
				category : "Karta",
				options : {
					buffer : 0,
					transitionEffect : "resize",
					format : "image/png",
					isBaseLayer : true,
					attribution : "<a href='http://www.malmo.se' target='_blank'>© Malmö stad</a>"            
                }
            },
			{
				displayName : "Fotokarta",
				name : "fotokarta",
				URL: document.location.protocol + "//xyz.malmo.se/data_e/github_tilecache/",
				layer : "malmo_orto",
				layerType : "tilecache",
				category : "Fotokarta",
				options : {
					buffer : 0,
					transitionEffect : "resize",
					format : "image/jpeg",
					isBaseLayer : true,
				    resolutions : [27.781305, 13.229193, 5.291677, 2.645839], // EPSG:3008
					maxExtent: new OpenLayers.Bounds(104853,6150876,131653,6171076),
					attribution : "<a href='http://www.malmo.se' target='_blank'>© Malmö stad</a>"            
                }
            }
        ]
	},
	
	modules : 
	[
		{
			init : sMap.Module.BaselayerSwitcher,
			config : {
				dropDownOnSingle : false,
				buttonWidth : 75,
				dropDownWidth : 130
			}
		}
	]
};