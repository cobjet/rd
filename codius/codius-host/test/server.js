var sinon      = require('sinon');
var assert     = require('assert');
var path       = require('path');
var tls        = require('tls');
var CodiusHost = require(path.join(__dirname, '/../'));

describe('Codius Host primary server', function() {

  it('#start should bind to port with a tls server', function(done) {

    var tlsCreateServer = sinon.spy(tls, 'createServer');

    new CodiusHost.Server().start().then(function(status) {
      assert(tlsCreateServer.called);
      done();
    });
  });
});

