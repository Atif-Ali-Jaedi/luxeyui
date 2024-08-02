document
  .querySelectorAll<HTMLDivElement>(".circular-progress")
  .forEach((cProgress) => {
    const minValue = 0;
    const maxValue = 100;

    let value = parseInt(cProgress?.getAttribute("data-value") || "");
    if (value > maxValue) value = maxValue;
    if (value < minValue) value = minValue;

    const indicator = cProgress?.querySelector<HTMLElement>("circle.indicator");
    const valueLabel = cProgress?.querySelector<HTMLSpanElement>("span.value");

    if (isNaN(value) && indicator)
      return (indicator.style.strokeDashoffset = "61.26105674500097");

    if (indicator) {
      cProgress?.setAttribute("data-indeterminate", "false");
      const progress = 81.68140899333463 - 81.68140899333463 * (value / 100);
      indicator.style.strokeDashoffset = progress.toString();

      if (valueLabel) valueLabel.innerText = `${value}%`;
    }
  });
