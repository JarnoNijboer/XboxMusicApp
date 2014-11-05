'use strict';

(function (require) {
	var ipc;

	ipc = require('ipc');

	var music = {
		init: function () {
			this.handler();
		},
		handler: function () {
			var that = this;
			ipc.on('web-shortcut', function (key) {
				switch (key) {
					case 'music-next-track':
						that.nextTrack();
						break;

					case 'music-previous-track':
						that.previousTrack();
						break;

					case 'music-play-pause':
						that.playPause();
						break;
				}
			});
		},
		nextTrack: function () {
			var btn = getElm('button.iconPlayerNext');

			if (btn) {
				btn.click();
			}
		},
		previousTrack: function () {
			var btn = getElm('button.iconPlayerPrevious');

			if (btn) {
				btn.click();
			}
		},
		playPause: function () {
			var playBtn = getElm('button.iconPlayerPlay');
			var pauseBtn = getElm('button.iconPlayerPause');

			if (playBtn) {
				playBtn.click();
			}
			else if (pauseBtn) {
				pauseBtn.click();
			}
		}
	};

	var getElm = function (selector) {
		return document.querySelector(selector);
	};

	module.exports = music;
}(require));
