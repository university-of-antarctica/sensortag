var noble = require('noble');

noble.on('stateChange', function(state) {
  if (state === 'poweredOn') {
    noble.startScanning();
  } else {
    noble.stopScanning();
  }
});


noble.on('discover', function(peripheral) {
  if (peripheral.address === "bc:6a:29:ac:53:f5"){
    console.log(peripheral.address);
  }

});
