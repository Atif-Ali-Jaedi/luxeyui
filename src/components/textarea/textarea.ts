document.querySelectorAll<HTMLDivElement>(".textarea-outerbox").forEach(t => {
	const innerBox = t.querySelector<HTMLDivElement>(".textarea-innerbox");
	const textarea = t.querySelector<HTMLTextAreaElement>("textarea");
	if (textarea) {
		if (textarea.getAttribute("data-autosize") === "false") return;
		const initialHeight = textarea.scrollHeight;
		textarea.addEventListener("input", () => {
			textarea.style.height = `${initialHeight}px`;
			textarea.style.height = `${textarea.scrollHeight}px`;
		});
	}
});
