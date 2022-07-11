[
    {
        "id": "6082e6e3.66d948",
        "type": "tab",
        "label": "MV Settings",
        "disabled": false,
        "info": ""
    },
    {
        "id": "c0bc31a8.401fa8",
        "type": "function",
        "z": "6082e6e3.66d948",
        "name": "Command",
        "func": "function addCsum(buffer) {\n    var sum = 0;\n    for(var i = 0; i < buffer.length; i++) {\n        sum += buffer[i];\n    }\n    var csum = Uint8Array.from([(sum % 256)]);\n    return Buffer.concat([buffer, csum]);\n}\nfunction intToBytes(int) {\n  // return little-endian pair of bytes\n  return [\n    (int & 0x00FF),\n    (int & 0xFF00) >> 8\n  ];\n}\n\n// last byte 0x01 = read, 0x00 = write (default to \"read\")\nvar buffer = Buffer.from([\"0xC1\",\"0xF0\",\"0x00\",\"0x00\",\"0x00\",\"0x00\",\"0x00\",\"0x01\"]);\nvar cmds = [\n    {\"cmd\": 1, \"topics\": [\"mass/settings/1.1\",\"mass/settings/1.2\"], \"factors\": [1,1]}, \n    {\"cmd\": 2, \"topics\": [\"mass/settings/2.1\",\"mass/settings/2.2\"], \"factors\": [1,1]}, \n    {\"cmd\": 3, \"topics\": [\"mass/settings/3.1\",\"mass/settings/3.2\"], \"factors\": [1,1]}, \n    {\"cmd\": 4, \"topics\": [\"mass/settings/4.1\",\"mass/settings/4.2\"], \"factors\": [1,1]}, \n    {\"cmd\": 8, \"topics\": [\"mass/settings/bulk_voltage\"], \"factors\": [100]}, \n    {\"cmd\": 9, \"topics\": [\"mass/settings/absorption_voltage\"], \"factors\": [100]}, \n    {\"cmd\": 10, \"topics\": [\"mass/settings/float_voltage\"], \"factors\": [100]}, \n    {\"cmd\": 11, \"topics\": [\"mass/settings/return_to_bulk_voltage\"], \"factors\": [100]}, \n    {\"cmd\": 12, \"topics\": [\"mass/settings/force_float_voltage\"], \"factors\": [100]}, \n    {\"cmd\": 13, \"topics\": [\"mass/settings/unknown\"], \"factors\": [1]}, \n    {\"cmd\": 15, \"topics\": [\"mass/settings/gel_compensation\"], \"factors\": [100]}, \n    {\"cmd\": 16, \"topics\": [\"mass/settings/return_amperes\"], \"factors\": [10]}, \n    {\"cmd\": 17, \"topics\": [\"mass/settings/max_charge_current\"], \"factors\": [10]}, \n    {\"cmd\": 18, \"topics\": [\"mass/settings/bulk_time\"], \"factors\": [1]}, \n    {\"cmd\": 19, \"topics\": [\"mass/settings/return_to_bulk_time\"], \"factors\": [1]}, \n    {\"cmd\": 20, \"topics\": [\"mass/settings/max_absorption_time\"], \"factors\": [1]}, \n    {\"cmd\": 21, \"topics\": [\"mass/settings/min_absorption_time\"], \"factors\": [1]}, \n    {\"cmd\": 22, \"topics\": [\"mass/settings/dc_high_on\"], \"factors\": [100]}, \n    {\"cmd\": 23, \"topics\": [\"mass/settings/dc_high_off\"], \"factors\": [100]}, \n    {\"cmd\": 24, \"topics\": [\"mass/settings/dc_low_on\"], \"factors\": [100]}, \n    {\"cmd\": 25, \"topics\": [\"mass/settings/dc_low_off\"], \"factors\": [100]}, \n    {\"cmd\": 26, \"topics\": [\"mass/settings/unknown\"], \"factors\": [1]}, \n    {\"cmd\": 27, \"topics\": [\"mass/settings/unknown\"], \"factors\": [1]}\n];\nvar command = cmds.find(({ cmd }) => cmd === msg.cmd);\nif(command) {\n    buffer[2] = command.cmd;\n    if(msg.payload) {\n        var value = parseInt(msg.payload * command.factors[0]);\n        var bytes = intToBytes(value);\n        buffer[3] = bytes[0]; \n        buffer[4] = bytes[1];\n        buffer[7] = 0x00; //perform a write\n        node.warn(addCsum(buffer));\n    } else {\n        node.send({\n            \"topics\": command.topics,\n            \"factors\": command.factors,\n            \"payload\": addCsum(buffer)\n        })\n    }\n}",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 713.75,
        "y": 57,
        "wires": [
            [
                "e12cc2ba.1692d"
            ]
        ]
    },
    {
        "id": "a6653367.a8b638",
        "type": "inject",
        "z": "6082e6e3.66d948",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "7",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 119.75,
        "y": 57,
        "wires": [
            [
                "f7c07b8a.62f448"
            ]
        ]
    },
    {
        "id": "c27eb7df.4de2",
        "type": "delay",
        "z": "6082e6e3.66d948",
        "name": "",
        "pauseType": "rate",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "10",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 418.75,
        "y": 57,
        "wires": [
            [
                "c0bc31a8.401fa8"
            ]
        ]
    },
    {
        "id": "e12cc2ba.1692d",
        "type": "serial request",
        "z": "6082e6e3.66d948",
        "name": "",
        "serial": "a778bb0a.014748",
        "x": 890.75,
        "y": 57,
        "wires": [
            [
                "2bfb4324.69f27c"
            ]
        ]
    },
    {
        "id": "2bfb4324.69f27c",
        "type": "function",
        "z": "6082e6e3.66d948",
        "name": "Parse",
        "func": "\nfunction bytesToInt(bytes) {\n  // return little-endian 16-bit integer\n  return (((bytes[1] & 0xFF) << 8) | (bytes[0] & 0xFF));\n}\n\nif(msg.status === \"OK\") {\n    for(var i = 0; i < msg.topics.length; i++) {\n        var values = [bytesToInt(msg.payload.slice(3,5)), bytesToInt(msg.payload.slice(5,7))];\n        message = {\n            \"topic\": msg.topics[i],\n            \"payload\": values[i] / msg.factors[i]\n        }\n        node.send(message);\n    }\n} else {\n    node.warn(msg)\n}\nnode.done();\nreturn;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 104.75001525878906,
        "y": 134.00001525878906,
        "wires": [
            [
                "58a0afd.a27cad"
            ]
        ]
    },
    {
        "id": "abcda0fa.beab2",
        "type": "ui_numeric",
        "z": "6082e6e3.66d948",
        "name": "",
        "label": "Bulk Voltage",
        "tooltip": "",
        "group": "beb99be7.385d5",
        "order": 1,
        "width": 0,
        "height": 0,
        "wrap": false,
        "passthru": false,
        "topic": "topic",
        "format": "{{value}} V",
        "min": 0,
        "max": "100",
        "step": "0.01",
        "x": 555.75,
        "y": 131,
        "wires": [
            [
                "9e77c810.cef3"
            ]
        ]
    },
    {
        "id": "58a0afd.a27cad",
        "type": "switch",
        "z": "6082e6e3.66d948",
        "name": "",
        "property": "topic",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "mass/settings/bulk_voltage",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "mass/settings/absorption_voltage",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "mass/settings/float_voltage",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "mass/settings/return_to_bulk_voltage",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "mass/settings/force_float_voltage",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "mass/settings/gel_compensation",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "mass/settings/max_charge_current",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "mass/settings/return_amperes",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "mass/settings/bulk_time",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "mass/settings/return_to_bulk_time",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "mass/settings/min_absorption_time",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "mass/settings/max_absorption_time",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "mass/settings/dc_high_on",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "mass/settings/dc_high_off",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "mass/settings/dc_low_on",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "mass/settings/dc_low_off",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 17,
        "x": 294.75,
        "y": 464,
        "wires": [
            [
                "abcda0fa.beab2"
            ],
            [
                "d3425513.dbda48"
            ],
            [
                "4c692f6b.628a2"
            ],
            [
                "f23bae6f.3181a"
            ],
            [
                "d24342a8.05f528"
            ],
            [
                "aa3e998c.92ca38"
            ],
            [
                "368d0280.8da9ae"
            ],
            [
                "62fab8a0.aeca58"
            ],
            [
                "ee58a0a3.11bce8"
            ],
            [
                "5bfc7677.06071"
            ],
            [
                "a0176fe5.2b1ea8"
            ],
            [
                "49efee8d.591188"
            ],
            [
                "f298dbc6.154bf8"
            ],
            [
                "49f1fbb5.64c88c"
            ],
            [
                "aab5ad5c.f31248"
            ],
            [
                "fbf1b253.b784b"
            ],
            []
        ]
    },
    {
        "id": "d3425513.dbda48",
        "type": "ui_numeric",
        "z": "6082e6e3.66d948",
        "name": "",
        "label": "Absorption Voltage",
        "tooltip": "",
        "group": "beb99be7.385d5",
        "order": 1,
        "width": 0,
        "height": 0,
        "wrap": false,
        "passthru": false,
        "topic": "topic",
        "format": "{{value}} V",
        "min": 0,
        "max": "100",
        "step": "0.01",
        "x": 575.75,
        "y": 177,
        "wires": [
            [
                "9e77c810.cef3"
            ]
        ]
    },
    {
        "id": "4c692f6b.628a2",
        "type": "ui_numeric",
        "z": "6082e6e3.66d948",
        "name": "",
        "label": "Float Voltage",
        "tooltip": "",
        "group": "beb99be7.385d5",
        "order": 1,
        "width": 0,
        "height": 0,
        "wrap": false,
        "passthru": false,
        "topic": "10",
        "format": "{{value}} V",
        "min": 0,
        "max": "100",
        "step": "0.01",
        "x": 555.75,
        "y": 223,
        "wires": [
            [
                "9e77c810.cef3"
            ]
        ]
    },
    {
        "id": "f23bae6f.3181a",
        "type": "ui_numeric",
        "z": "6082e6e3.66d948",
        "name": "",
        "label": "Return to Bulk Voltage",
        "tooltip": "",
        "group": "beb99be7.385d5",
        "order": 1,
        "width": 0,
        "height": 0,
        "wrap": false,
        "passthru": false,
        "topic": "topic",
        "format": "{{value}} V",
        "min": 0,
        "max": "100",
        "step": "0.01",
        "x": 585.75,
        "y": 269,
        "wires": [
            [
                "9e77c810.cef3"
            ]
        ]
    },
    {
        "id": "d24342a8.05f528",
        "type": "ui_numeric",
        "z": "6082e6e3.66d948",
        "name": "",
        "label": "Force Float Voltage",
        "tooltip": "",
        "group": "beb99be7.385d5",
        "order": 1,
        "width": 0,
        "height": 0,
        "wrap": false,
        "passthru": false,
        "topic": "topic",
        "format": "{{value}} V",
        "min": 0,
        "max": "100",
        "step": "0.01",
        "x": 575.75,
        "y": 315,
        "wires": [
            [
                "9e77c810.cef3"
            ]
        ]
    },
    {
        "id": "aa3e998c.92ca38",
        "type": "ui_numeric",
        "z": "6082e6e3.66d948",
        "name": "",
        "label": "Gel Compensation",
        "tooltip": "",
        "group": "beb99be7.385d5",
        "order": 1,
        "width": 0,
        "height": 0,
        "wrap": false,
        "passthru": false,
        "topic": "topic",
        "format": "{{value}} V",
        "min": 0,
        "max": "100",
        "step": "0.01",
        "x": 575.75,
        "y": 361,
        "wires": [
            [
                "9e77c810.cef3"
            ]
        ]
    },
    {
        "id": "368d0280.8da9ae",
        "type": "ui_numeric",
        "z": "6082e6e3.66d948",
        "name": "",
        "label": "Max Charge Current",
        "tooltip": "",
        "group": "beb99be7.385d5",
        "order": 1,
        "width": 0,
        "height": 0,
        "wrap": false,
        "passthru": false,
        "topic": "17",
        "format": "{{msg.payload}} A",
        "min": 0,
        "max": "100",
        "step": "0.1",
        "x": 585.75,
        "y": 407,
        "wires": [
            [
                "9e77c810.cef3"
            ]
        ]
    },
    {
        "id": "62fab8a0.aeca58",
        "type": "ui_numeric",
        "z": "6082e6e3.66d948",
        "name": "",
        "label": "Return Amperes",
        "tooltip": "",
        "group": "beb99be7.385d5",
        "order": 1,
        "width": 0,
        "height": 0,
        "wrap": false,
        "passthru": false,
        "topic": "",
        "format": "{{value}} A",
        "min": 0,
        "max": "100",
        "step": "0.01",
        "x": 565.75,
        "y": 452,
        "wires": [
            [
                "9e77c810.cef3"
            ]
        ]
    },
    {
        "id": "ee58a0a3.11bce8",
        "type": "ui_numeric",
        "z": "6082e6e3.66d948",
        "name": "",
        "label": "Bulk Time",
        "tooltip": "",
        "group": "beb99be7.385d5",
        "order": 1,
        "width": 0,
        "height": 0,
        "wrap": false,
        "passthru": false,
        "topic": "18",
        "format": "{{value}} min",
        "min": 0,
        "max": "100",
        "step": "0.01",
        "x": 545.75,
        "y": 497,
        "wires": [
            [
                "9e77c810.cef3"
            ]
        ]
    },
    {
        "id": "5bfc7677.06071",
        "type": "ui_numeric",
        "z": "6082e6e3.66d948",
        "name": "",
        "label": "Return to Bulk Time",
        "tooltip": "",
        "group": "beb99be7.385d5",
        "order": 1,
        "width": 0,
        "height": 0,
        "wrap": false,
        "passthru": false,
        "topic": "topic",
        "format": "{{value}} min",
        "min": 0,
        "max": "100",
        "step": "0.01",
        "x": 575.75,
        "y": 543,
        "wires": [
            [
                "9e77c810.cef3"
            ]
        ]
    },
    {
        "id": "a0176fe5.2b1ea8",
        "type": "ui_numeric",
        "z": "6082e6e3.66d948",
        "name": "",
        "label": "Min Absorption Time",
        "tooltip": "",
        "group": "beb99be7.385d5",
        "order": 1,
        "width": 0,
        "height": 0,
        "wrap": false,
        "passthru": false,
        "topic": "topic",
        "format": "{{value}} min",
        "min": 0,
        "max": "100",
        "step": "0.01",
        "x": 585.75,
        "y": 588,
        "wires": [
            [
                "9e77c810.cef3"
            ]
        ]
    },
    {
        "id": "49efee8d.591188",
        "type": "ui_numeric",
        "z": "6082e6e3.66d948",
        "name": "",
        "label": "Max Absorption Time",
        "tooltip": "",
        "group": "beb99be7.385d5",
        "order": 1,
        "width": 0,
        "height": 0,
        "wrap": false,
        "passthru": false,
        "topic": "topic",
        "format": "{{value}} min",
        "min": 0,
        "max": "100",
        "step": "0.01",
        "x": 585.75,
        "y": 634,
        "wires": [
            [
                "9e77c810.cef3"
            ]
        ]
    },
    {
        "id": "f298dbc6.154bf8",
        "type": "ui_numeric",
        "z": "6082e6e3.66d948",
        "name": "",
        "label": "DC High On",
        "tooltip": "",
        "group": "beb99be7.385d5",
        "order": 1,
        "width": 0,
        "height": 0,
        "wrap": false,
        "passthru": false,
        "topic": "topic",
        "format": "{{value}} V",
        "min": 0,
        "max": "100",
        "step": "0.01",
        "x": 555.75,
        "y": 679,
        "wires": [
            [
                "9e77c810.cef3"
            ]
        ]
    },
    {
        "id": "49f1fbb5.64c88c",
        "type": "ui_numeric",
        "z": "6082e6e3.66d948",
        "name": "",
        "label": "DC High Off",
        "tooltip": "",
        "group": "beb99be7.385d5",
        "order": 1,
        "width": 0,
        "height": 0,
        "wrap": false,
        "passthru": false,
        "topic": "topic",
        "format": "{{value}} V",
        "min": 0,
        "max": "100",
        "step": "0.01",
        "x": 555.75,
        "y": 724,
        "wires": [
            [
                "9e77c810.cef3"
            ]
        ]
    },
    {
        "id": "aab5ad5c.f31248",
        "type": "ui_numeric",
        "z": "6082e6e3.66d948",
        "name": "",
        "label": "DC Low On",
        "tooltip": "",
        "group": "beb99be7.385d5",
        "order": 1,
        "width": 0,
        "height": 0,
        "wrap": false,
        "passthru": false,
        "topic": "topic",
        "format": "{{value}} V",
        "min": 0,
        "max": "100",
        "step": "0.01",
        "x": 555.75,
        "y": 770,
        "wires": [
            [
                "9e77c810.cef3"
            ]
        ]
    },
    {
        "id": "fbf1b253.b784b",
        "type": "ui_numeric",
        "z": "6082e6e3.66d948",
        "name": "",
        "label": "DC Low Off",
        "tooltip": "",
        "group": "beb99be7.385d5",
        "order": 1,
        "width": 0,
        "height": 0,
        "wrap": false,
        "passthru": false,
        "topic": "topic",
        "format": "{{value}} V",
        "min": 0,
        "max": "100",
        "step": "0.01",
        "x": 555.75,
        "y": 816,
        "wires": [
            [
                "9e77c810.cef3"
            ]
        ]
    },
    {
        "id": "9e77c810.cef3",
        "type": "function",
        "z": "6082e6e3.66d948",
        "name": "Topic > Cmd",
        "func": "msg.cmd = parseInt(msg.topic);\nmsg.topic = null;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 1015.75,
        "y": 454,
        "wires": [
            [
                "c0bc31a8.401fa8"
            ]
        ]
    },
    {
        "id": "f7c07b8a.62f448",
        "type": "function",
        "z": "6082e6e3.66d948",
        "name": "All",
        "func": "for(var i = 0; i < 28; i++) {\n    node.send({\n        \"cmd\": i\n    })\n}\nnode.done();\nreturn;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 262,
        "y": 57,
        "wires": [
            [
                "c27eb7df.4de2"
            ]
        ]
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
        "id": "beb99be7.385d5",
        "type": "ui_group",
        "name": "Settings",
        "tab": "8be5941a.a719d8",
        "order": 1,
        "disp": true,
        "width": "8",
        "collapse": false
    },
    {
        "id": "8be5941a.a719d8",
        "type": "ui_tab",
        "name": "MV Settings",
        "icon": "dashboard",
        "order": 3,
        "disabled": false,
        "hidden": false
    }
]