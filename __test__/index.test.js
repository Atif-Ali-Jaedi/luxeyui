/* eslint-disable */

const darkMode = localStorage.getItem("darkMode");
if (darkMode === "true") {
    document.documentElement.className = "dark";
    document.querySelector("#tdm").checked = true;
}
document.querySelector("#tdm").addEventListener("click", (e) => {
    const isChecked = e.target.checked;
    document.documentElement.className = isChecked ? "dark" : "";
    localStorage.setItem("darkMode", isChecked);
});
