function Feelings (feeling){
  this.feel = feeling
}
Feelings.prototype.start = function(focus, move){
  this.feel.on('feel', function(data){
    if(data.distance > 275){
      focus.setTo('reverse')
    }else if(data.distance > 225 && data.distance < 275){
      focus.setTo('forward')
    }else{
      focus.setTo('stop')
    }
  });
  this.feel.on('attention', function(data){
    move[data.focus]()
  });
}
module.exports = Feelings