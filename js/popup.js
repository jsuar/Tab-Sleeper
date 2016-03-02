document.addEventListener("submit", function(event) {
	sleepTimeInput = document.getElementById('sleepTime').value;
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.runtime.sendMessage({sourceTabId: tabs[0].id, sleepTime: sleepTimeInput}, function(response) {
		console.log(response.sleepTime);
		});
	});
	window.close();
});