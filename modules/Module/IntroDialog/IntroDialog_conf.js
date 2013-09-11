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



sMap.moduleConfig.IntroDialog = {
		
		/**
		 * If true, calls module's methods "activate" after methods
		 * "initialize" and "drawContent" have been called.
		 */ 
		activateFromStart : true,
		
		contentHtml: "<div>Override this parameter in the module config</div>",
		
		/**
		 * Create a checkbox that, when checked, will not allow 
		 * the dialog to open again next time.
		 */
		checkboxDontShow: true,
		
		/**
		 * Override some or all the default dialog options.
		 */
		dialogOptions: {},
		
		dialogBGColor: "#efa",
		
		/**
		 * Default options for the dialog.
		 */
		defaultDialogOptions: {
			title: "Välkommen",
			width: "auto",
			minWidth: 370,
			minHeight: 200,
			height: "auto",
			modal: false,
			autoOpen: false,
			position: "center"
		}
};