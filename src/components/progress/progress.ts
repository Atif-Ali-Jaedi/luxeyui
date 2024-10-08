type ProgressElement = HTMLDivElement;
type ValueLabel = HTMLElement;

type ProgressComponents = {
    progress: ProgressElement;
    valueLabel: ValueLabel | null;
    value: number;
};

const setValue = ({ progress, valueLabel, value }: ProgressComponents) => {
    if (value < 0) value = 0;
    if (value > 100) value = 100;
    if (valueLabel) valueLabel.innerText = `${value}%`;
    progress.style.setProperty("--_progress", `${value}%`);
};

const updateProgress = (progress: ProgressElement) => {
    const value = parseInt(
        progress.getAttribute("data-value") ||
            progress.style.getPropertyValue("--_progress") ||
            "100",
    );
    const valueLabel = progress.querySelector(
        ".label-wrapper > .value",
    ) as ValueLabel | null;

    const components: ProgressComponents = { progress, valueLabel, value };
    setValue(components);
};

const observeProgress = (progress: ProgressElement) => {
    updateProgress(progress);

    const observer = new MutationObserver(() => updateProgress(progress));

    observer.observe(progress, {
        attributes: true,
        attributeFilter: ["data-value"],
    });
};

document
    .querySelectorAll<ProgressElement>(".progress-base")
    .forEach((progress) => {
        observeProgress(progress);
    });
