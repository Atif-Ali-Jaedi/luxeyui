import { rippleEffect } from "../ripple";

document
	.querySelectorAll<HTMLDivElement>(".card button")
	.forEach(button =>
		button.addEventListener("click", e => e.stopPropagation())
	);

document
	.querySelectorAll<HTMLDivElement>(".card")
	.forEach(card =>
		card.addEventListener("click", e =>
			card.getAttribute("data-pressable") ? rippleEffect(card, e) : null
		)
	);
