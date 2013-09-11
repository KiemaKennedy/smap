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



sMap.moduleConfig.OverlaySwitcher.SimpleSwitcher = {
		
		/**
		 * If true, calls module's methods "activate" after methods
		 * "initialize" and "drawContent" have been called.
		 */
		activateFromStart : false,
		
		/**
		 * size and position parameters
		 */
		maximizerWidth : "auto",
		dropDownWidth : 180,
		top : 5,
		right : 100,
		/**
		 * if true, a button that unchecks all layers i added to the bottom of the overlayswitcher
		 */
		btnUncheckAll : true,
		/**
		 * if true, legend automatically opens when clicking on layerdiv
		 * otherwise the user must click on the legend icon
		 */
		autoOpenLegend : false,
		/**
		 * default sizes for iframe and dialog window
		 */
		//iframeWidth : 350,
		//iframeHeight : 400,
		legendWidth : 370,
		legendHeight : 450
//		idDelim : "-"
};