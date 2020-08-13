Temperature and humidity sensor

Based on ESP32 and DHT11

DHT11 - 3.3V 4.7 k
Sensor is connected to pin 5.

Availible custom RPC via mDash:

Humidity sensor:

Humid.Read: https://mdash.net/api/v2/devices/DEVICE_ID/rpc/Humid.Read?access_token=TOKEN

Returns humidity value form 0 to 100. This is % value.
Example response:

{
  "humidity": 60
}

Tepmerature sensor:

Temp.Read: https://mdash.net/api/v2/devices/DEVICE_ID/rpc/Temp.Read?access_token=

Returns temperature. Sensor range from -20 Celsius to + 60 Celsius. 
Example response:

{
  "temperature": 26
}

Onboard Led:
You can turn on/off onboard led and check status of it.

Led.On: https://mdash.net/api/v2/devices/DEVICE_ID/rpc/Led.On?access_token= 

Led.Off: https://mdash.net/api/v2/devices/DEVICE_ID/rpc/Led.Off?access_token= 

Led.Read: https://mdash.net/api/v2/devices/DEVICE_ID/rpc/Led.Read?access_token=

Returns status of led.
Example response:

{
  "ledState": "On"
}