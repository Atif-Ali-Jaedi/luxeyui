/* eslint-disable */
let toggled = false;
document
    .querySelector(".switch span input[type='checkbox']")
    .addEventListener("change", (e) => {
        toggled = !toggled;
        localStorage.setItem("dark", toggled);
        const hasToggled = localStorage.getItem("dark") === "true";
        document.documentElement.className = hasToggled ? "dark" : "light";

        e.target.checked = hasToggled;
    });

const initialToggled = localStorage.getItem("dark") === "true";
document.documentElement.className = initialToggled ? "dark" : "light";
document.querySelector(".switch span input[type='checkbox']").checked =
    initialToggled;

lucide.createIcons();
