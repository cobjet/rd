function Motor (five){
  this.L     = new five.Motor([9, 7]);
  this.R     = new five.Motor([10,8]);
  this.speed = 50;
};
Motor.prototype.reverse = function(){
  this.L.forward(this.speed);
  this.R.forward(this.speed);
};
Motor.prototype.forward = function(){
  this.L.reverse(this.speed);
  this.R.reverse(this.speed);
};
Motor.prototype.stop = function(){
  this.L.stop();
  this.R.stop();
};
Motor.prototype.leftReverse = function(){
  this.L.forward(this.speed);
};
Motor.prototype.leftForward = function(){
  this.L.reverse(this.speed);
};
Motor.prototype.leftStop = function(){
  this.L.stop();
};
Motor.prototype.rightReverse = function(){
  this.R.forward(this.speed);
};
Motor.prototype.rightForward = function(){
  this.R.reverse(this.speed);
};
Motor.prototype.rightStop = function(){
  this.R.stop();
};
module.exports = Motor;