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

var bookshelf = require('../lib/db').bookshelf;

var Token   = require('./token');
var Credit  = require('./credit');
var Debit   = require('./debit');
var Promise = require('bluebird');

var Balance = bookshelf.Model.extend({
  tableName: 'balances',
  defaults: {
    balance: 0
  },
  tokens: function () {
    return this.belongsTo(Token.model);
  },
  debits: function() {
    return this.hasMany(Debit.model);
  },
  credits: function() {
    return this.hasMany(Credit.model);
  },
  credit: function(amount) {
    return Credit.model.creditBalance(this, amount)
  },
  debit: function(amount) {
    return Debit.model.debitBalance(this, amount);
  },
  refresh: function() {
    return new Balance({ id: this.get('id') }).fetch()
  }
});

exports.model = Balance;
