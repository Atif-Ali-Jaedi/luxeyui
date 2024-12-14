document
    .querySelectorAll<HTMLDivElement>(".modal-container")
    .forEach((container) => {
        const modalWrapper =
            container.querySelector<HTMLDivElement>(".modal-wrapper");
        const trigger =
            container.querySelector<HTMLButtonElement>(".toggle-modal");
        const modal = modalWrapper?.querySelector<HTMLDivElement>(".modal");

        const elementsThatWillCloseTheModalOnClick =
            modal?.querySelectorAll<HTMLElement>("[data-close-modal]");
        const closeButton =
            modal?.querySelector<HTMLButtonElement>(".close-button");
        if (closeButton?.childElementCount === 0)
            closeButton.innerHTML = `<svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="1em"><path d="M18 6L6 18M6 6l12 12"></path></svg>`;

        const isNotDismissable = container.dataset.dismissable === "false";
        const isKeyboardDismissDisabled =
            container.dataset.keyboardDismissDisabled === "true";
        const shouldNotBlockScroll =
            container.dataset.shouldBlockScroll === "false";

        if (modalWrapper && modal) {
            trigger?.addEventListener("click", () => {
                modalWrapper.dataset.open = "true";
                if (!shouldNotBlockScroll)
                    document.body.style.overflow = "hidden";
            });

            closeButton?.addEventListener("click", () => {
                modalWrapper.dataset.open = "false";
                if (!shouldNotBlockScroll)
                    document.body.style.overflow = "auto";
            });

            elementsThatWillCloseTheModalOnClick?.forEach((element) =>
                element?.addEventListener("click", () => {
                    modalWrapper.dataset.open = "false";
                    if (!shouldNotBlockScroll)
                        document.body.style.overflow = "auto";
                }),
            );

            if (isNotDismissable) return;

            modalWrapper.addEventListener("click", (event) => {
                if (!modal.contains(event.target as Node)) {
                    modalWrapper.dataset.open = "false";
                    if (!shouldNotBlockScroll)
                        document.body.style.overflow = "auto";
                }
            });

            if (isKeyboardDismissDisabled) return;

            window.addEventListener("keydown", (event) => {
                if (event.key === "Escape") {
                    modalWrapper.dataset.open = "false";
                    if (!shouldNotBlockScroll)
                        document.body.style.overflow = "auto";
                }
            });
        }
    });
