function Servo (five){
  this.sharpDistanceSensor = new five.Servo({
    pin: 11,
    center: true
  });
  this.position = 90
  this.max = 120
  this.min = 30
  this.heading = '+'
}
Servo.prototype.left  = function(){
  this.sharpDistanceSensor.to(this.max)
  this.position = this.max
}
Servo.prototype.right = function(){
  this.sharpDistanceSensor.to(this.min)
  this.position = this.min
}
Servo.prototype.nudgeLeft  = function(){
  this.position += 1
  this.sharpDistanceSensor.to(this.position)
}
Servo.prototype.nudgeRight = function(){
  this.position -= 1
  this.sharpDistanceSensor.to(this.position)
}
Servo.prototype.center = function(){
  this.sharpDistanceSensor.to(90)
  this.position = 90
}
Servo.prototype.moveTo = function(degree){
  if(degree > this.max){degree = this.max}
  if(degree < this.min){degree = this.min}
  this.sharpDistanceSensor.to(degree)
  this.position = degree
}
Servo.prototype.stop = function(){
  this.sharpDistanceSensor.stop()
  return this.position
}
module.exports = Servo