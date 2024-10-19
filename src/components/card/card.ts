import { Ripple } from "../../utils/ripple";
type Card = HTMLDivElement;

const hasClickableElements = (card: Card): boolean => {
    const clickableSelectors =
        'a, button, [onclick], input[type="button"], input[type="submit"], [role="button"]';
    const clickableElements = card.querySelectorAll(clickableSelectors);
    return clickableElements.length > 0;
};

document.querySelectorAll<Card>(".card").forEach((card) => {
    if (
        card &&
        card.dataset.disableRipple !== "true" &&
        card.dataset.pressable === "true"
    ) {
        // Check if the card contains any clickable elements
        if (hasClickableElements(card)) {
            // Get all clickable elements inside the card
            const clickableSelectors =
                'a, button, [onclick], input[type="button"], input[type="submit"], [role="button"]';
            const clickableElements = card.querySelectorAll(clickableSelectors);

            // Add event listener to each clickable element to stop propagation
            clickableElements.forEach((element) => {
                element.addEventListener("click", (event) => {
                    event.stopPropagation();
                });
            });

            // Initialize Ripple effect
            new Ripple(card);
        } else {
            // Initialize Ripple effect if no clickable elements are found
            new Ripple(card);
        }
    }
});
