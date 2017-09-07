const GPIO = require('pi-pins');
let led,
  ledOn = false;


function init(pinNumber) {
  led = GPIO.connect(pinNumber);
  led.mode('out');
}

function toggle() {
  ledOn = !ledOn;
  led.write(ledOn);
}

function status() {
  return ledOn ? 'ON' : 'OFF';
}

module.exports = {
  init: init,
  toggle: toggle,
  status: status
}