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



sMap.moduleConfig.Opacity = {
		
		/**
		 * If true, calls module's methods "activate" after methods
		 * "initialize" and "drawContent" have been called.
		 */
		activateFromStart : false,
		dialogStartPosition : [150,80],
		height : 268,
		width: 380,
		
		/**
		 * SavePrefChecked - include a checkbox for saving settings (when deactivating the module in GUI).
		 * Set to "checked"/"unchecked" as you prefer. This will be the default state.
		 * Comment out (and don�t forget to remove the previous comma) if you don�t want it. 
		 * 
		 */
		savePrefChecked : "checked"
		
};