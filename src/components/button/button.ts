document.querySelectorAll<HTMLButtonElement>("button.button").forEach(btn =>
	btn.addEventListener("click", e => {
		const ripple = document.createElement("span");
		const rect = btn.getBoundingClientRect();
		const size = Math.max(rect.width, rect.height);
		const x = e.clientX - rect.left - size / 2;
		const y = e.clientY - rect.top - size / 2;
		Object.assign(ripple.style, {
			width: `${size}px`,
			height: `${size}px`,
			left: `${x}px`,
			top: `${y}px`
		});
		ripple.className = `ripple ${
			btn.classList.contains("foreground") ||
			btn.classList.contains("primary") ||
			btn.classList.contains("secondary") ||
			btn.classList.contains("danger")
				? "bg-white/20"
				: btn.classList.contains("default") ||
				  btn.classList.contains("success") ||
				  btn.classList.contains("warning")
				? "bg-black/20"
				: btn.getAttribute("data-ripple-color") ?? "bg-black/20"
		}`;
		btn.appendChild(ripple);
		ripple.addEventListener("animationend", () => ripple.remove());
	})
);
