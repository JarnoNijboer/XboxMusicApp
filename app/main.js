'use strict';

var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.
var appShortcut = require('./js/app-shortcut');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow = null;
var appIcon = null;

// Quit when all windows are closed.
app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

// This method will be called when atom-shell has done everything
// initialization and ready for creating browser windows.
app.on('ready', function () {
	var icon = __dirname + '/img/logo-32x32.png';

	// Create the browser window.
	mainWindow = new BrowserWindow({
		width: 1024,
		height: 768,
		'min-width': 960,
		icon: icon,
		'dark-theme': true,
		'web-preferences': {
			plugins: true,
			'direct-write': true,
			'subpixel-font-scaling': true
		}
	});

	// and load the index.html of the app.
	mainWindow.loadUrl('file://' + __dirname + '/index.html');

	appShortcut.init(mainWindow);

	mainWindow.openDevTools();

	// Emitted when the window is closed.
	mainWindow.on('closed', function () {
		appShortcut.unregisterAll();

		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null;
		appShortcut = null;
		appIcon = null;
	});
});
