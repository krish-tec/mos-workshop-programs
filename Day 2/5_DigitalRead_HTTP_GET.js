load('api_gpio.js');
load("api_timer.js");

let d6 = 12; // Button or PIR
GPIO.set_mode(d6, GPIO.MODE_INPUT); // Config D6 as Input Pin

// Timer Call Every Second
Timer.set(10000, true, function() {
  let value = GPIO.read(d6);
  print('Button Value D6 : ' ,value);


}, null);



