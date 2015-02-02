var five   = require('johnny-five');
var events = require('events');
var board  = new five.Board();

var Socket   = require('./Contact/socket');
var Distance = require('./Contact/distance')
var Piezo    = require('./Intent/piezo');
var Motor    = require('./Intent/motor');
var Servo    = require('./Intent/servo');
var Focus    = require('./Attention/focus');
var React    = require('./Discrimination/react');
var Feelings = require('./Feeling/experisensor');

board.on('ready',function(){
  var feeling  = new events.EventEmitter();
  var focus    = new Focus(feeling);
  var feelings = new Feelings(feeling);
  var move     = new Motor(five);
  var piezo    = new Piezo(five);
  var eyes     = new Distance(five);

  // var socket = new Socket('http://localhost:3000');
  // socket.msg('ready');
  // socket.connection.on('motor', function(data){
  //   console.log(data)
  //   motor[data.fn]()
  // });
  
  // INIT FUNCTION FOR LATER
  piezo.note();
  setTimeout(function(){
    move.stop()
  }, 1000);
  move.forward(50);
  eyes.start(feeling);
  feelings.start(focus, move);

  board.repl.inject({
    eyes: eyes,
    move: move
  });

});
