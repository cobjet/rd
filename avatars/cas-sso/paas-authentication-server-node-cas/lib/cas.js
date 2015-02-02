/**
 * Module dependencies.
 */

// var debug = require('debug')('express:Casr:Cas');
// var methods = require('methods');
// var utils = require('../utils');
var merge = require('utils-merge')

/**
 * Expose `Cas`.
 */

module.exports = Cas;

/**
 * Initialize `Cas` with the given `config`,
 *
 * @param {Object} config
 * @api private
 */

function Cas(config) {
  this.config = config;
}

/**
 * Cas
 *
 * @param {Object} description
 */
Cas.prototype.validateTicketGrantingTicket = function(tgc){
  console.log("Validating ticket granting ticket '" + tgc + "'");
  return;
};

/**
 * Cas
 *
 * @param {Object} description
 */
Cas.prototype.generateLoginTicket = function(obj){
  console.log("generateLoginTicket Called!");
  return;
};

/**
 * Cas
 *
 * @param {Object} description
 */
Cas.prototype.generateTicketGrantingTicket = function(username, extra_attributes){
  console.log("generateTicketGrantingTicket Called!");
  return;
};

/**
 * Cas
 *
 * @param {Object} description
 */
Cas.prototype.generateServiceTicket = function(service, username, tgt){
  console.log("generateServiceTicket Called!");
  return;
};

/**
 * Cas
 *
 * @param {Object} description
 */
Cas.prototype.generateProxyTicket = function(target_service, pgt){
  console.log("generateProxyTicket Called!");
  return;
};

/**
 * Cas
 *
 * @param {Object} description
 */
Cas.prototype.generateProxyGrantingTicket = function(pgt_url, st){
  console.log("generateProxyGrantingTicket Called!");
  return;
};

/**
 * Cas
 *
 * @param {Object} description
 */
Cas.prototype.validateLoginTicket = function(ticket){
  console.log("validateLoginTicket Called!");
  return;
};

/**
 * Cas
 *
 * @param {Object} description
 */
Cas.prototype.validateTicketGrantingTicket = function(ticket){
  console.log("validateTicketGrantingTicket Called!");
  return;
};

/**
 * Cas
 *
 * @param {Object} description
 */
Cas.prototype.validateServiceTicket = function(service, ticket, allow_proxy_tickets){
  console.log("validateServiceTicket Called!");
  return;
};

/**
 * Cas
 *
 * @param {Object} description
 */
Cas.prototype.validateProxyTicket = function(service, ticket){
  console.log("validateProxyTicket Called!");
  return;
};

/**
 * Cas
 *
 * @param {Object} description
 */
Cas.prototype.validateProxyGrantingTicket = function(ticket){
  console.log("validateProxyGrantingTicket Called!");
  return;
};

/**
 * Cas
 *
 * @param {Object} description
 */
Cas.prototype.sendLogoutNotificationForServiceTicket = function(st){
  console.log("sendLogoutNotificationForServiceTicket Called!");
  return;
};

/**
 * Cas
 *
 * @param {Object} description
 */
Cas.prototype.cleanServiceUrl = function(dirty_service){
  console.log("cleanServiceUrl Called!");
  console.log(obj);
  return;
};