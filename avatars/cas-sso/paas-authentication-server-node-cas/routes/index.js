var express = require('express');
var router = express.Router();
var config = require('../config');
var Cas = require('../lib/cas');
var cas = new Cas(config.casConfig);

/*
CAS Routes
The #.#.# comments (e.g. "2.1.3") refer to section numbers in the CAS protocol spec
under http://www.ja-sig.org/products/cas/overview/protocol/index.html
*/

// GET /login
// @desc: 2.1.1
router.get(["/", "/login"], function(req, res){
	var gateway = req.query.gateway == true || req.query.gateway == '1';
	var tgc = req.signedCookies.tgc;
	var tgcError = undefined;
	if (tgc != undefined) {
		tgcError = cas.validateTicketGrantingTicket(tgc);
	}
	cas.validateTicketGrantingTicket();
    res.render('index', { loginTicket: 'foobar' });
});

// POST /login
// @desc: 2.2
router.post("/login", function(req, res){
    res.render('index', { foo: req.bar });
});

// GET /logout
// @desc: 2.3.1
router.get("/logout", function(req, res){
    res.render('index', { foo: req.bar });
});

// GET /loginTicket
// @desc: 2.4
router.get("/loginTicket", function(req, res){
    res.render('index', { foo: req.bar });
});

// GET /validate
// @desc: 2.4, 2.4.1
router.get("/validate", function(req, res){
    res.render('index', { foo: req.bar });
});

// GET /serviceValidate
// @desc: 2.5, 2.5.1
router.get("/serviceValidate", function(req, res){
    res.render('index', { foo: req.bar });
});

// GET /proxyValidate
// @desc: 2.6, 2.6.1
router.get("/proxyValidate", function(req, res){
    res.render('index', { foo: req.bar });
});

// GET /proxy
// @desc: 2.7
router.get("/proxy", function(req, res){
    res.render('index', { foo: req.bar });
});

// router.get("/", function(req, res){
//     res.render('index', { foo: req.bar });
// });

module.exports = router;
