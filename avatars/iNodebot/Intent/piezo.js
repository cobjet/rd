function Piezo (five){
  this.piezo = new five.Piezo(3)
  this.rickAshley = {
    song: [
      ["C4", 1 / 4],
      ["D4", 1 / 4],
      ["F4", 1 / 4],
      ["D4", 1 / 4],
      ["A4", 1 / 4]
    ],
    tempo: 190
  }
};
Piezo.prototype.awaken = function(){
  this.piezo.play(this.rickAshley)
};
Piezo.prototype.note = function(){
  this.piezo.play({
    song: [
      ["F4", 1 / 4],
      ["F4", 1 / 4]
    ],
    tempo: 190
  });
}
module.exports = Piezo;
