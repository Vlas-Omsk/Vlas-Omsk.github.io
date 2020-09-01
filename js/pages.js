function PageExists(page)
{
	try {
		var http = new XMLHttpRequest();
		http.open('HEAD', 'https://vlas-omsk.github.io/documentation/frames/' + page + '.html', false);
		http.send();
		return http.status!=404;
	} catch {
		const pages = [
			"default",
			"how_to_use_pictures"
		];
		return pages.includes(page);
	}
}

function OpenRoot() {
	top.window.location.href = '/';
}