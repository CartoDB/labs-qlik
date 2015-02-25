Qva.LoadCSS('http://libs.cartocdn.com/cartodb.js/v3/3.12/themes/css/cartodb.css');
Qva.LoadScript('http://libs.cartocdn.com/cartodb.js/v3/3.12/cartodb.js', function () {
    Qva.AddExtension('cartodb', function() { 
        this.Element.innerHTML = '<div id="map" style="width: 100%; height: 100%"></div>';
        cartodb.createVis('map', this.Layout.Text0.text, {
            zoom: 3,
            center_lat: 40,
            center_lon: 0,
            loaderControl: false,
            zoomControl: false
        });
    }, true);
});

