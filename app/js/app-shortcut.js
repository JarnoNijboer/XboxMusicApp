'use strict';

(function(require) {
	var globalShortcut = require('global-shortcut'),
			ipc = require('ipc'),
			mainWindow;

	var shortcuts = (function () {
		var keys = keys = [{
			keyCode: 'MediaNextTrack',
			action: 'music-next-track'
		}, {
			keyCode: 'MediaPreviousTrack',
			action: 'music-previous-track'
		}, {
			keyCode: 'MediaPlayPause',
			action: 'music-play-pause'
		}];

		var init = function (window) {
			if (!window) {
				throw new Exception('window param is not defined');
			}

			mainWindow = window;
			this.register();
		};

		var register = function () {
			this.keys.forEach(function (key) {
				globalShortcut.register(key.keyCode, function () {
					var webContent = mainWindow.webContents;

					webContent.send('app-shortcut', key.action);
				});
			});
		};

		var unregisterAll = function () {
			globalShortcut.unregisterAll();
		};

		return {
			keys: keys,
			init: init,
			register: register,
			unregisterAll: unregisterAll
		};
	}());

	module.exports = shortcuts;

}(require));
