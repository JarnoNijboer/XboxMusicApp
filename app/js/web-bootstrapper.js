'use strict';

(function (require) {
	var global, cntLoader, music;

	global = (1,eval)('this');
	cntLoader = null;
	music = require('./web-music');

	var iframe = (function () {
		var elm = null;

		var events = {
			load: function () {
				if (!cntLoader.classList.contains('hide')) {
					cntLoader.classList.add('hide');
				}

				if (this.classList.contains('hide')) {
					this.classList.remove('hide');
				}
			}
		};

		var init = function () {
			this.elm = getElm('ifAppHost');
			this.elm.addEventListener('load', this.events.load);

			music.init();
		};

		return {
			elm: elm,
			events: events,
			init: init
		};
	}());

	var init = function () {
		cntLoader = getElm('loader');

		iframe.init();
	};

	var getElm = function (id) {
		return global.document.getElementById(id);
	};

	module.exports = {
		init: init
	};
}(require));
