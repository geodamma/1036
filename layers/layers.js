ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3825").setExtent([179969.582684, 2702526.584330, 181815.552681, 2703780.317399]);
var wms_layers = [];

var lyr_1975_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "後浦1975",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1975_0.png",
    attributions: ' ',
                                projection: 'EPSG:3825',
                                alwaysInRange: true,
                                imageExtent: [180034.877242, 2702633.827561, 181628.833190, 2703656.104246]
                            })
                        });
var format_big5_1 = new ol.format.GeoJSON();
var features_big5_1 = format_big5_1.readFeatures(json_big5_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource_big5_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_big5_1.addFeatures(features_big5_1);
var lyr_big5_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_big5_1, 
                style: style_big5_1,
                interactive: true,
                title: '<img src="styles/legend/big5_1.png" /> big5后浦建物'
            });

lyr_1975_0.setVisible(true);lyr_big5_1.setVisible(true);
var layersList = [lyr_1975_0,lyr_big5_1];
lyr_big5_1.set('fieldAliases', {'Build_STR': 'Build_STR', 'Build_NO': 'Build_NO', });
lyr_big5_1.set('fieldImages', {'Build_STR': '', 'Build_NO': '', });
lyr_big5_1.set('fieldLabels', {'Build_STR': 'header label', 'Build_NO': 'header label', });
lyr_big5_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});