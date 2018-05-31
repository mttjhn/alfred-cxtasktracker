'use strict';
const alfy = require('alfy');
const alfredNotifier = require('alfred-notifier');
const apiUrl = 'http://cxprodtools.local:3000/api/'
const siteUrl = 'https://cxprod.computronix.com/cxprod/#PosseObjectId=';

// Checks for available update and updates the `info.plist`
alfredNotifier();

// Go get info from the local webservice
alfy.fetch(apiUrl + 'tasks/' + alfy.input, {maxAge: 3600000}).then(data => {
	const items = [];
	items.push({
		uid: data.ObjectId,
		title: data.DisplayFormat,
		subtitle: "Developer: " + data.Developer + "  Cross-Tester: " + data.CrossTester + "  (press CMD-C to copy TaskPath)",
		arg: siteUrl + data.ObjectId,
		text: {
			copy: data.TaskPath
		}
	});

	alfy.output(items);
});


