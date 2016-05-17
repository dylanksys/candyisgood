var router = require('express').Router();

// Change API methods and endpoint methods to fit your needs

router.get('/sugarhome', function(req, res) {
	res.send('Path: /sugarhome');
};

router.get('/aboutsugar', function(req, res) {
	res.send('Path: /aboutsugar');
};

router.get('/candy', function(req, res) {
	res.send('Path: /candy');
};

router.get('/soda', function(req, res) {
	res.send('Path: /soda');
};

module.exports = router;
