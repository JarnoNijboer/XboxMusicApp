'use strict';

(function (require) {
	var global, ipc;

	global = (1,eval)('this');
	ipc = require('ipc');

	var webview = {
		init: function () {
			this.handler();
		},
		handler: function () {
			console.log('webview.js/handler')

			ipc.on('app-shortcut', function (key) {
				console.log('webview.js/ipc/' + key);
				//document.getElementById('wvAppHost').send('web-shortcut', key);
			});
		}
	};

	module.exports = webview;
}(require));
