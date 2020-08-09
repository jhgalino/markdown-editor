window.onload = () => {
	let converter = new showdown.Converter();
	let pad = document.getElementById('pad');
	let markdownArea = document.getElementById('markdown');

	let convertTextAreaToMarkdown = () => {
		let markdownText = pad.value;
		let html = converter.makeHtml(markdownText);
		markdownArea.innerHTML = html;
	};

	pad.addEventListener('input', convertTextAreaToMarkdown);

	convertTextAreaToMarkdown();
};
