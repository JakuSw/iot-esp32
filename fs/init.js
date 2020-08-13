load('api_config.js');
load('api_rpc.js');
load('api_dht.js');
load('api_timer.js');
load('api_gpio.js');

GPIO.set_mode(2, GPIO.MODE_OUTPUT);

let led = 2;
let pin = 5;
let dht = DHT.create(pin, DHT.DHT11);

RPC.addHandler('Led.On', function(args) {
  GPIO.write(led, 1);
  return { ledState: 'On'};
});

RPC.addHandler('Led.Off', function(args) {
  GPIO.write(led, 0);
  return { ledState: 'Off'};
});

RPC.addHandler('Led.Read', function(args) {
  if(GPIO.read(led) === 0){
    return { ledState: 'Off'};
  }else{
    return { ledState: 'On'};
  }
});

RPC.addHandler('Temp.Read', function(args) {
  return { temperature: dht.getTemp() };
});

RPC.addHandler('Humid.Read', function(args) {
  return { humidity: dht.getHumidity() };
});

