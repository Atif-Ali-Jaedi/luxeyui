document
    .querySelectorAll<HTMLDivElement>(".accordion > .accordion-item")
    .forEach((item, index, items) => {
        item
            .querySelector<HTMLButtonElement>(".trigger")
            ?.addEventListener("click", () => {
                let toggled = item.getAttribute("data-open") === "true";
                toggled = !toggled;
                // For single selection
                if (
                    item.parentElement?.getAttribute("data-selection-mode") ===
                    "single"
                )
                    document
                        .querySelectorAll<HTMLDivElement>(
                            ".accordion > .accordion-item",
                        )
                        .forEach((otherItem) =>
                            otherItem.setAttribute("data-open", "false"),
                        );

                item.setAttribute("data-open", toggled ? "true" : "false");
            });
        // Add <hr> after each item except the last one
        if (
            !item.parentElement?.classList.contains("splitted") &&
            index < items.length - 1 &&
            item.parentElement?.dataset.showDivider !== "false"
        ) {
            const divider = document.createElement("hr");
            divider.className = "divider";
            divider.style.marginBlock = "0";
            item.insertAdjacentElement("afterend", divider);
        }
    });
