[
    {
        "id": "26ea13a.8d108ec",
        "type": "tab",
        "label": "Appliances",
        "disabled": false,
        "info": ""
    },
    {
        "id": "29dc5e28.424cba",
        "type": "function",
        "z": "26ea13a.8d108ec",
        "name": "",
        "func": "\nfunction bytesToInt(bytes) {\n  // return little-endian 16-bit integer\n  return (((bytes[1] & 0xFF) << 8) | (bytes[0] & 0xFF));\n}\n\nif(msg.status === \"OK\") {\n    var amp = bytesToInt(msg.payload.slice(4,6)) / 2560;\n    msg.payload = amp;\n    return msg;\n}",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 435,
        "y": 509.84844970703125,
        "wires": [
            [
                "87ed5ca1.aca228"
            ]
        ]
    },
    {
        "id": "8e347d4b.bd5f48",
        "type": "serial request",
        "z": "26ea13a.8d108ec",
        "name": "",
        "serial": "a778bb0a.014748",
        "x": 285,
        "y": 509.84844970703125,
        "wires": [
            [
                "29dc5e28.424cba"
            ]
        ]
    },
    {
        "id": "7b51785c.14bd2",
        "type": "inject",
        "z": "26ea13a.8d108ec",
        "name": "37 00 A",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "60",
        "crontab": "",
        "once": true,
        "onceDelay": "30",
        "topic": "",
        "payload": "[\"0xC1\",\"0xF0\",\"0x37\",\"0x00\",\"0x00\",\"0x00\",\"0x00\",\"0x01\",\"0xE9\"]",
        "payloadType": "bin",
        "x": 115,
        "y": 509.84844970703125,
        "wires": [
            [
                "8e347d4b.bd5f48"
            ]
        ]
    },
    {
        "id": "87ed5ca1.aca228",
        "type": "ui_chart",
        "z": "26ea13a.8d108ec",
        "name": "",
        "group": "6371b00c.27e46",
        "order": 8,
        "width": "6",
        "height": "3",
        "label": "Input Current",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "",
        "ymax": "",
        "removeOlder": 1,
        "removeOlderPoints": "",
        "removeOlderUnit": "86400",
        "cutout": 0,
        "useOneColor": false,
        "useUTC": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "useDifferentColor": false,
        "x": 585,
        "y": 509.84844970703125,
        "wires": [
            []
        ]
    },
    {
        "id": "f404e668.f56398",
        "type": "function",
        "z": "26ea13a.8d108ec",
        "name": "",
        "func": "function bytesToInt(bytes) {\n  // return little-endian 32-bit integer\n    var value = \n        ((bytes[0] & 0xFF) <<  0) |\n        ((bytes[1] & 0xFF) <<  8) |\n        ((bytes[2] & 0xFF) << 16) |\n        ((bytes[3] & 0xFF) << 24);\n    return value;\n}\n\nif(msg.status === \"OK\") {\n    var amp = bytesToInt(msg.payload.slice(4,8)) / 2560;\n    msg.payload = amp;\n    return msg;\n}",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 435,
        "y": 569.8484497070312,
        "wires": [
            [
                "78658990.7ac43"
            ]
        ]
    },
    {
        "id": "3c71dede.4bd452",
        "type": "serial request",
        "z": "26ea13a.8d108ec",
        "name": "",
        "serial": "a778bb0a.014748",
        "x": 285,
        "y": 569.8484497070312,
        "wires": [
            [
                "f404e668.f56398"
            ]
        ]
    },
    {
        "id": "897c07fb.08b3e",
        "type": "inject",
        "z": "26ea13a.8d108ec",
        "name": "24 00 A&B",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "60",
        "crontab": "",
        "once": true,
        "onceDelay": "35",
        "topic": "",
        "payload": "[\"0xC1\",\"0xF0\",\"0x24\",\"0x00\",\"0x00\",\"0x00\",\"0x00\",\"0x01\",\"0xD6\"]",
        "payloadType": "bin",
        "x": 125,
        "y": 569.8484497070312,
        "wires": [
            [
                "3c71dede.4bd452"
            ]
        ]
    },
    {
        "id": "b94d98fd.528a5",
        "type": "function",
        "z": "26ea13a.8d108ec",
        "name": "",
        "func": "\nfunction bytesToInt(bytes) {\n  // return little-endian 16-bit integer\n  return (((bytes[1] & 0xFF) << 8) | (bytes[0] & 0xFF));\n}\n\nif(msg.status === \"OK\") {\n    var amp = bytesToInt(msg.payload.slice(4,6)) / 2560;\n    msg.payload = amp;\n    return msg;\n}",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 435,
        "y": 629.8484497070312,
        "wires": [
            [
                "d7a1e9c1.86586"
            ]
        ]
    },
    {
        "id": "288ff1d3.0cca76",
        "type": "serial request",
        "z": "26ea13a.8d108ec",
        "name": "",
        "serial": "a778bb0a.014748",
        "x": 285,
        "y": 629.8484497070312,
        "wires": [
            [
                "b94d98fd.528a5"
            ]
        ]
    },
    {
        "id": "ecfd775c.e2236",
        "type": "inject",
        "z": "26ea13a.8d108ec",
        "name": "38 00 A",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "60",
        "crontab": "",
        "once": true,
        "onceDelay": "40",
        "topic": "",
        "payload": "[\"0xC1\",\"0xF0\",\"0x38\",\"0x00\",\"0x00\",\"0x00\",\"0x00\",\"0x01\",\"0xEA\"]",
        "payloadType": "bin",
        "x": 115,
        "y": 629.8484497070312,
        "wires": [
            [
                "288ff1d3.0cca76"
            ]
        ]
    },
    {
        "id": "d7a1e9c1.86586",
        "type": "ui_chart",
        "z": "26ea13a.8d108ec",
        "name": "",
        "group": "6371b00c.27e46",
        "order": 9,
        "width": "6",
        "height": "3",
        "label": "Output Current",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "",
        "ymax": "",
        "removeOlder": 1,
        "removeOlderPoints": "",
        "removeOlderUnit": "86400",
        "cutout": 0,
        "useOneColor": false,
        "useUTC": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "useDifferentColor": false,
        "x": 595,
        "y": 629.8484497070312,
        "wires": [
            []
        ]
    },
    {
        "id": "78658990.7ac43",
        "type": "ui_chart",
        "z": "26ea13a.8d108ec",
        "name": "",
        "group": "6371b00c.27e46",
        "order": 10,
        "width": "6",
        "height": "3",
        "label": "DC Current",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "",
        "ymax": "",
        "removeOlder": 1,
        "removeOlderPoints": "",
        "removeOlderUnit": "86400",
        "cutout": 0,
        "useOneColor": false,
        "useUTC": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "useDifferentColor": false,
        "x": 585,
        "y": 569.8484497070312,
        "wires": [
            []
        ]
    },
    {
        "id": "c04a3d84.8376d",
        "type": "function",
        "z": "26ea13a.8d108ec",
        "name": "",
        "func": "function bitPart(whole, from, to){\n    return ((whole & ((1 << to) - 1) & ~(((1 << from) - 1))) >>> from);\n}\n\nif(msg.status === \"OK\") {\n    var load = bitPart(msg.payload.slice(3,4)[0], 1, 6); // 00110000 > 1100\n    var chrg = bitPart(msg.payload.slice(3,4)[0], 6, 7); // 00110000 > 0\n    var pct  = 0;\n    var off = {\n        // \"payload\": 0,\n        \"enabled\": false\n    }\n    \n    switch(load) {\n        case 31: \n            pct = 100;\n            break;\n        case 30:\n            pct = 75;\n            break;\n        case 28:\n            pct = 50;\n            break;\n        case 24:\n            pct = 25;\n            break;\n        case 16: \n            pct = 5;\n            break;\n    }\n    \n    msg.payload = pct;\n    msg.enabled = true;\n    \n    if(chrg) {\n        return [msg, off];\n    } else {\n        return [off, msg];\n    }\n}",
        "outputs": 2,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 435,
        "y": 709.8484497070312,
        "wires": [
            [
                "98913faa.ae11e"
            ],
            [
                "9358750.9d6e108"
            ]
        ]
    },
    {
        "id": "254d8d6.59db1f2",
        "type": "serial request",
        "z": "26ea13a.8d108ec",
        "name": "",
        "serial": "a778bb0a.014748",
        "x": 285,
        "y": 709.8484497070312,
        "wires": [
            [
                "c04a3d84.8376d"
            ]
        ]
    },
    {
        "id": "7f1fae93.3c1cd8",
        "type": "inject",
        "z": "26ea13a.8d108ec",
        "name": "25 00 A1",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "60",
        "crontab": "",
        "once": true,
        "onceDelay": "40",
        "topic": "",
        "payload": "[\"0xC1\",\"0xF0\",\"0x25\",\"0x00\",\"0x00\",\"0x00\",\"0x00\",\"0x01\",\"0xD7\"]",
        "payloadType": "bin",
        "x": 125,
        "y": 709.8484497070312,
        "wires": [
            [
                "254d8d6.59db1f2"
            ]
        ]
    },
    {
        "id": "9358750.9d6e108",
        "type": "ui_gauge",
        "z": "26ea13a.8d108ec",
        "name": "",
        "group": "6371b00c.27e46",
        "order": 14,
        "width": "3",
        "height": "3",
        "gtype": "gage",
        "title": "Inverter Load",
        "label": "%",
        "format": "{{value}}",
        "min": 0,
        "max": "100",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "25",
        "seg2": "75",
        "x": 585,
        "y": 729.8484497070312,
        "wires": []
    },
    {
        "id": "133eef40.eda9a9",
        "type": "ui_chart",
        "z": "26ea13a.8d108ec",
        "name": "",
        "group": "6371b00c.27e46",
        "order": 11,
        "width": "6",
        "height": "3",
        "label": "0x32 A",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "",
        "ymax": "",
        "removeOlder": 1,
        "removeOlderPoints": "",
        "removeOlderUnit": "86400",
        "cutout": 0,
        "useOneColor": false,
        "useUTC": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "useDifferentColor": false,
        "x": 1095,
        "y": 169.84844970703125,
        "wires": [
            []
        ]
    },
    {
        "id": "d2e79314.b3d988",
        "type": "function",
        "z": "26ea13a.8d108ec",
        "name": "",
        "func": "function bitPart(whole, from, to){\n    return ((whole & ((1 << to) - 1) & ~(((1 << from) - 1))) >>> from);\n}\n\nif(msg.status === \"OK\") {\n    // this should check if the charger is on (currently shows 5% when it's off)\n    var soc = bitPart(msg.payload.slice(4,5)[0], 4, 8); // [1111]0001 > 1111\n    var inv = bitPart(msg.payload.slice(4,5)[0], 1, 2); // 100000[1]1 > 1\n    var pct  = 0;\n    var off = {\n        // \"payload\": 0,\n        \"enabled\": false\n    }\n    \n    switch(soc) {\n        case 15: \n            pct = 100;\n            break;\n        case 14:\n            pct = 75;\n            break;\n        case 12:\n            pct = 50;\n            break;\n        case 8:\n            pct = 25;\n            break;\n        case 0: \n            pct = 5;\n            break;\n    }\n    \n    msg.payload = pct;\n    msg.enabled = true;\n    \n    if(inv) {\n        return [msg, off];\n    } else {\n        return [off, msg];\n    }\n}",
        "outputs": 2,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 435,
        "y": 789.8484497070312,
        "wires": [
            [
                "cc673415.1209f8"
            ],
            [
                "51661b62.1f7bdc"
            ]
        ]
    },
    {
        "id": "df43e9ad.7ed0f8",
        "type": "serial request",
        "z": "26ea13a.8d108ec",
        "name": "",
        "serial": "a778bb0a.014748",
        "x": 285,
        "y": 789.8484497070312,
        "wires": [
            [
                "d2e79314.b3d988"
            ]
        ]
    },
    {
        "id": "82e1220c.bf96a",
        "type": "inject",
        "z": "26ea13a.8d108ec",
        "name": "25 00 A2",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "60",
        "crontab": "",
        "once": true,
        "onceDelay": "40",
        "topic": "",
        "payload": "[\"0xC1\",\"0xF0\",\"0x25\",\"0x00\",\"0x00\",\"0x00\",\"0x00\",\"0x01\",\"0xD7\"]",
        "payloadType": "bin",
        "x": 125,
        "y": 789.8484497070312,
        "wires": [
            [
                "df43e9ad.7ed0f8"
            ]
        ]
    },
    {
        "id": "cc673415.1209f8",
        "type": "ui_gauge",
        "z": "26ea13a.8d108ec",
        "name": "",
        "group": "6371b00c.27e46",
        "order": 15,
        "width": "3",
        "height": "3",
        "gtype": "wave",
        "title": "State of Charge",
        "label": "%",
        "format": "{{value}}",
        "min": 0,
        "max": "100",
        "colors": [
            "#ca3838",
            "#e6e600",
            "#00b500"
        ],
        "seg1": "25",
        "seg2": "75",
        "x": 595,
        "y": 769.8484497070312,
        "wires": []
    },
    {
        "id": "51661b62.1f7bdc",
        "type": "ui_gauge",
        "z": "26ea13a.8d108ec",
        "name": "",
        "group": "6371b00c.27e46",
        "order": 13,
        "width": "3",
        "height": "3",
        "gtype": "wave",
        "title": "Charger Stage",
        "label": "%",
        "format": "{{value}}",
        "min": 0,
        "max": "100",
        "colors": [
            "#ca3838",
            "#e6e600",
            "#00b500"
        ],
        "seg1": "25",
        "seg2": "75",
        "x": 595,
        "y": 809.8484497070312,
        "wires": []
    },
    {
        "id": "98913faa.ae11e",
        "type": "ui_gauge",
        "z": "26ea13a.8d108ec",
        "name": "",
        "group": "6371b00c.27e46",
        "order": 12,
        "width": "3",
        "height": "3",
        "gtype": "gage",
        "title": "DC Load",
        "label": "%",
        "format": "{{value}}",
        "min": 0,
        "max": "100",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "25",
        "seg2": "75",
        "x": 575,
        "y": 689.8484497070312,
        "wires": []
    },
    {
        "id": "83ae5f7f.81002",
        "type": "serial request",
        "z": "26ea13a.8d108ec",
        "name": "",
        "serial": "a778bb0a.014748",
        "x": 285,
        "y": 349.84844970703125,
        "wires": [
            [
                "cc79647f.374ea"
            ]
        ]
    },
    {
        "id": "1155ea1d.40edae",
        "type": "inject",
        "z": "26ea13a.8d108ec",
        "name": "MV Panel",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "10",
        "crontab": "",
        "once": true,
        "onceDelay": "4",
        "topic": "",
        "payload": "[\"0xC1\",\"0xF0\",\"0x25\",\"0x00\",\"0x00\",\"0x00\",\"0x00\",\"0x01\",\"0xD7\"]",
        "payloadType": "bin",
        "x": 125,
        "y": 349.84844970703125,
        "wires": [
            [
                "83ae5f7f.81002"
            ]
        ]
    },
    {
        "id": "cc79647f.374ea",
        "type": "function",
        "z": "26ea13a.8d108ec",
        "name": "",
        "func": "function getBit(byte, pos) {\n   return (byte >> pos) & 1;\n}\n\nif(msg.status === \"OK\") {\n    var pwr     = getBit(msg.payload[6], 0); // 0001 010[1] > 1\n    var inv_on  = getBit(msg.payload[4], 1); // 1000 00[1]1 > 1\n    var inv_err = getBit(msg.payload[4], 2); // 1000 00[1]1 > 1\n    var chg_on  = getBit(msg.payload[3], 7); // [0]011 0000 > 0\n    var chg_err = getBit(msg.payload[3], 0); // 1111 010[1] > 1\n    var alm     = getBit(msg.payload[5], 6); \n    var err     = 0; // where to look for \"failure\"?\n    var inv     = inv_err ? 2 : inv_on;\n    var chg     = chg_err ? 2 : chg_on;\n    return [\n        {\"payload\": pwr}, // inverted\n        {\"payload\": inv},\n        {\"payload\": chg},\n        {\"payload\": alm},\n        {\"payload\": err}\n    ]\n} else {\n    return [\n        {\"payload\": -1},\n        {\"payload\": -1},\n        {\"payload\": -1},\n        {\"payload\": -1},\n        {\"payload\": -1}\n    ]\n}",
        "outputs": 5,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 435,
        "y": 349.84844970703125,
        "wires": [
            [
                "cc768dc3.7ae32"
            ],
            [
                "42c7d5f8.3de2ec"
            ],
            [
                "931f5d3e.5dd318"
            ],
            [
                "ad2a7afb.2e6518"
            ],
            [
                "5904231f.d0e9f4"
            ]
        ]
    },
    {
        "id": "cc768dc3.7ae32",
        "type": "ui_led",
        "z": "26ea13a.8d108ec",
        "order": 1,
        "group": "6371b00c.27e46",
        "width": "6",
        "height": "1",
        "label": "Shore Power",
        "labelPlacement": "left",
        "labelAlignment": "left",
        "colorForValue": [
            {
                "color": "#808080",
                "value": "-1",
                "valueType": "num"
            },
            {
                "color": "#008000",
                "value": "0",
                "valueType": "num"
            },
            {
                "color": "#000000",
                "value": "1",
                "valueType": "num"
            },
            {
                "color": "#ff0000",
                "value": "2",
                "valueType": "num"
            }
        ],
        "allowColorForValueInMessage": false,
        "shape": "square",
        "showGlow": false,
        "name": "Shore Power",
        "x": 645,
        "y": 269.84844970703125,
        "wires": []
    },
    {
        "id": "42c7d5f8.3de2ec",
        "type": "ui_led",
        "z": "26ea13a.8d108ec",
        "order": 2,
        "group": "6371b00c.27e46",
        "width": "6",
        "height": "1",
        "label": "Inverter",
        "labelPlacement": "left",
        "labelAlignment": "left",
        "colorForValue": [
            {
                "color": "#000000",
                "value": "0",
                "valueType": "num"
            },
            {
                "color": "#008000",
                "value": "1",
                "valueType": "num"
            },
            {
                "color": "#ff0000",
                "value": "-1",
                "valueType": "num"
            }
        ],
        "allowColorForValueInMessage": false,
        "shape": "square",
        "showGlow": false,
        "name": "Inverter",
        "x": 635,
        "y": 309.84844970703125,
        "wires": []
    },
    {
        "id": "931f5d3e.5dd318",
        "type": "ui_led",
        "z": "26ea13a.8d108ec",
        "order": 4,
        "group": "6371b00c.27e46",
        "width": "6",
        "height": "1",
        "label": "Charger",
        "labelPlacement": "left",
        "labelAlignment": "left",
        "colorForValue": [
            {
                "color": "#000000",
                "value": "0",
                "valueType": "num"
            },
            {
                "color": "#008000",
                "value": "1",
                "valueType": "num"
            },
            {
                "color": "#ff0000",
                "value": "-1",
                "valueType": "num"
            }
        ],
        "allowColorForValueInMessage": false,
        "shape": "square",
        "showGlow": false,
        "name": "Charger",
        "x": 635,
        "y": 349.84844970703125,
        "wires": []
    },
    {
        "id": "5904231f.d0e9f4",
        "type": "ui_led",
        "z": "26ea13a.8d108ec",
        "order": 5,
        "group": "6371b00c.27e46",
        "width": "6",
        "height": "1",
        "label": "Failure",
        "labelPlacement": "left",
        "labelAlignment": "left",
        "colorForValue": [
            {
                "color": "#000000",
                "value": "0",
                "valueType": "num"
            },
            {
                "color": "#ff0000",
                "value": "1",
                "valueType": "num"
            }
        ],
        "allowColorForValueInMessage": false,
        "shape": "square",
        "showGlow": false,
        "name": "Failure",
        "x": 625,
        "y": 429.84844970703125,
        "wires": []
    },
    {
        "id": "9b865e5e.53d22",
        "type": "change",
        "z": "26ea13a.8d108ec",
        "name": "set mv_state",
        "rules": [
            {
                "t": "set",
                "p": "#:(persist)::mv_state",
                "pt": "flow",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1070,
        "y": 89.84844970703125,
        "wires": [
            [
                "aa5e3887.5fb72"
            ]
        ]
    },
    {
        "id": "84b44349.c39558",
        "type": "inject",
        "z": "26ea13a.8d108ec",
        "name": "get mv_state",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "60",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "#:(persist)::mv_state",
        "payloadType": "flow",
        "x": 135,
        "y": 89.84844970703125,
        "wires": [
            [
                "184e39f0.66da66"
            ]
        ]
    },
    {
        "id": "184e39f0.66da66",
        "type": "switch",
        "z": "26ea13a.8d108ec",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "null"
            },
            {
                "t": "nnull"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 285,
        "y": 89.84844970703125,
        "wires": [
            [
                "2720897.aff71f6"
            ],
            [
                "7b5d3203.892d9c"
            ]
        ]
    },
    {
        "id": "337d90a9.405e4",
        "type": "serial request",
        "z": "26ea13a.8d108ec",
        "d": true,
        "name": "",
        "serial": "a778bb0a.014748",
        "x": 765,
        "y": 89.84844970703125,
        "wires": [
            [
                "251cde60.b4a1ca",
                "94475418.4f9da8"
            ]
        ]
    },
    {
        "id": "2720897.aff71f6",
        "type": "function",
        "z": "26ea13a.8d108ec",
        "name": "default (4)",
        "func": "msg.payload = 4;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 435,
        "y": 49.84844970703125,
        "wires": [
            [
                "7b5d3203.892d9c"
            ]
        ]
    },
    {
        "id": "7b5d3203.892d9c",
        "type": "function",
        "z": "26ea13a.8d108ec",
        "name": "command",
        "func": "function addCsum(buffer) {\n    // appends checksum byte to buffer\n    var sum = 0;\n    for(var i = 0; i < buffer.length; i++) {\n        sum += buffer[i];\n    }\n    var csum = Uint8Array.from([(sum % 256)]);\n    return Buffer.concat([buffer, csum]);\n}\n\nvar command = Buffer.from([0xC1,0xF0,0x32,0xA0,0x00,0x00,0x00,0x00])\ncommand[4] = msg.payload;\nmsg.payload = addCsum(command)\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 595,
        "y": 69.84844970703125,
        "wires": [
            [
                "337d90a9.405e4"
            ]
        ]
    },
    {
        "id": "251cde60.b4a1ca",
        "type": "function",
        "z": "26ea13a.8d108ec",
        "name": "parse",
        "func": "if(msg.status === \"OK\") {\n    // last byte contains state\n    msg.payload = msg.payload[7];\n    return msg;\n} else {\n    // delete stored state?\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 925,
        "y": 89.84844970703125,
        "wires": [
            [
                "9b865e5e.53d22"
            ]
        ]
    },
    {
        "id": "aa5e3887.5fb72",
        "type": "function",
        "z": "26ea13a.8d108ec",
        "name": "demux",
        "func": "function getBit(byte, pos) {\n   return (byte >> pos) & 1;\n}\n\nreturn [\n    // inverted values\n    {\"payload\": !getBit(msg.payload, 2)},\n    {\"payload\": !getBit(msg.payload, 1)}\n]",
        "outputs": 2,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 285,
        "y": 149.84844970703125,
        "wires": [
            [
                "4be773c4.d35604"
            ],
            [
                "3d016254.c555d6"
            ]
        ]
    },
    {
        "id": "b4918fa7.04f898",
        "type": "function",
        "z": "26ea13a.8d108ec",
        "name": "mux",
        "func": "var state = flow.get(\"mv_state\", \"persist\");\nvar mask = 1 << 2;\n\n//inverted values\nif(msg.payload === false){\n    // set bit 2\n    msg.payload = state |= mask;\n} else {\n    // clear bit 2\n    msg.payload = state &= ~mask;\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 405,
        "y": 209.84844970703125,
        "wires": [
            [
                "7b5d3203.892d9c"
            ]
        ]
    },
    {
        "id": "4be773c4.d35604",
        "type": "ui_switch",
        "z": "26ea13a.8d108ec",
        "name": "inv",
        "label": "Inverter",
        "tooltip": "",
        "group": "6371b00c.27e46",
        "order": 6,
        "width": "3",
        "height": "1",
        "passthru": false,
        "decouple": "true",
        "topic": "topic",
        "style": "",
        "onvalue": "true",
        "onvalueType": "bool",
        "onicon": "",
        "oncolor": "",
        "offvalue": "false",
        "offvalueType": "bool",
        "officon": "",
        "offcolor": "",
        "x": 285,
        "y": 209.84844970703125,
        "wires": [
            [
                "b4918fa7.04f898"
            ]
        ]
    },
    {
        "id": "3d016254.c555d6",
        "type": "ui_switch",
        "z": "26ea13a.8d108ec",
        "name": "chg",
        "label": "Charger",
        "tooltip": "",
        "group": "6371b00c.27e46",
        "order": 7,
        "width": "3",
        "height": "1",
        "passthru": false,
        "decouple": "true",
        "topic": "topic",
        "style": "",
        "onvalue": "true",
        "onvalueType": "bool",
        "onicon": "",
        "oncolor": "",
        "offvalue": "false",
        "offvalueType": "bool",
        "officon": "",
        "offcolor": "",
        "x": 285,
        "y": 269.84844970703125,
        "wires": [
            [
                "43760c7.a58d974"
            ]
        ]
    },
    {
        "id": "43760c7.a58d974",
        "type": "function",
        "z": "26ea13a.8d108ec",
        "name": "mux",
        "func": "var state = flow.get(\"mv_state\", \"persist\");\nvar mask = 1 << 1;\n\n//inverted values\nif(msg.payload === false){\n    // set bit 1\n    msg.payload = state |= mask;\n} else {\n    // clear bit 1\n    msg.payload = state &= ~mask;\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 405,
        "y": 269.84844970703125,
        "wires": [
            [
                "7b5d3203.892d9c"
            ]
        ]
    },
    {
        "id": "94475418.4f9da8",
        "type": "function",
        "z": "26ea13a.8d108ec",
        "name": "",
        "func": "\nfunction bytesToInt(bytes) {\n  // return little-endian 16-bit integer\n  return (((bytes[1] & 0xFF) << 8) | (bytes[0] & 0xFF));\n}\n\nif(msg.status === \"OK\") {\n    var amp = bytesToInt(msg.payload.slice(4,6)) / 2560;\n    msg.payload = amp;\n    return msg;\n}",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 955,
        "y": 169.84844970703125,
        "wires": [
            [
                "133eef40.eda9a9"
            ]
        ]
    },
    {
        "id": "35cba7f7.d7545",
        "type": "comment",
        "z": "26ea13a.8d108ec",
        "name": "Merge 2x mux into one",
        "info": "",
        "x": 615,
        "y": 209.84844970703125,
        "wires": []
    },
    {
        "id": "ad2a7afb.2e6518",
        "type": "ui_led",
        "z": "26ea13a.8d108ec",
        "order": 3,
        "group": "6371b00c.27e46",
        "width": "6",
        "height": "1",
        "label": "Alarm",
        "labelPlacement": "left",
        "labelAlignment": "left",
        "colorForValue": [
            {
                "color": "#000000",
                "value": "0",
                "valueType": "num"
            },
            {
                "color": "#ff0000",
                "value": "1",
                "valueType": "num"
            }
        ],
        "allowColorForValueInMessage": false,
        "shape": "square",
        "showGlow": false,
        "name": "Alarm",
        "x": 625,
        "y": 389.84844970703125,
        "wires": []
    },
    {
        "id": "a778bb0a.014748",
        "type": "serial-port",
        "z": "",
        "serialport": "/dev/ttyUSB0",
        "serialbaud": "19200",
        "databits": "8",
        "parity": "none",
        "stopbits": "1",
        "waitfor": "",
        "dtr": "none",
        "rts": "none",
        "cts": "none",
        "dsr": "none",
        "newline": "9",
        "bin": "bin",
        "out": "count",
        "addchar": "",
        "responsetimeout": "1000"
    },
    {
        "id": "6371b00c.27e46",
        "type": "ui_group",
        "z": "",
        "name": "Charger / Inverter",
        "tab": "4a43d063.0c2418",
        "order": 1,
        "disp": true,
        "width": "12",
        "collapse": false
    },
    {
        "id": "4a43d063.0c2418",
        "type": "ui_tab",
        "z": "",
        "name": "Appliances",
        "icon": "dashboard",
        "order": 3
    }
]