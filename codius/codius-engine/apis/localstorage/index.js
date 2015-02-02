//------------------------------------------------------------------------------
/*
    This file is part of Codius: https://github.com/codius
    Copyright (c) 2014 Ripple Labs Inc.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose  with  or without fee is hereby granted, provided that the above
    copyright notice and this permission notice appear in all copies.

    THE  SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
    WITH  REGARD  TO  THIS  SOFTWARE  INCLUDING  ALL  IMPLIED  WARRANTIES  OF
    MERCHANTABILITY  AND  FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
    ANY  SPECIAL ,  DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
    WHATSOEVER  RESULTING  FROM  LOSS  OF USE, DATA OR PROFITS, WHETHER IN AN
    ACTION  OF  CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
    OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/
//==============================================================================

exports.init = function (engine, config) {
  engine.registerAPI('localstorage', function (runner, storage){
    var manifestHash = runner.getManifestHash();
    var instanceId = runner.getInstanceId();
    return new LocalStorage({
      contractId: manifestHash + instanceId,
      storage: storage
    });
  });
};

var util = require('util');

var ApiModule = require('../../lib/api_module').ApiModule;

function LocalStorage(opts) {
  var self = this;

  ApiModule.call(this);

  self._contractId = opts.contractId;
  self._storage = opts.storage || LocalStorage.defaultStorage();
}
util.inherits(LocalStorage, ApiModule);

LocalStorage.methods = [
  'getItem',
  'setItem',
  'removeItem',
  'clear',
  'key'
];

/**
 *  Default storage option simply uses an in-memory object
 */
LocalStorage.defaultStorage = function(){
  'use strict';

  var storageObject = {};

  function getItem(contractId, key, callback) {
    if (typeof storageObject[contractId] !== 'object') {
      storageObject[contractId] = {};
    }
    callback(null, storageObject[contractId][key]);
  }

  function setItem(contractId, key, value, callback) {
    if (typeof storageObject[contractId] !== 'object') {
      storageObject[contractId] = {};
    }
    storageObject[contractId][key] = value;
    callback();
  }

  function removeItem(contractId, key, callback) {
    if (typeof storageObject[contractId] !== 'object') {
      storageObject[contractId] = {};
    }
    delete storageObject[contractId][key];
    callback();
  }

  function clear(contractId, callback) {
    storageObject[contractId] = {};
    callback();
  }

  function key(contractId, index, callback) {
    if (typeof storageObject[contractId] !== 'object') {
      storageObject[contractId] = {};
    }
    callback(null, Object.keys(storageObject[contractId])[index]);
  }

  var methods = {
    getItem: getItem,
    setItem: setItem,
    removeItem: removeItem,
    clear: clear,
    key: key
  };
  return methods;
};

/**
 *  Takes a function that will be used to
 *  provide contracts with persistent storage.
 *
 *  Note that each function should expect the
 *  contractId as the first parameter.
 *
 *  @param {Function} contractStorage.getItem
 *  @param {Function} contractStorage.setItem
 *  @param {Function} contractStorage.removeItem
 *  @param {Function} contractStorage.clear
 *  @param {Function} contractStorage.key
 */
LocalStorage.prototype.setStorage = function(storage) {
  var self = this;

  self._storage = storage;
};


LocalStorage.prototype.getItem = function(key, callback) {
  var self = this;

  if (typeof self._storage.getItem !== 'function') {
    callback(new Error('LocalStorage module supplied does not support getItem()'));
    return;
  }

  self._storage.getItem.call(self._storage, self._contractId, key, callback);
};

LocalStorage.prototype.setItem = function(key, value, callback) {
  var self = this;

  if (typeof self._storage.setItem !== 'function') {
    callback(new Error('LocalStorage module supplied does not support setItem()'));
    return;
  }

  self._storage.setItem.call(self._storage, self._contractId, key, value, callback);
};

LocalStorage.prototype.removeItem = function(key, callback) {
  var self = this;

  if (typeof self._storage.removeItem !== 'function') {
    callback(new Error('LocalStorage module supplied does not support removeItem()'));
    return;
  }

  self._storage.removeItem.call(self._storage, self._contractId, key, callback);
};

LocalStorage.prototype.clear = function(callback) {
  var self = this;

  if (typeof self._storage.clear !== 'function') {
    callback(new Error('LocalStorage module supplied does not support clear()'));
    return;
  }

  self._storage.clear.call(self._storage, self._contractId, callback);
};

LocalStorage.prototype.key = function(index, callback) {
  var self = this;

  if (typeof self._storage.key !== 'function') {
    callback(new Error('LocalStorage module supplied does not support key()'));
    return;
  }

  self._storage.key.call(self._storage, self._contractId, index, callback);
};
