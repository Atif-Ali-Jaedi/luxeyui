type RippleType = {
    key: string;
    x: number;
    y: number;
    size: number;
};

type ContainerType = HTMLElement;

let uniqueIDCounter = 0;

const getUniqueID = (): string => `ripple-${uniqueIDCounter++}`;

const clamp = (value: number, min: number, max: number): number =>
    Math.min(Math.max(value, min), max);

const loadAnimationLibrary = (): Promise<void> =>
    new Promise((resolve) => {
        if ("requestAnimationFrame" in window) resolve();
    });

export class Ripple {
    ripples: RippleType[] = [];
    container: ContainerType;

    constructor(container: ContainerType) {
        this.container = container;
        this.container.addEventListener("click", this.onClick.bind(this));
    }

    async onClick(event: MouseEvent) {
        await loadAnimationLibrary();
        const size = Math.max(
            this.container.clientWidth,
            this.container.clientHeight,
        );
        const rect = this.container.getBoundingClientRect();
        const ripple: RippleType = {
            key: getUniqueID(),
            size,
            x: event.clientX - rect.left - size / 2,
            y: event.clientY - rect.top - size / 2,
        };

        this.ripples.push(ripple);
        this.createRippleElement(ripple);
    }

    createRippleElement(ripple: RippleType) {
        const rippleElement = document.createElement("span");

        const duration = clamp(
            0.01 * ripple.size,
            0.2,
            ripple.size > 100 ? 0.75 : 0.5,
        );

        rippleElement.className = "ripple";

        Object.assign(rippleElement.style, {
            width: `${ripple.size}px`,
            height: `${ripple.size}px`,
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            position: "absolute",
            backgroundColor: "currentColor",
            borderRadius: "100%",
            transformOrigin: "center",
            overflow: "hidden",
            pointerEvents: "none",
            transform: "scale(0)",
            opacity: "0.35",
            zIndex: "0",
            transition: `transform ${duration}s, opacity ${duration}s`,
        });

        this.container.appendChild(rippleElement);

        requestAnimationFrame(() => {
            rippleElement.style.transform = "scale(2)";
            rippleElement.style.opacity = "0";
        });

        rippleElement.addEventListener("transitionend", () => {
            rippleElement.remove();
            this.onClear(ripple.key);
        });
    }

    onClear = (key: string) =>
        (this.ripples = this.ripples.filter((ripple) => ripple.key !== key));
}
