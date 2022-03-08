var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Conservacin_1 = new ol.format.GeoJSON();
var features_Conservacin_1 = format_Conservacin_1.readFeatures(json_Conservacin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Conservacin_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Conservacin_1.addFeatures(features_Conservacin_1);
var lyr_Conservacin_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Conservacin_1, 
                style: style_Conservacin_1,
                interactive: true,
    title: 'Conservación<br />\
    <img src="styles/legend/Conservacin_1_0.png" /> Muy Alta<br />\
    <img src="styles/legend/Conservacin_1_1.png" /> Alta<br />\
    <img src="styles/legend/Conservacin_1_2.png" /> Media<br />\
    <img src="styles/legend/Conservacin_1_3.png" /> Baja<br />\
    <img src="styles/legend/Conservacin_1_4.png" /> Muy Baja<br />'
        });
var format_readeinteres_2 = new ol.format.GeoJSON();
var features_readeinteres_2 = format_readeinteres_2.readFeatures(json_readeinteres_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_readeinteres_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeinteres_2.addFeatures(features_readeinteres_2);
var lyr_readeinteres_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_readeinteres_2, 
                style: style_readeinteres_2,
                interactive: true,
                title: '<img src="styles/legend/readeinteres_2.png" /> Área de interes'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Conservacin_1.setVisible(true);lyr_readeinteres_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Conservacin_1,lyr_readeinteres_2];
lyr_Conservacin_1.set('fieldAliases', {'Ponde': 'Ponde', });
lyr_readeinteres_2.set('fieldAliases', {'id_cuenca': 'id_cuenca', 'nom_cuenca': 'nom_cuenca', 'id_rha': 'id_rha', 'nom_rha': 'nom_rha', 'fecha_dof': 'fecha_dof', 'clasif': 'clasif', 'vol_disp': 'vol_disp', 'nota': 'nota', 'año': 'año', 'Shape_area': 'Shape_area', 'Shape_len': 'Shape_len', });
lyr_Conservacin_1.set('fieldImages', {'Ponde': 'TextEdit', });
lyr_readeinteres_2.set('fieldImages', {'id_cuenca': 'TextEdit', 'nom_cuenca': 'TextEdit', 'id_rha': 'TextEdit', 'nom_rha': 'TextEdit', 'fecha_dof': 'TextEdit', 'clasif': 'TextEdit', 'vol_disp': 'TextEdit', 'nota': 'TextEdit', 'año': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_len': 'TextEdit', });
lyr_Conservacin_1.set('fieldLabels', {'Ponde': 'no label', });
lyr_readeinteres_2.set('fieldLabels', {'id_cuenca': 'no label', 'nom_cuenca': 'no label', 'id_rha': 'no label', 'nom_rha': 'no label', 'fecha_dof': 'no label', 'clasif': 'no label', 'vol_disp': 'no label', 'nota': 'no label', 'año': 'no label', 'Shape_area': 'no label', 'Shape_len': 'no label', });
lyr_readeinteres_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});