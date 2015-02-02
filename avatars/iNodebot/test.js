var five = require('johnny-five')
var board = new five.Board()
board.on('ready', function(){
  var L = new five.Motor([9, 7])
  board.repl.inject({
    L: L
  })
})