import { Ripple } from "../../utils/ripple";
document
    .querySelectorAll<HTMLButtonElement>("button.button")
    .forEach((button) => {
        if (button && button.dataset.disableRipple !== "true") {
            return new Ripple(button);
        }
    });
