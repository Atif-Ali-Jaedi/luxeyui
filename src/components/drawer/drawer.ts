document
    .querySelectorAll<HTMLDivElement>(".drawer-container")
    .forEach((container) => {
        const wrapper =
            container.querySelector<HTMLDivElement>(".drawer-wrapper");
        const trigger =
            container.querySelector<HTMLButtonElement>(".toggle-drawer");
        const drawer = wrapper?.querySelector(".drawer");
        const closeButton =
            drawer?.querySelector<HTMLButtonElement>(".close-button");
        if (closeButton?.childElementCount === 0)
            closeButton.innerHTML = `<svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="1em"><path d="M18 6L6 18M6 6l12 12"></path></svg>`;

        const isNotDismissable = container.dataset.dismissable === "false";
        const isKeyboardDismissDisabled =
            container.dataset.keyboardDismissDisabled === "true";
        const shouldNotBlockScroll =
            container.dataset.shouldBlockScroll === "false";
        const elementsThatWillCloseTheDrawerOnClick =
            drawer?.querySelectorAll<HTMLElement>("[data-close-drawer]");

        if (wrapper && drawer) {
            trigger?.addEventListener("click", () => {
                wrapper.dataset.open = "true";
                if (!shouldNotBlockScroll)
                    document.body.style.overflow = "hidden";
            });

            closeButton?.addEventListener("click", () => {
                wrapper.dataset.open = "false";
                if (!shouldNotBlockScroll)
                    document.body.style.overflow = "auto";
            });

            elementsThatWillCloseTheDrawerOnClick?.forEach((element) =>
                element?.addEventListener("click", () => {
                    wrapper.dataset.open = "false";
                    if (!shouldNotBlockScroll)
                        document.body.style.overflow = "auto";
                }),
            );

            if (isNotDismissable) return;

            wrapper.addEventListener("click", (event) => {
                if (!drawer.contains(event.target as Node)) {
                    wrapper.dataset.open = "false";
                    if (!shouldNotBlockScroll)
                        document.body.style.overflow = "auto";
                }
            });

            if (isKeyboardDismissDisabled) return;

            window.addEventListener("keydown", (event) => {
                if (event.key === "Escape") {
                    wrapper.dataset.open = "false";
                    if (!shouldNotBlockScroll)
                        document.body.style.overflow = "auto";
                }
            });
        }
    });
