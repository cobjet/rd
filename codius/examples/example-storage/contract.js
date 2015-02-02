// This example uses promises to make the code cleaner
// but all of the functions can be used with callbacks
// instead (note that their names only include the "Async"
// ending because of the promisifyAll command)

var Promise = require('./bluebird');
var localstorage = Promise.promisifyAll(require('localstorage'));

console.log('First let\'s call setItem with foo:bar');
localstorage.setItemAsync('foo', 'bar')
.then(function(){
  return localstorage.getItemAsync('foo');
})
.then(function(item) {
  console.log('Now getItem foo returns: ' + item);
})
.then(function(){
  return localstorage.removeItemAsync('foo');
})
.then(function(){
  return localstorage.getItemAsync('foo');
})
.then(function(item){
  console.log('But after calling removeItem, getItem foo returns: ' + item);

  console.log('\nNow let\'s add the array of items [{a:"alice"}, {b:"bob"}, {c:"charlie"}] and try out the key and clear commands!');
  return Promise.all(Promise.map([{a:"alice"}, {b:"bob"}, {c:"charlie"}], function(item){
    var key = Object.keys(item)[0];
    return localstorage.setItemAsync(key, item[key]);
  }));
})
.then(function(){
  return Promise.all(Promise.map([0, 1, 2], function(index){
    return localstorage.keyAsync(index).then(function(key){
      console.log('Key ' + index + ' returns: ' + key);
    });
  }))
})
.then(function(){
  console.log('\nNow we\'ll call clear and go through the keys again');
  return localstorage.clearAsync();
})
.then(function(){
  return Promise.all(Promise.map([0, 1, 2], function(index){
    return localstorage.keyAsync(index).then(function(key){
      console.log('Key ' + index + ' returns: ' + key);
    });
  }))
})

