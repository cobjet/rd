function Focus(feeling){
  this.is = 'Ready'
  this.feeling = feeling
}
Focus.prototype.setTo = function(newFocus){
  if(this.is === newFocus) return
  this.is = newFocus
  this.feeling.emit('attention', {focus: newFocus})
}
module.exports = Focus