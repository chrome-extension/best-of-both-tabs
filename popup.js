'use strict';
// interacts with popup.html

const windowInfo = {
	focused: false,
	url: 'http://tripadvisor.com',

}

function openNewTab() {
	console.log('new tab');
	chrome.windows.create(windowInfo, windowCallback);
}

function windowCallback(window) {
	console.log(window);
	console.log('calledback')
}

document.getElementById('newTabButton').onclick = openNewTab;