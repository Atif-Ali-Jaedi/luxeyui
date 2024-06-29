document.querySelectorAll<HTMLDivElement>(".textarea-outerbox").forEach(t => {
	const textarea = t.querySelector<HTMLTextAreaElement>("textarea");
	if (textarea) {
		const maxRow = parseInt(textarea.getAttribute("data-max-row") || "8", 10);
		const minRow = parseInt(textarea.getAttribute("data-min-row") || "3", 10);

		// Get computed styles for the textarea
		const computedStyles = window.getComputedStyle(textarea);
		const fontSize = parseFloat(computedStyles.fontSize);
		const lineHeight = parseFloat(computedStyles.lineHeight);

		// Calculate the row height based on the lineHeight or fontSize if lineHeight is 'normal'
		const rowHeight = isNaN(lineHeight) ? fontSize * 1.2 : lineHeight;
		const maxHeight = rowHeight * maxRow;
		const minHeight = rowHeight * minRow;

		textarea.style.maxHeight = `${maxHeight}px`;
		textarea.style.minHeight = `${minHeight}px`;

		if (textarea.getAttribute("data-autosize") === "false") return;
		// Debounce the input event handler to reduce flicker
		textarea.addEventListener(
			"input",
			debounce(() => animateHeightChange(textarea, minHeight), 50)
		);
		// Set initial height
		animateHeightChange(textarea, minHeight, true);
	}
});

function animateHeightChange(
	textarea: HTMLTextAreaElement,
	minHeight: number,
	initial = false
) {
	const initialHeight: string = textarea.style.height;

	// Temporarily disable transition to set auto height and measure it
	textarea.style.transition = initial ? "none" : "height 125ms linear";
	textarea.style.height = "auto";
	const newHeight = `${Math.max(textarea.scrollHeight, minHeight)}px`;

	// Force reflow to apply initial height
	if (initial) textarea.style.height = newHeight;
	else {
		// Apply the transition
		requestAnimationFrame(() => {
			textarea.style.height = initialHeight; // Reapply initial height for transition
			requestAnimationFrame(
				() => (textarea.style.height = newHeight) // Then apply the new height
			);
		});
	}
}

// Debounce function to limit the rate at which a function can fire
function debounce(func: () => void, wait: number) {
	let timeout: number | undefined;
	return () => {
		clearTimeout(timeout);
		timeout = window.setTimeout(() => func(), wait);
	};
}
