type KbdKey =
	| "command"
	| "shift"
	| "ctrl"
	| "option"
	| "enter"
	| "delete"
	| "escape"
	| "tab"
	| "capslock"
	| "up"
	| "right"
	| "down"
	| "left"
	| "pageup"
	| "pagedown"
	| "home"
	| "end"
	| "help"
	| "space";

const kbdKeysMap: Record<KbdKey, string> = {
	command: "⌘",
	shift: "⇧",
	ctrl: "⌃",
	option: "⌥",
	enter: "↵",
	delete: "⌫",
	escape: "⎋",
	tab: "⇥",
	capslock: "⇪",
	up: "↑",
	right: "→",
	down: "↓",
	left: "←",
	pageup: "⇞",
	pagedown: "⇟",
	home: "↖",
	end: "↘",
	help: "?",
	space: "␣"
};

const kbdKeysLabelMap: Record<KbdKey, string> = {
	command: "Command",
	shift: "Shift",
	ctrl: "Control",
	option: "Option",
	enter: "Enter",
	delete: "Delete",
	escape: "Escape",
	tab: "Tab",
	capslock: "Caps Lock",
	up: "Up",
	right: "Right",
	down: "Down",
	left: "Left",
	pageup: "Page Up",
	pagedown: "Page Down",
	home: "Home",
	end: "End",
	help: "Help",
	space: "Space"
};

document.querySelectorAll<HTMLDivElement>(".kbd").forEach(kbd => {
	const keys = kbd.getAttribute("data-keys");
	const content = kbd.querySelector<HTMLSpanElement>("span");
	if (keys && content) {
		const keyArr = keys.split(" ").map(key => key as KbdKey);
		keyArr.map(key => {
			const abbr = document.createElement("abbr");
			abbr.title = kbdKeysLabelMap[key];
			abbr.innerHTML = kbdKeysMap[key];
			kbd.insertBefore(abbr, content);
		});
	}
});
