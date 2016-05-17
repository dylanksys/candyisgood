var express = require ('express');

var needsugar = require('../routers/needsugar');

var app = express();

app.use('/', needsugar);

app.listen(9000, function () {
	console.log('candyisgood listening on port 9000');
};
