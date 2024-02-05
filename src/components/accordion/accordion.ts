document
	.querySelectorAll<HTMLDivElement>(".accordions > .accordion")
	.forEach(a => {
		const header = a.querySelector<HTMLDivElement>(".accordion-header");
		const body = a.querySelector<HTMLDivElement>(".accordion-body");
		if (body && header) {
			const selectionMode = a.parentElement?.getAttribute(
				"data-selection-mode"
			);
			if (
				(selectionMode && selectionMode === "single") ||
				body.classList.contains("active")
			) {
				body.style.setProperty("--_height", `${body.scrollHeight}px`);
			}
			header.addEventListener("click", () => {
				if (selectionMode && selectionMode === "single") {
					document
						.querySelectorAll<HTMLDivElement>(".accordion > .accordion-body")
						.forEach(t => {
							if (t !== body) {
								t.classList.remove("active");
								t.style.setProperty("--_height", "0");
							}
						});
				}
				body.classList.toggle("active");
				body.style.setProperty(
					"--_height",
					`${body.classList.contains("active") ? body.scrollHeight : "0"}px`
				);
			});
		}
	});
