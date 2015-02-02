define(function(require, exports, module) {
  var Engine = require("famous/core/Engine");
  var Surface = require("famous/core/Surface");
  var Modifier = require("famous/core/Modifier")
  var GridLayout = require("famous/views/GridLayout");
  var View = require('famous/core/View');
  var ImageSurface = require("famous/surfaces/ImageSurface")

  var mainContext = Engine.createContext();
  var contextSize = window.innerWidth / 6;
  
  var grid = new GridLayout({
   dimensions: [2, 1]
  });

  var surfaces = [_createLeft(),_createRight()];
  grid.sequenceFrom(surfaces);

  function _createLeft(){
    var view = new View()
    var leftMod = new Modifier({
      origin: [0.5,0.5]
    })
    var surface = new ImageSurface({
      size: [contextSize,contextSize],
      content: './2.png'
    })
    view.add(leftMod).add(surface)
    return view
  }
  
  function _createRight(){
    var view = new View()
    var rightMod = new Modifier({
      origin: [0.5,0.5]
    })
    var surface = new ImageSurface({
      size: [contextSize,contextSize],
      content: './2.png'
    })
    view.add(rightMod).add(surface)
    return view
  }  

  mainContext.add(grid);
  console.log(contextSize);
});
