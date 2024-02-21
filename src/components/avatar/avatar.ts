document.querySelectorAll<HTMLDivElement>(".avatar").forEach(ai => {
	const img = ai.querySelector("img");
	if (img && !img.getAttribute("src")) {
		img.classList.add("hidden");
		const fallback = ai.getAttribute("data-fallback") || "";
		ai.innerHTML = !img.getAttribute("alt")
			? fallback
				? fallback
				: `<svg aria-hidden="true" fill="none" height="80%" role="presentation" viewBox="0 0 24 24" width="80%"><path d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z" fill="currentColor"></path><path d="M17.0809 14.1489C14.2909 12.2889 9.74094 12.2889 6.93094 14.1489C5.66094 14.9989 4.96094 16.1489 4.96094 17.3789C4.96094 18.6089 5.66094 19.7489 6.92094 20.5889C8.32094 21.5289 10.1609 21.9989 12.0009 21.9989C13.8409 21.9989 15.6809 21.5289 17.0809 20.5889C18.3409 19.7389 19.0409 18.5989 19.0409 17.3589C19.0309 16.1289 18.3409 14.9889 17.0809 14.1489Z" fill="currentColor"></path></svg>`
			: ai.innerHTML + img.alt;
	}
});
document.querySelectorAll<HTMLDivElement>(".avatar-group").forEach(ag => {
	const countDisplayStyles = ag.getAttribute("data-total-count-classnames");
	const countChild = ag.getAttribute("data-total-count-child");
	const totalChildElements = ag.childElementCount;
	const maxCount = parseInt(ag.getAttribute("data-max") || "5", 10);
	const totalCount =
		parseInt(ag.getAttribute("data-total") || "", 10) || undefined;
	const avatars = ag.querySelectorAll<HTMLDivElement>(".avatar");
	if (maxCount < totalChildElements) {
		avatars.forEach((avatar, index) => {
			if (index >= maxCount) (avatar as HTMLElement).classList.add("hidden");
		});
		const leftElement = document.createElement("div");
		leftElement.className = countDisplayStyles
			? countDisplayStyles
			: `${avatars[0].className}`;
		// Will be changed to eval(countChild)
		leftElement.innerHTML = countChild
			? countChild
			: `<div class="w-full h-full outline-2 outline outline-white rounded-[inherit] grid place-items-center">+${
					totalCount ? totalCount : totalChildElements - maxCount
			  }</div>`;
		ag.appendChild(leftElement);
	}
});
