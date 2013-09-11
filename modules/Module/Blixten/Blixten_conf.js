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



sMap.moduleConfig.Blixten = {
		
		/**
		 * If true, calls module's methods "activate" after methods
		 * "initialize" and "drawContent" have been called.
		 */ 
		activateFromStart : false,
		
		/**
		 * Buffer settings
		 */
		defaultBuffer: 200,
		minBuffer: 100, // If you put 0 it will become 1.
		maxBuffer: 500,
		step: 100,
		
		dialogPosition: [50, 100],
		
		zIndex: 697,
		
		styles: {
			"default": {
				"strokeDashstyle": "solid",
				"pointRadius": 10,
				"fillColor": "#00f",
				"strokeColor": "#fff",
				"strokeWidth": 1,
				"strokeOpacity": 1,
				"fillOpacity": 0.4,
				"graphicZIndex": 697
			},
			"select": {
				"strokeDashstyle": "solid",
				"pointRadius": 10,
				"fillColor": "#00f",
				"strokeColor": "#fff",
				"strokeWidth": 1,
				"strokeOpacity": 1,
				"fillOpacity": 0.4,
				"graphicZIndex": 697
			},
			"temporary": {
				"strokeDashstyle": "solid",
				"pointRadius": 10,
				"fillColor": "#00f",
				"strokeColor": "#fff",
				"strokeWidth": 1,
				"strokeOpacity": 1,
				"fillOpacity": 0.4,
				"graphicZIndex": 697
			}
		}
};