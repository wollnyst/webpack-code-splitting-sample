'use strict';

var log = console.log;
console.log = function (message) {
	log(message);
	document.getElementById('app').innerHtml += message;
}

console.log('running app js for a while')

setTimeout(function () {
	console.log('require post-loaded-module')
	require.ensure(['./post-loaded-module'], function(require) {
		var module = require('./post-loaded-module');
		console.log()
	});
}, 1000)

