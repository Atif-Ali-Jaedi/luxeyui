import { rippleEffect } from "../ripple";

document.querySelectorAll<HTMLButtonElement>("button.button").forEach(btn =>
	btn.addEventListener("click", e => 
		rippleEffect(btn, e ))
);
