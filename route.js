let ledOn = false,
  led = require('pi-pins').connect(22);

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Pi Home',
    heading: 'Press the button to toggle LED',
    ledStatus: `The LED is ${ledOn ? ON : OFF}`
  });
});

app.post('/led', (req, res) => {
  let value = ledOn ? 0 : 1;
  
  led.value(value);
  res.redirect('/');

  // led.write(value, () => {
  //   res.redirect('/');
  // });
});
