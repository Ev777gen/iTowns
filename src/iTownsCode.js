// //-----------------------------------------------------------------------------------------
// // Tutorial : Raster visualization - WGS84 (EPSG:4326)
// //-----------------------------------------------------------------------------------------

// // 1. Creating a view
// var viewerDiv = document.getElementById('viewerDiv');
// var placement = {
//     coord: new itowns.Coordinates('EPSG:4326', 58.782344, 53.424005),
//     range: 25e6
// };
// var view = new itowns.GlobeView(viewerDiv, placement);

// // 2. Adding a color layer
// var orthoSource = new itowns.WMTSSource({
//     url: 'http://wxs.ign.fr/3ht7xcw6f7nciopo16etuqp2/geoportail/wmts',
//     crs: 'EPSG:3857',
//     name: 'ORTHOIMAGERY.ORTHOPHOTOS',
//     tileMatrixSet: 'PM',
//     format: 'image/jpeg',
// });

// var orthoLayer = new itowns.ColorLayer('Ortho', {
//     source: orthoSource,
// });

// view.addLayer(orthoLayer);

// // 3. Adding an elevation layer
// var elevationSource = new itowns.WMTSSource({
//     url: 'http://wxs.ign.fr/3ht7xcw6f7nciopo16etuqp2/geoportail/wmts',
//     crs: 'EPSG:4326',
//     name: 'ELEVATION.ELEVATIONGRIDCOVERAGE.SRTM3',
//     tileMatrixSet: 'WGS84G',
//     format: 'image/x-bil;bits=32',
//     zoom: {min: 3, max: 10}
// });

// var elevationLayer = new itowns.ElevationLayer('MNT_WORLD', {
//     source: elevationSource,
// });

// view.addLayer(elevationLayer);




// //-----------------------------------------------------------------------------------------
// // Tutorial : Vector visualization - As 3D objects
// //-----------------------------------------------------------------------------------------

// // 1. Растровая заготовка
// var viewerDiv = document.getElementById('viewerDiv');
// var placement = {
//     coord: new itowns.Coordinates('EPSG:4326', 4.818, 45.7354),
//     range: 1000,
//     tilt: 20,
// };
// var view = new itowns.GlobeView(viewerDiv, placement);

// var colorSource = new itowns.WMTSSource({
//     url: 'http://wxs.ign.fr/3ht7xcw6f7nciopo16etuqp2/geoportail/wmts',
//     crs: 'EPSG:3857',
//     name: 'ORTHOIMAGERY.ORTHOPHOTOS',
//     tileMatrixSet: 'PM',
//     format: 'image/jpeg'
// });

// var colorLayer = new itowns.ColorLayer('Ortho', {
//     source: colorSource,
// });

// view.addLayer(colorLayer);

// var elevationSource = new itowns.WMTSSource({
//     url: 'http://wxs.ign.fr/3ht7xcw6f7nciopo16etuqp2/geoportail/wmts',
//     crs: 'EPSG:4326',
//     name: 'ELEVATION.ELEVATIONGRIDCOVERAGE.HIGHRES',
//     tileMatrixSet: 'WGS84G',
//     format: 'image/x-bil;bits=32',
//     tileMatrixSetLimits: {
//         11: {
//             minTileRow: 442,
//             maxTileRow: 1267,
//             minTileCol: 1344,
//             maxTileCol: 2683
//         },
//         12: {
//             minTileRow: 885,
//             maxTileRow: 2343,
//             minTileCol: 3978,
//             maxTileCol: 5126
//         },
//         13: {
//             minTileRow: 1770,
//             maxTileRow: 4687,
//             minTileCol: 7957,
//             maxTileCol: 10253
//         },
//         14: {
//             minTileRow: 3540,
//             maxTileRow: 9375,
//             minTileCol: 15914,
//             maxTileCol: 20507
//         }
//     }
// });

// var elevationLayer = new itowns.ElevationLayer('MNT_WORLD', {
//     source: elevationSource,
// });

// view.addLayer(elevationLayer);

// // 2. Adding a GeometryLayer
// // 3. Placing the data on the ground
// // 4. Extruding the data
// // 5. Coloring the data
// function setAltitude(properties) {
//     return properties.z_min - properties.hauteur;
// }

// function setExtrusion(properties) {
//     return properties.hauteur;
// }

// function setColor(properties) {
//     return new itowns.THREE.Color(0xaaaaaa);
// }

// var geometrySource = new itowns.WFSSource({
//     url: 'http://wxs.ign.fr/3ht7xcw6f7nciopo16etuqp2/geoportail/wfs?',
//     typeName: 'BDTOPO_BDD_WLD_WGS84G:bati_indifferencie',
//     crs: 'EPSG:4326',
// });

// var geometryLayer = new itowns.FeatureGeometryLayer('Buildings', {
//     source: geometrySource,
//     zoom: { min: 14 },
//     style: new itowns.Style({
//         fill: {
//             color: setColor,
//             base_altitude: setAltitude,
//             extrusion_height: setExtrusion,
//         },
//     }),
// });

// view.addLayer(geometryLayer);



// //-----------------------------------------------------------------------------------------
// // Tutorial : Vector visualization - Projected on the ground
// //-----------------------------------------------------------------------------------------

// // 1. Preparing the field
        
// // Retrieve the view container
// var viewerDiv = document.getElementById('viewerDiv');

// // Define the camera initial placement
// var placement = {
//     coord: new itowns.Coordinates('EPSG:4326', 3.05, 48.97),
//     range: 15000,
// };

// // Create the view
// var view = new itowns.GlobeView(viewerDiv, placement);

// // Define the source of the ortho-images
// var orthoSource = new itowns.WMTSSource({
//     url: 'https://wxs.ign.fr/3ht7xcw6f7nciopo16etuqp2/geoportail/wmts',
//     crs: "EPSG:3857",
//     name: 'ORTHOIMAGERY.ORTHOPHOTOS',
//     tileMatrixSet: 'PM',
//     format: 'image/jpeg',
// })
// // Create the ortho-images ColorLayer and add it to the view
// var orthoLayer = new itowns.ColorLayer('Ortho', {
//     source: orthoSource,
// });
// view.addLayer(orthoLayer);

// // Define the source of the dem data
// var elevationSource = new itowns.WMTSSource({
//     url: 'https://wxs.ign.fr/3ht7xcw6f7nciopo16etuqp2/geoportail/wmts',
//     crs: 'EPSG:4326',
//     name: 'ELEVATION.ELEVATIONGRIDCOVERAGE.SRTM3',
//     tileMatrixSet: 'WGS84G',
//     format: 'image/x-bil;bits=32',
//     zoom: {min: 3, max: 10},
// });
// // Create the DEM ElevationLayer and add it to the view
// var elevationLayer = new itowns.ElevationLayer('DEM', {
//     source: elevationSource,
// });
// view.addLayer(elevationLayer);

// // 2. Display flood risk areas on the ground
// var floodSource = new itowns.FileSource({
//     url: 'https://raw.githubusercontent.com/iTowns/iTowns2-sample-data/master/multipolygon.geojson',
//     crs: 'EPSG:4326',
//     format: 'application/json',
// });

// var floodStyle = new itowns.Style({
//     fill: {
//         color: 'cyan',
//         opacity: 0.5,
//     },
//     stroke: {
//         color: 'blue',
//     },
// });

// var floodLayer = new itowns.ColorLayer('flood', {
//     source: floodSource,
//     style: floodStyle,
// });
// view.addLayer(floodLayer);

// // 3. Display city areas and names
// var citySource = new itowns.FileSource({
//     url: 'https://raw.githubusercontent.com/iTowns/iTowns2-sample-data/master/cities.geojson',
//     crs: 'EPSG:4326',
//     format: 'application/json',
// });

// var cityStyle = new itowns.Style({
//     stroke: {
//         color: 'red',
//     },
//     point: {
//         color: 'white',
//         line: 'red',
//         radius: 3,
//     },
//     text: {
//         field: '{name}',
//         anchor: 'bottom-left',
//         size: 18,
//         haloColor: 'white',
//         haloWidth: 1,
//         font: ['monospace'],
//     },
// });

// var cityLayer = new itowns.ColorLayer('cities', {
//     source: citySource,
//     style: cityStyle,
//     addLabelLayer: true, // чтобы отображались надписи
// });
// view.addLayer(cityLayer);



// //-----------------------------------------------------------------------------------------
// // Tutorial : 3D Tiles visualization - 3D textured buildings
// //-----------------------------------------------------------------------------------------

// // 1. Preparing the field
// // Define crs projection that we will use (taken from https://epsg.io/3946, Proj4js section)
// itowns.proj4.defs('EPSG:3946', 
// '+proj=lcc +lat_1=45.25 +lat_2=46.75 +lat_0=46 +lon_0=3 +x_0=1700000 +y_0=5200000 +ellps=GRS80' + 
// '+towgs84=0,0,0,0,0,0,0 +units=m +no_defs');

// // Define geographic extent: CRS, min/max X, min/max Y
// var extent = new itowns.Extent( 'EPSG:3946',
//     1837816.94334, 1847692.32501,
//     5170036.4587, 5178412.82698);

// // `viewerDiv` will contain iTowns' rendering area (`<canvas>`)
// var viewerDiv = document.getElementById('viewerDiv');

// // Instanciate PlanarView*
// var cameraCoord = new itowns.Coordinates('EPSG:3946', 1841980,
//     5175682, 3000)
// var view = new itowns.PlanarView(viewerDiv, extent, { placement: {
//     coord: cameraCoord, heading: 30, range: 4000, tilt: 30 } });

// // Add a WMS imagery source
// var wmsImagerySource = new itowns.WMSSource({
//     extent: extent,
//     name: 'Ortho2009_vue_ensemble_16cm_CC46',
//     url: 'https://download.data.grandlyon.com/wms/grandlyon',
//     version: '1.3.0',
//     crs: 'EPSG:3946',
//     format: 'image/jpeg',
// });

// // Add a WMS imagery layer
// var wmsImageryLayer = new itowns.ColorLayer('wms_imagery', {
//     updateStrategy: {
//         type: itowns.STRATEGY_DICHOTOMY,
//         options: {},
//     },
//     source: wmsImagerySource,
// });

// view.addLayer(wmsImageryLayer);

// // Add a WMS elevation source
// var wmsElevationSource = new itowns.WMSSource({
//     extent: extent,
//     url: 'https://download.data.grandlyon.com/wms/grandlyon',
//     name: 'MNT2012_Altitude_10m_CC46',
//     crs: 'EPSG:3946',
//     width: 256,
//     format: 'image/jpeg',
// });

// // Add a WMS elevation layer
// var wmsElevationLayer = new itowns.ElevationLayer('wms_elevation', {
//     useColorTextureElevation: true,
//     colorTextureElevationMinZ: 144,
//     colorTextureElevationMaxZ: 622,
//     source: wmsElevationSource,
// });

// view.addLayer(wmsElevationLayer);

// // 2. Adding the 3D Tiles Layer
// itowns.enableDracoLoader('node_modules/itowns/examples/libs/draco/');

// const buildingsSource = new itowns.C3DTilesSource({
//     url: 'https://raw.githubusercontent.com/iTowns/iTowns2-sample-data/master/' +
//     '3DTiles/lyon_1_3946_textured_draco/tileset.json',
// });

// const buildingsLayer = new itowns.C3DTilesLayer('buildings', {
//     source: buildingsSource,
// }, view);
// itowns.View.prototype.addLayer.call(view, buildingsLayer);

// // 3. Add light effects
// const directionalLight = new itowns.THREE.DirectionalLight(0xffffff, 1);
// directionalLight.position.set(-0.9, 0.3, 1);
// directionalLight.updateMatrixWorld();
// view.scene.add(directionalLight);

// const ambientLight = new itowns.THREE.AmbientLight(0xffffff, 1);
// view.scene.add(ambientLight);



//-----------------------------------------------------------------------------------------
// Tutorial : 3D Tiles visualization - 3D point clouds
//-----------------------------------------------------------------------------------------

// 1. Preparing the field
var viewerDiv = document.getElementById('viewerDiv');
var placement = {
    coord: new itowns.Coordinates('EPSG:4326', 3.3792, 44.3335, 844),
    tilt: 22,
    heading: -180,
    range: 2840
};

var view = new itowns.GlobeView(viewerDiv, placement);

var orthoSource = new itowns.TMSSource({
    crs: "EPSG:3857",
    isInverted: true,
    format: "image/png",
    url: "http://osm.oslandia.io/styles/klokantech-basic/${z}/${x}/${y}.png",
    attribution: {
        name:"OpenStreetMap",
        url: "http://www.openstreetmap.org/"
    },
    tileMatrixSet: "PM"
});

var orthoLayer = new itowns.ColorLayer('Ortho', {
    source: orthoSource,
});

view.addLayer(orthoLayer);

var elevationSource = new itowns.WMTSSource({
    url: 'http://wxs.ign.fr/3ht7xcw6f7nciopo16etuqp2/geoportail/wmts',
    crs: 'EPSG:4326',
    name: 'ELEVATION.ELEVATIONGRIDCOVERAGE.HIGHRES',
    tileMatrixSet: 'WGS84G',
    format: 'image/x-bil;bits=32',
    tileMatrixSetLimits: {
        11: {
            minTileRow: 442,
            maxTileRow: 1267,
            minTileCol: 1344,
            maxTileCol: 2683
        },
        12: {
            minTileRow: 885,
            maxTileRow: 2343,
            minTileCol: 3978,
            maxTileCol: 5126
        },
        13: {
            minTileRow: 1770,
            maxTileRow: 4687,
            minTileCol: 7957,
            maxTileCol: 10253
        },
        14: {
            minTileRow: 3540,
            maxTileRow: 9375,
            minTileCol: 15914,
            maxTileCol: 20507
        }
    }
});

var elevationLayer = new itowns.ElevationLayer('MNT_WORLD', {
    source: elevationSource,
});

view.addLayer(elevationLayer);

// 2. Adding the 3D Tiles Layer
// 3. Updating 3D Tiles style
const pointCloudSource = new itowns.C3DTilesSource({
    url: 'https://raw.githubusercontent.com/iTowns/iTowns2-sample-data/' +
    'master/3DTiles/lidar-hd-gorges-saint-chely-tarn/tileset.json',
});

function updatePointCloudSize(tileContent) {
    tileContent.traverse(function (obj) {
        if (obj.isPoints) {
            obj.material.size = 3.0;
        }
    });
}

const pointCloudLayer = new itowns.C3DTilesLayer('gorges', {
    source: pointCloudSource,
    onTileContentLoaded: updatePointCloudSize
}, view);
itowns.View.prototype.addLayer.call(view, pointCloudLayer);