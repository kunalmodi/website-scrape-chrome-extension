chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse) {
		var elements = request.elements;
		var attr = request.attr;
		var lst = [];
		$(elements).each( function(index) {
			var selected_element = $(this).attr(attr);
			lst.push(selected_element);
		})

		sendResponse({elements: lst});
	}
);
