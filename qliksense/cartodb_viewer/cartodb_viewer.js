define(["text!./cartodb.css", "./cartodb"], function (cartoCSS, cartodb) {
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
                        }
                    } 
                }				
            }
        },
        snapshot: {
            canTakeSnapshot: true
        },
        paint: function ($element, layout) {
            $element.html('<div id="map" style="width: 100%; height: 100%"></div>');
            showMap(layout.url);
        }
    } 
});

function showMap (url) {
    cartodb.createVis('map', url, {
        zoom: 3,
        center_lat: 40,
        center_lon: 0,
        loaderControl: false,
        zoomControl: false
    });
}

