document.querySelectorAll<HTMLDivElement>(".input-base").forEach(inputBase => {
	if (!inputBase) return;

	const isInputClearable = inputBase.getAttribute("data-input-clearable");
	const innerWrapper =
		inputBase.querySelector<HTMLDivElement>(".inner-wrapper");
	const input = innerWrapper?.querySelector<HTMLInputElement>("input");

	if (isInputClearable && innerWrapper && input) {
		const clearBtnClassName =
			"p-2 -m-2 absolute right-3 cursor-pointer pointer-events-none opacity-0 hover:opacity-100 active:opacity-70 rounded-full outline-none text-default-800";
		const clearBtn = document.createElement("span");
		clearBtn.role = "button";
		clearBtn.className = clearBtnClassName;
		clearBtn.innerHTML = `
		  <svg aria-hidden="true" focusable="false" height="1.125rem" role="presentation" viewBox="0 0 24 24" width="1.125rem"><path d="M12 2a10 10 0 1010 10A10.016 10.016 0 0012 2zm3.36 12.3a.754.754 0 010 1.06.748.748 0 01-1.06 0l-2.3-2.3-2.3 2.3a.748.748 0 01-1.06 0 .754.754 0 010-1.06l2.3-2.3-2.3-2.3A.75.75 0 019.7 8.64l2.3 2.3 2.3-2.3a.75.75 0 011.06 1.06l-2.3 2.3z" fill="currentColor"></path></svg>
		`;
		innerWrapper.appendChild(clearBtn);

		input.addEventListener("input", () => {
			clearBtn.className = `${clearBtnClassName} ${
				input.value !== "" ? "opacity-70 pointer-events-auto" : ""
			}`;
		});

		clearBtn.addEventListener("click", () => {
			input.value = "";
			clearBtn.className = clearBtnClassName;
		});
	}
});
