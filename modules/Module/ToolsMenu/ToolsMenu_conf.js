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



sMap.moduleConfig.ToolsMenu = {
		
		/**
		 * If true, calls module's methods "activate" after methods
		 * "initialize" and "drawContent" have been called.
		 */ 
		activateFromStart : true,
		
		toolbarBtnActiveCSSClass : "ui-state-active",
		
		/**
		 * One or more toolsMenu-buttons to be created. By default modules will be placed in the first menu, 
		 * but they can change it, by specifying menu by menuId when triggering "addtomenu". (E.g: menuId : 5). 
		 * 		
		 * The menuIds will be appended to internal ID-syntax, e.g. menuId : 5 will be "#toolsmenu-dropdown5" etc.
		 * Just make sure to make them unique in this config-file. 
		 * 
		 * When setting "lblText" below, the default text ("Fler verktyg"/"Moore tools") will be overridden.
		 * 
		 */ 
		menuBtns : [ 
		             {
		            	 menuId : 5,
		            	 lblText : "sMap++",
		            	 toolBarIndex : 2
		             }/*,
		             {
		            	 menuId : 7,
		            	 //lblText : "MyTools",
		            	 toolBarIndex : 7
		             },
		             {
		            	 menuId : "tools",
		            	 lblText : "sMap--",
		            	 toolBarIndex : 4
		             }*/
		             ]
};