'use strict';

(function (require) {
	var webview, cntLoader = null;

	webview = require('./web-view.js');

	var bootloader = (function () {
		var elm = null;

		var events = {
			load: function () {
				if (elm.classList.contains('hide')) {
					elm.classList.remove('hide');
				}

				if (!cntLoader.classList.contains('hide')) {
					cntLoader.classList.add('hide');
				}
			}
		};

		var init = function () {
			elm = document.getElementById('wvAppHost');

			elm.addEventListener('did-start-loading', events.load);
		};

		return {
			events: events,
			init: init
		};
	}());

	var init = function () {
		cntLoader = document.getElementById('loader');

		bootloader.init();
		webview.init();
	};

	module.exports = {
		init: init
	};
}(require));
