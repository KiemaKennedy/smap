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



var sMap = {
		config : {},
		db : {},
		moduleConfig : {}
};

sMap.langDict = {
	"sv-SE": {
		errNoBaseNorOverlays: "Config-filen innehåller inga lager (varken overlays eller baselayers).",
		errMapNotInit: "Kartan kunde inte initieras.",
		errWebParamLayerNotFound: "Lagret som angavs i URL:en finns inte.",
		errBaselayerDoesNotExist: "Kan inte ändra till angivet baslager eftersom det inte finns.",
		tooManyStyleSheets: "Det är för många stylesheets <link /> inlänkade från index-filen - IE klarar max 31 st.",
		warnLangNotSupportedByFramework: "Angivet språk stöds inte av alla sMap-moduler och/eller sMap.langDict (se sMap.js)."
	},
	"en": {
		errNoBaseNorOverlays: "The config file does not contain any layers (neither overlays nor baselayers).",
		errMapNotInit: "The map could not be initialized",
		errWebParamLayerNotFound: "The layer in the URL does not exist.",
		errBaselayerDoesNotExist: "Cannot set baselayer since it does not exist.",
		tooManyStyleSheets: "There are too many stylesheets <link /> linked in from the index file - IE can take a max. of 31 stylesheets.",
		warnLangNotSupportedByFramework: "The language is not supported by all sMap-modules and/or sMap.langDict (see sMap.js)."
	}
		
		
};