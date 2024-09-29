/* eslint-disable */

document
    .querySelector(".switch span input[type='checkbox']")
    .addEventListener(
        "change",
        (e) =>
            (document.documentElement.className = e.target.checked
                ? "dark"
                : "light"),
    );
