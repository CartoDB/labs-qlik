var layer;

define(["text!./cartodb.css", "./cartodb", "qlik"], function (cartoCSS, cartodb, qlik) {
	$("<style>").html(cartoCSS).appendTo("head");
    
	return {
		initialProperties: {
			version: 1.0,
			qHyperCubeDef: {
				qDimensions: [],
				qMeasures: [],
				qInterColumnSortOrder : [],
				qInitialDataFetch: [{
					qWidth: 1,
					qHeight: 50
				}]
			}
		},
		definition: {
			type: "items",
			component: "accordion",
			items: {			
				settings: {
					uses: "settings",
					items : {	
                        viz: {
                            ref: "url",
                            type: "string",
                            label: "Visualization URL",
                        },
                        tn: {
                            ref: "table_name",
                            type: "string",
                            label: "Table name",
                        },
                        fn: {
                            ref: "field_name",
                            type: "string",
                            label: "Field name",
                        }
                    } 
				}				
			}
		},
		snapshot: {
			canTakeSnapshot: true
		},

		paint: function ($element, layout) {
            if (!$element.html()) {
                $element.html('<div id="map" style="width: 100%; height: 100%"></div>');
            }

            var app = qlik.currApp();
            app.getList("CurrentSelections", function (selections) {
                var values;
                if (selections.qSelectionObject.qSelections.length >= 1) {
                    values = selections.qSelectionObject.qSelections[0].qSelected.split(",");
                } else {
                    values = [];
                }
                if (!layer) {
                    createMap(layout.url, layout.table_name, layout.field_name, values);
                } else {
                    updateMap(layout.table_name, layout.field_name, values);
                }
            });
        }
    } 

});

function createMap(url, tableName, fieldName, selectedValues) {
    cartodb.createVis('map', url, {
        zoom: 3,
        center_lat: 40,
        center_lon: 0,
        loaderControl: false,
        zoomControl: false
    }).done(function (vis, layers) {
        layer = layers[1];
        updateMap(tableName, fieldName, selectedValues);
    });
};

function updateMap(tableName, fieldName, selectedValues) {
    var values = "";
    
    for (var i = 0; i < selectedValues.length; i++) {
        if (i != 0) {
            values += ",";
        }
        values += ("'" + selectedValues[i].trim() + "'");
    }
    if (values) {
        layer.getSubLayer(0).setSQL("select * from " + tableName + " where " + fieldName + " in (" + values + ")");
    } else {
        layer.getSubLayer(0).setSQL("select * from " + tableName + " where false");
    }
};

