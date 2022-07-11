# node-red-contrib-mass-combi
Very early stage experiments talking to a Mastervolt Mass Combi from Node-RED. With a correctly configured serial port connected to a Mass Combi these flows should provide the following options: 

![Mass Combi Status](/images/Screenshot_2022-07-11_20-57-54.png)

![Mass Combi Settings](/images/Screenshot_2022-07-11_21-01-27.png)

The serial connection should be 19200-N-8-1 and wired like this: 

![QRS232 connection table](/images/Screenshot_2022-07-11_21-11-09.png)

IIRC 12VDC is present on one of the RJ12 modular jack pins, so be careful.

In case you're not using Node-RED, here are some JavaScript examples to get you started ("meta" code ripped from my Node-RED nodes): 

To read the control panel LEDs, send `["0xC1","0xF0","0x25","0x00","0x00","0x00","0x00","0x01","0xD7"]` and parse with

````javascript
function getBit(byte, pos) {
   return (byte >> pos) & 1;
}

if(response) {
    var pwr     = getBit(response[6], 0); // 0001 010[1] > 1
    var inv_on  = getBit(response[4], 1); // 1000 00[1]1 > 1
    var inv_err = getBit(response[4], 2); // 1000 0[0]11 > 0
    var chg_on  = getBit(response[3], 7); // [0]011 0000 > 0
    var chg_err = getBit(response[3], 0); // 1111 010[1] > 1
    var alm     = getBit(response[5], 6); 
    var err     = 0; // where to look for "failure"?
    var inv     = inv_err ? 2 : inv_on;
    var chg     = chg_err ? 2 : chg_on;
    return {
        "power": pwr, // inverted
        "inverter": inv, 
        "charger": chg, 
        "alarm": alm, 
        "error": err
    }
}
````
To get the input current (from shore), send `["0xC1","0xF0","0x37","0x00","0x00","0x00","0x00","0x01","0xE9"]` and parse with:

````javascript
function bytesToInt(bytes) {
  // return little-endian 16-bit integer
  return (((bytes[1] & 0xFF) << 8) | (bytes[0] & 0xFF));
}

if(response) {
    var amp = bytesToInt(response.slice(4,6)) / 2560;
    return amp;
}
````
