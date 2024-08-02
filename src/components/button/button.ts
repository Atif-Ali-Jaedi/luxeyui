import { rippleEffect } from "../../utils/ripple";

document
  .querySelectorAll<HTMLButtonElement>("button.button")
  .forEach(
    (btn) =>
      btn.getAttribute("data-disable-ripple") === "true" ||
      btn.addEventListener("click", (e) => rippleEffect(btn, e)),
  );
