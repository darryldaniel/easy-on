const GPIO = require('pi-pins');

let led,
  ledOn;

function init(pinNumber) {
  led = GPIO.connect(22);
  led.mode('out');
  ledOn = false;
  return this;
}

function status() {
  return ledOn ? 'ON' : 'OFF';
}

function toggle() {
  ledOn = !ledOn;
  led.value(ledOn);
}

module.exports = {
  init: init,
  status: status,
  toggle: toggle
};