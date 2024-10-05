import { Ripple } from "../../utils/ripple";
document.querySelectorAll<HTMLButtonElement>(".card").forEach((card) => {
    // TODO: Stop propagation when clicking a clickable element inside the card
    if (card && card.dataset.disableRipple !== "true") {
        return new Ripple(card);
    }
});
