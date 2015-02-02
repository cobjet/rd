function Distance (five){
  this.detector = new five.Sensor('A1');
}
Distance.prototype.start = function(feeling){
  this.detector.on('data', function(){
    feeling.emit('feel', {distance: this.value})
  });
}
module.exports = Distance