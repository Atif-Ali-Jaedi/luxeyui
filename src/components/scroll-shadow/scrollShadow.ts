document.querySelectorAll<HTMLDivElement>(".scroll-shadow").forEach(ss => {
	const isHorizontal = ss.getAttribute("data-orientation") === "horizontal";
	const offset = parseInt(ss.getAttribute("data-offset") || "0");

	const updateAttributes = () => {
		if (isHorizontal) {
			const isAtLeft = ss.scrollLeft === offset;
			const isAtRight =
				offset === 0
					? Math.abs(ss.scrollWidth - ss.scrollLeft - ss.clientWidth) < 1
					: Math.abs(ss.scrollWidth - ss.scrollLeft - ss.clientWidth) < offset;

			if (isAtLeft) ss.setAttribute("data-right-scroll", "true");
			else ss.removeAttribute("data-right-scroll");

			if (isAtRight) ss.setAttribute("data-left-scroll", "true");
			else ss.removeAttribute("data-left-scroll");

			if (!isAtLeft && !isAtRight)
				ss.setAttribute("data-left-right-scroll", "true");
			else ss.removeAttribute("data-left-right-scroll");
		} else {
			const isAtTop = ss.scrollTop === offset;
			const isAtBottom =
				offset === 0
					? Math.abs(ss.scrollHeight - ss.scrollTop - ss.clientHeight) < 1
					: Math.abs(ss.scrollHeight - ss.scrollTop - ss.clientHeight) < offset;

			if (isAtTop) ss.setAttribute("data-bottom-scroll", "true");
			else ss.removeAttribute("data-bottom-scroll");

			if (isAtBottom) ss.setAttribute("data-top-scroll", "true");
			else ss.removeAttribute("data-top-scroll");

			if (!isAtTop && !isAtBottom)
				ss.setAttribute("data-top-bottom-scroll", "true");
			else ss.removeAttribute("data-top-bottom-scroll");
		}
	};

	updateAttributes();
	ss.addEventListener("scroll", updateAttributes);
});
