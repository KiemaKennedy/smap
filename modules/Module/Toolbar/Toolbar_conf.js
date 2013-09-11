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



sMap.moduleConfig.Toolbar = {
		
		activateFromStart : false,
		
		height : 38,
		
		toolbarButtonActiveCSSClass : "ui-state-active", //"toolbar-button-active",
		
		/**
		 * The side from which the buttons should start.
		 * "left" OR "right"
		 */
		side : "left",
		
		/**
		 * Default margin between buttons in the toolbar in px.
		 */
		buttonMargin : 15,
		/**
		 * First button's margin from side
		 */
		buttonMarginInitial : 10,
		addLogotype : false,
		logoImgURL : "http://kartor.kristianstad.se/img/bild/Kristianstad_logo_endastvapen_rgb.gif",
		logoLinkURL : "http://www.kristianstad.se",
		logoWidth : 60,
		title : "" //"<a href='http://www.kristianstad.se' target=_blank>Titel</a>" //text or html to place from left efter logo in toolbar
};