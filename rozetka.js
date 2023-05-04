/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
const existingPoints = {
    bandery37: {
        center: [49.83447000192225, 24.012596825777948]
    },
    bohdanaHmelnytskogo214: {
        center: [49.86961778011876, 24.057694157435495]
    },
    volodymyraVelykogo18: {
        center: [49.8106498564962, 24.002903450649455]
    },
    viacheslavaChornovola57: {
        center: [49.85603320974714, 24.02125967938594]
    },
    geroivUpa76: {
        center: [49.83093469794996, 23.996086988571626]
    },
    getmanaMazepy1B: {
        center: [49.87037203595101, 24.022945767542677]
    },
    gorodotska8: {
        center: [49.84396733745814, 24.0239476613431]
    },
    zelena151: {
        center: [49.80952022831998, 24.061603377190558]
    },
    kniagynyOlgy100L: {
        center: [49.81691027537777, 24.002262910700406]
    },
    kulparkivska226A: {
        center: [49.80748176125306, 23.978431200212526]
    },
    naukova2G: {
        center: [49.80280663245084, 24.013140589578104]
    },
    syhivska8: {
        center: [49.798174215470226, 24.07178374780449]
    },
    solodova1: {
        center: [49.84103558561014, 24.047439142067986]
    },
    ugorska12: {
        center: [49.81112818164946, 24.04266531769841]
    },
    chervonoiKalyny36: {
        center: [49.79802778033674, 24.047486072055943]
    },
    prospectSchevchenko24: {
        center: [49.83618115485855, 24.031582071742662]
    },
    chyroka83: {
        center: [49.84092459929538, 23.965174312558187]
    },
    chervonoiKalyny62: {
        center: [49.79189831574273, 24.057372552340826]
    }
};

// Add coordinates of the possible points in the city
const possiblePoints = {
    1: {
        center: [49.79024538391721, 24.016670773860284]
    },
    2: {
        center: [49.802291082374154, 23.997361771489224]
    },
    3: {
        center: [49.817601606291895, 24.0257145755491]
    },
    4: {
        center: [49.819611317687986, 24.01968260812536]
    },
    5: {
        center: [49.82579061084975, 24.008887790346584]
    },
    6: {
        center: [49.822390562734995, 23.990266597389375]
    },
    7: {
        center: [49.81972142729978, 23.98117752953423]
    },
    8: {
        center: [49.810772184033596, 24.01799328160564]
    },
    9: {
        center: [49.783838420531715, 24.052979323003964]
    }
};

// add coordinates for poligons to this object
const gkList = {
    parusSmart: {
        points: [
            [49.79890851012223, 24.010618696353987],
            [49.79878742876215, 24.01278086565884],
            [49.79734011002925, 24.011666652306562],
            [49.79754977575857, 24.010306487359376]
        ]
    },
    leopolTown: {
        points: [
            [49.784734839304384, 24.020832079796584],
            [49.78645676336479, 24.021270725094148],
            [49.78668899185999, 24.019121363136087],
            [49.78483679703901, 24.019954789201456]
        ]
    },
    kbityLvova: {
        points: [
            [49.785941676280416, 24.023472804607515],
            [49.785566293600084, 24.02676355652411],
            [49.78404221003921, 24.026310060676952],
            [49.78450769877416, 24.023077449253577]
        ]
    },
    globusPark: {
        points: [
            [49.79203929379476, 24.01024514728807],
            [49.791866294304086, 24.011174708266772],
            [49.790379554457, 24.010772735951658],
            [49.79046065053451, 24.0098013028568]
        ]
    },
    noviyGk: {
        points: [
            [49.784098198115, 24.019487887162903],
            [49.784824084749616, 24.016077981339052],
            [49.7836602612487, 24.016031524856437],
            [49.783390298194405, 24.01936710030811]
        ]
    },
    gkGorgany: {
        points: [
            [49.786947690654245, 24.02201511982339],
            [49.78682171663173, 24.023343775226138],
            [49.78604187015351, 24.02317653188873],
            [49.78619184160508, 24.02181071129989]
        ]
    },
    gkEkoDim: {
        points: [
            [49.788111435209586, 24.022888501699263],
            [49.78798546421351, 24.023882670427195],
            [49.78738559783299, 24.023771174868926],
            [49.78758355455978, 24.0226190541001]
        ]
    },
    gkCompanion: {
        points: [
            [49.79227902180452, 24.00684449810039],
            [49.79196446943332, 24.009697285932038],
            [49.791294770483404, 24.009492954021237],
            [49.791614400682796, 24.00675019106463]
        ]
    },
    gkArena: {
        points: [
            [49.782616572436254, 24.021741115414702],
            [49.782271522899556, 24.02301462318989],
            [49.78183684660884, 24.023181185514705],
            [49.782000410825326, 24.022154051178315]
        ]
    },
    gkParkArena: {
        points: [
            [49.772886573855416, 24.02393352402338],
            [49.77315617071492, 24.02446015410722],
            [49.77381149221245, 24.024010591840526],
            [49.775984773501236, 24.023785810707178],
            [49.775922562605636, 24.023072933398566],
            [49.77368291717433, 24.023150001215715]
        ]
    },
    gkAvalonHoliday: {
        points: [
            [49.78868876282292, 24.010757507378376],
            [49.79025945253086, 24.011154901895093],
            [49.79038858280134, 24.00974735350602],
            [49.791072489234516, 24.00984365944843],
            [49.791306832574136, 24.006887807831376],
            [49.78982901580953, 24.00653962480882],
            [49.78969031871782, 24.0083620295652],
            [49.78886769332085, 24.0083620295652]
        ]
    }
}

const novaPoshtaPoints = {
    57: [49.78916819478422, 24.016658540833372],
    4: [49.79731640272988, 24.006349126797257],
    67: [49.80237238416154, 24.01964432140614]
}

let map;

function initMap() {
    // Create the map.
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: { lat: 49.840469196135196, lng: 24.0288963004247 },
        mapTypeId: "roadmap",
    });

    document
        .getElementById("hide-existing-points")
        .addEventListener("click", hideExistingPoints);
    document
        .getElementById("show-existing-points")
        .addEventListener("click", showExistingPoint);

    initExistingPointsLayer(map);
    initPossiblePointLayer(map);
    // initNewGkPoligons(map);
    initMapOverlay(map);
    initNovaPoshtaPoints(map);
}

function showExistingPoint() {
    setMapOnAll(map)
}

function hideExistingPoints() {
    setMapOnAll(null)
}

const existingPointsAndCircles = []


// Sets the map on all markers in the array.
function setMapOnAll(map) {
    for (let i = 0; i < existingPointsAndCircles.length; i++) {
        existingPointsAndCircles[i][0].setMap(map);
        existingPointsAndCircles[i][1].setMap(map);
    }
}

function initExistingPointsLayer(map) {
    for (const existingPoint in existingPoints) {
        const location = { lat: existingPoints[existingPoint].center[0], lng: existingPoints[existingPoint].center[1]}
        // Add the circle for this city to the map.
        const cityCircle = new google.maps.Circle({
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
            map: map,
            center: location,
            radius: 1000,
        });
        const marker = new google.maps.Marker({
            position: location,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 3,
            },
            draggable: false,
            map: map,
        });
        existingPointsAndCircles.push([cityCircle, marker])
    }

}

function initPossiblePointLayer(map) {
    for (const possiblePoint in possiblePoints) {
        const location = { lat: possiblePoints[possiblePoint].center[0], lng: possiblePoints[possiblePoint].center[1]}
        // Add the circle for this city to the map.
        const cityCircle = new google.maps.Circle({
            strokeColor: "#2ecc7d",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#82e113",
            fillOpacity: 0.35,
            map,
            center: location,
            radius: 1000,
        });
        new google.maps.Marker({
            position: location,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 3,
            },
            draggable: false,
            map: map,
        });
    }
}

function initNewGkPoligons(map) {
    for (let gk in gkList) {

        const gkCoords = [];
        for (let i = 0; i < gkList[gk].points.length; i++) {
            gkCoords.push({ lat: gkList[gk].points[i][0], lng: gkList[gk].points[i][1] })
        }

        // Construct the polygon.
        new google.maps.Polygon({
            paths: gkCoords,
            strokeColor: "#0c0601",
            strokeOpacity: 0.8,
            strokeWeight: 1,
            fillColor: "#ee5f08",
            fillOpacity: 0.9,
            map: map
        });
    }
}

function initMapOverlay(map) {
    const imageBounds = {
        north: 49.80561083732216,
        south: 49.776265380470804,
        east: 24.075916562982005,
        west: 23.98137814078655
    };

    historicalOverlay = new google.maps.GroundOverlay(
        "images/map3.png",
        imageBounds
    );

    historicalOverlay.setMap(map);

    const imageBounds1 = {
        north: 49.8261994872974,
        south: 49.80550200069001,
        east: 24.062473171220756,
        west: 23.981306536229145
    };

    historicalOverlay1 = new google.maps.GroundOverlay(
        "images/map4.png",
        imageBounds1
    );
    historicalOverlay1.setMap(map);
    
}

function initNovaPoshtaPoints(map) {
    for (const npPoint in novaPoshtaPoints) {
        const location = { lat: novaPoshtaPoints[npPoint][0], lng: novaPoshtaPoints[npPoint][1]}

        const icon = {
            url: "images/nova-poshta.png",
            scaledSize: new google.maps.Size(20, 20), // scaled size
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(10, 10)
        };

        new google.maps.Marker({
            position: location,
            map,
            icon: icon
        });
    }

}

window.initMap = initMap;