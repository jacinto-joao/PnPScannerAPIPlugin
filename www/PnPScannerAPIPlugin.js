var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'PnPScannerAPIPlugin', 'coolMethod', [arg0]);
};

exports.openScanner = function () {
    exec(null, null, "PnPScannerAPIPlugin", "openScanner", []);
};

exports.closeScanner = function () {
    exec(null, null, "PnPScannerAPIPlugin", "closeScanner", []);
};

exports.startScan = function () {
    exec(null, null, "PnPScannerAPIPlugin", "startScan", []);
};
exports.setDecodeCallback = function () {
    exec(null, null, "PnPScannerAPIPlugin", "setDecodeCallback", []);
};



