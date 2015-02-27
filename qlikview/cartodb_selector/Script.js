Qva.LoadCSS('http://libs.cartocdn.com/cartodb.js/v3/3.12/themes/css/cartodb.css');
Qva.LoadScript('http://libs.cartocdn.com/cartodb.js/v3/3.12/cartodb.js', function () {
    Qva.AddExtension('cartodb_selector', function() {
        this.Element.innerHTML = '<div id="map" style="width: 100%; height: 100%"></div>';
        var self = this;

        cartodb.createVis('map', this.Layout.Text0.text, {
            zoom: 3,
            center_lat: 40,
            center_lon: 0,
            loaderControl: false,
            zoomControl: false
        }).done(function (vis, layers) {
            self.GetQvObject(self.Layout.Text1.text, updateMap(layers[1], self.Layout.Text2.text, self.Layout.Text3.text));
        });
    }, true);
});

function updateMap (layer, tableName, fieldName) {
    return function () {
        var selectedValues = this.Data.GetSelected();
        var values = "";

        for (var i = 0; i < selectedValues.length; i++) {
            if (i != 0) {
                values += ",";
            }
            values += ("'" + selectedValues[i].text + "'");
        }
        layer.getSubLayer(0).setSQL("select * from " + tableName + " where " + fieldName + " in (" + values + ")");
    };
}

