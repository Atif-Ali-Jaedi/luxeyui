export const rippleEffect = (
	containerElement: HTMLElement,
	event: MouseEvent
) => {
	const ripple = document.createElement("span");
	const rect = containerElement.getBoundingClientRect();
	const size = Math.max(rect.width, rect.height);
	const x = event.clientX - rect.left - size / 2;
	const y = event.clientY - rect.top - size / 2;
	const originalColor = window.getComputedStyle(containerElement).color;
	Object.assign(ripple.style, {
		width: `${size}px`,
		height: `${size}px`,
		left: `${x}px`,
		top: `${y}px`,
		background: originalColor.replace("rgb", "rgba").replace(")", ",0.25)")
	});
	ripple.className = `ripple`;
	containerElement.appendChild(ripple);
	ripple.addEventListener("animationend", () => ripple.remove());
};
