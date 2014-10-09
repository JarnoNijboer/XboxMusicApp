'use strict';

(function (require) {
	var ipc = require('ipc'),
		window = null,
		iframe = null;

	ipc.on('app-shortcut', function (key) {
		switch (key) {
			case 'music-next-track':
				music.nextTrack();
				break;

			case 'music-previous-track':
				music.previousTrack();
				break;

			case 'music-play-pause':
				music.playPause();
				break;
		}
	});

	var music = {
		nextTrack: function () {
			var btn = getIframeElm('button.iconPlayerNext');

			if (btn) {
				btn.click();
			}
		},
		previousTrack: function () {
			var btn = getIframeElm('button.iconPlayerPrevious');

			if (btn) {
				btn.click();
			}
		},
		playPause: function () {
			var playBtn = getIframeElm('button.iconPlayerPlay');
			var pauseBtn = getIframeElm('button.iconPlayerPause');

			if (playBtn) {
				playBtn.click();
			} else if (pauseBtn) {
				pauseBtn.click();
			}
		}
	};

	var getIframeElm = function (selector) {
		var iframeDocument = iframe.contentDocument;

		return iframeDocument.querySelector(selector);
	};

	var setWindow = function (objWindow) {
		window = objWindow;
		iframe = window.document.getElementById('ifrmXboxMusic');
	};

	var init = function (objWindow) {
		setWindow(objWindow);
	};

	module.exports = {
		init: init,
		setWindow: setWindow
	}

}(require));
