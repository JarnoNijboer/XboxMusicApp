'use strict';

(function(require) {
	var globalShortcut = require('global-shortcut'),
		window = null,
		keys = [{
			keyCode: 'MediaNextTrack',
			action: 'music-next-track'
		}, {
			keyCode: 'MediaPreviousTrack',
			action: 'music-previous-track'
		}, {
			keyCode: 'MediaPlayPause',
			action: 'music-play-pause'
		}];

	var init = function (objWindow) {
		window = objWindow;

		register();
	};

	var register = function() {
		keys.forEach(function (key) {
			globalShortcut.register(key.keyCode, function () {
				sendMessage(key.action);
			});
		});
	};

	var unregisterAll = function () {
		globalShortcut.unregisterAll();
	};

	var sendMessage = function (key) {
		if (window == null) return;

		var webContent = window.webContents;

		webContent.send('app-shortcut', key);
	};

	module.exports = {
		init: init,
		unregisterAll: unregisterAll
	};

}(require));
