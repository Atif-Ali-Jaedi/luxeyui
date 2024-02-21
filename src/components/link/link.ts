document.querySelectorAll<HTMLAnchorElement>("a.link").forEach(l => {
	const isExternal =
		l.getAttribute("target") || l.getAttribute("data-show-anchor-icon");
	const anchorIcon = l.getAttribute("data-anchor-icon");
	isExternal &&
		(l.innerHTML +=
			anchorIcon ||
			`<svg width="14px" height="14px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g fill="currentColor" stroke-width="0.1"><path d="M9 .75A.75.75 0 019.75 0h4.5c.206 0 .393.083.529.218l.001.002.002.001A.748.748 0 0115 .75v4.5a.75.75 0 01-1.5 0V2.56L7.28 8.78a.75.75 0 01-1.06-1.06l6.22-6.22H9.75A.75.75 0 019 .75z"></path> <path d="M3.25 3.5a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0110.75 14h-7.5A2.25 2.25 0 011 11.75v-7.5A2.25 2.25 0 013.25 2h4a.75.75 0 010 1.5h-4z"></path></g></svg>`);
});
