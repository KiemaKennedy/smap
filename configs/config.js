var config = {
	
	version : "4.1.1",
	projection : "EPSG:3006",
	resolutions : [ 200, 100, 50, 25, 10, 5, 2, 1 ], // EPSG:3006
	
	// EPSG:3006
	maxExtent : {
		w : 335000,
		s : 6130000,
		e : 480000,
		n : 6270000
	},
	defaultExtent : {
		w : 335000,
		s : 6130000,
		e : 480000,
		n : 6270000
	},
	
	// EPSG:3008
	/*maxExtent : {
		w : 104853,
		s : 6150876,
		e : 131653,
		n : 6171076
	},
	defaultExtent : {
		w : 104853,
		s : 6150876,
		e : 131653,
		n : 6171076
	},*/
	
	proxyHost : "http://kartor.smap.se/cgi-bin/proxy/proxy.py?url=",
	
	iFrame : false,
	
	rootURL : document.URL.split("?")[0],
	
	layers : {
		
		overlays : [
			{
				displayName : 'Busshållplats',
				name: "busshallplats",
				layerType : "wms",
				category : ["TRAFIK"],
				displayInLayerSwitcher: true,
				URL: "http://geoserver.smap.se/geoserver/wms?",
				selectAttributes: ["${caption}"],
				params : {
					layers: "commonws:skanetrafiken3006",
					format: "image/png",
					transparent: "true"
				}, 
				options : {
					isBaseLayer: false,
					opacity: "0.85",
					zIndex: 350,
					ratio: 1,
					singleTile : true
				},
				popup :
					"<div class='popup-header1'>Busshållsplats</div>" +
					"<div class='popup-text1'>${caption}</div>" +
					"<br>" +
					"<div class='popup-text1'><a href='http://www.skanetrafiken.se?id=ctl00_travelPlannerRegion_TravelPlanner_inpPointFr' target='_blank'>Skånetrafiken</a></div>",
				selectable : true, 
				getFeatureInfo: {geometryName: "geom"},
				dontUseDefaultExternalGraphic : true//,
			}
		],
		
		baselayers : [
			{
				displayName : "Skånekarta 2010",
				name : "skanekartan",  // ska ej vara årtal på "name", om vi har med årtal kommer gamla länkar inte funka om vi byter till nytt ortofoto
				URL : 'http://www.smap.se/tilecache/',
				layer : "skane_karta_sr99tm",
				layerType : "tilecache",
				category : "Karta",
				options : {
					resolutions : [200, 100, 50, 25, 10, 5, 2, 1], 
					maxExtent: new OpenLayers.Bounds(335000,6130000, 480000,6270000),
					zIndex: 50,
					buffer : 0,
					transitionEffect : null,
					format : "image/jpg",
					isBaseLayer : true,
					attribution : "<a href='mailto:stadsatlas@malmo.se?subject=Stadsatlas'>© Stadsbyggnadskontoret, Malmö stad</a>"
				},
				copyright : [ "Malmö stadsbyggnadskontor", "mailto:stadsatlas@malmo.se?subject=Stadsatlas" ]
			},	
			{
				displayName : "Hybridkarta 2010",
				name : "Hybrid2010",
				URL : 'http://www.smap.se/tilecache/',
				layer : "skane_hybrid_2010_sr99tm",
				layerType : "tilecache",
				category : "Fotokarta",
				options : {
					resolutions : [200, 100, 50, 25, 10, 5, 2, 1],
					maxExtent: new OpenLayers.Bounds(335000,6130000, 480000,6270000),
					zIndex: 50,
					buffer : 0,
					transitionEffect : null,
					format : "image/jpg",
					isBaseLayer : true
				},
				copyright : [ "Lantmäteriet", "http://www.lantmateriet.se" ]
			},	
			
			{
				displayName : "Fotokarta 2010",
				name : "Orto2010",
				URL : 'http://www.smap.se/tilecache/',
				layer : "skane_ortofoto_2010_sr99tm",
				layerType : "tilecache",
				category : "Fotokarta",
				options : {
					resolutions : [200, 100, 50, 25, 10, 5, 2, 1],
					maxExtent: new OpenLayers.Bounds(335000,6130000, 480000,6270000),
					zIndex: 50,
					buffer : 0,
					transitionEffect : null,
					format : "image/jpg",
					isBaseLayer : true
				},
				copyright : [ "Lantmäteriet", "http://www.lantmateriet.se" ]
			},
			{
				displayName : "Fotokarta 1938-1947",
				name : "Orto1940",
				URL : 'http://www.smap.se/tilecache/',
				layer : "skane_ortofoto_1940_sr99tm",
				layerType : "tilecache",
				category : "Fotokarta",
				options : {
					resolutions : [200, 100, 50, 25, 10, 5, 2, 1],
					maxExtent: new OpenLayers.Bounds(335000,6130000, 480000,6270000),
					zIndex: 50,
					buffer : 0,
					transitionEffect : null,
					format : "image/jpg",
					isBaseLayer : true
				},
				copyright : [ 'Lunds universitet', 'http://www.lu.se' ]
			}			
		]
	},
	
	
	modules : 
	[
		{
			init : sMap.Module.Toolbar,
			config : {
				side: "right"
			}
		},
		{
			init: sMap.Module.LinkTo,
			config: {
				displayName: "Hjälp",
				toolbarIndex: 1,
				content: "http://xyz.malmo.se/kartor/smap/hjalp/hjalp.htm",
				dialog: {
					title: "Hjälp",
					width: "720",
					height: "600",
					resizable: false
				}
			}
		},
		{
			init : sMap.Module.FeatureRequester,
			config : {}
		},
		{
			init : sMap.Module.Select,
			config : {
				addSelectWithKey: true,
				dialogIfMany: true,
				multiple: true,
				forceOne: false
			}
		},
		{
			init : sMap.Module.SelectResult,
			config : {
				 addToToolsMenu: "simple",
				 toolBarIndex : 9,
				 selectOnDblClick : true
		 	}
		},
		{
			init : sMap.Module.Popup,
			config : {
				allowDrag: false
			}
		},
		{
			init : sMap.Module.BaselayerSwitcher,
			config : {
				dropDownOnSingle : false,
				buttonWidth : 75,
				dropDownWidth : 130
			}
		},
		{
			init : sMap.Module.OverlaySwitcher.SimpleSwitcher,
			config : {}
		},
		{
			init : sMap.Module.ScaleBar,
			config : {}
		},
		{
			init : sMap.Module.Search,
			config : {
				toolbarIndex : 2,
				dropDownOption: false,
				autoCompleteScriptUrl : "http://kartor.smap.se/cgi-bin/search/sok.py?",
				searchScriptUrl : "http://kartor.smap.se/cgi-bin/search/sokexakt.py"
			}
		},
		{
			init : sMap.Module.ToolsMenu,
			config : {
				toolbarIndex : 3,
				menuBtns : [					
		            {
		            	menuId : "simple",
		            	lblText : "Verktyg",
		            	toolbarIndex : 4/* ,
		            	marginRight: 210 */
		            }
				]
			}
		},
		{
			init : sMap.Module.MeasureDialog,
			config : {
				dialogStartPosition : [240, 100],
				addToToolsMenu: "simple"
			
			}
		},
		{
			init : sMap.Module.CopyLink,
			config : {
				addToToolsMenu: "simple"
			}
		},
		{
			init : sMap.Module.Email,
			config : {
				eMailURL: "http://kartor.smap.se/cgi-bin/email/smapSendEmail.py?",
				eMailTo: "toEmail=",
				eMailSubject: "subject=",
				eMailMsg: "msg=",
				addToToolsMenu: "simple"
			}
		},
		{
			init : sMap.Module.Opacity,
			config : {
				toolbarIndex : 2,
				addToToolsMenu : true
			}
		},
		{
			init : sMap.Module.MousePos,
			config : {}
		},
		{
			init : sMap.Module.Pizza,
			config : {}
		}, 
		{
			init : sMap.Module.Draw,
			config : {
				addToToolsMenu: "simple"
			}
		}
	]
};