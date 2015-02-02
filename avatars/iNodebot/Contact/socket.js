function Socket (server){
  this.connection = require('socket.io-client')(server);
}
Socket.prototype.msg = function(msg){
  this.connection.emit('msg',{msg: msg});
}
module.exports = Socket
