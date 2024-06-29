document.querySelectorAll<HTMLDivElement>(".avatar").forEach(avatar => {
	const img = avatar.querySelector<HTMLImageElement>("img");
	if (img && !img.getAttribute("src")) {
		img.classList.add("hidden");
		const fallback = avatar.getAttribute("data-fallback") || "";
		avatar.innerHTML = !img.getAttribute("alt")
			? fallback
				? fallback
				: `<svg aria-hidden="true" fill="none" height="80%" role="presentation" viewBox="0 0 24 24" width="80%"><path d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z" fill="currentColor"></path><path d="M17.0809 14.1489C14.2909 12.2889 9.74094 12.2889 6.93094 14.1489C5.66094 14.9989 4.96094 16.1489 4.96094 17.3789C4.96094 18.6089 5.66094 19.7489 6.92094 20.5889C8.32094 21.5289 10.1609 21.9989 12.0009 21.9989C13.8409 21.9989 15.6809 21.5289 17.0809 20.5889C18.3409 19.7389 19.0409 18.5989 19.0409 17.3589C19.0309 16.1289 18.3409 14.9889 17.0809 14.1489Z" fill="currentColor"></path></svg>`
			: avatar.innerHTML + img.alt;
	}
});
document
	.querySelectorAll<HTMLDivElement>(".avatar-group")
	.forEach(avatarGroup => {
		const countDisplayClasses = avatarGroup.getAttribute(
			"data-total-count-classnames"
		);
		const countChild = avatarGroup.getAttribute("data-total-count-child");
		const totalChildElements = avatarGroup.childElementCount;
		const maxCount = parseInt(avatarGroup.getAttribute("data-max") || "5", 10);
		const totalCount =
			parseInt(avatarGroup.getAttribute("data-total") || "", 10) || undefined;
		const avatars = avatarGroup.querySelectorAll<HTMLDivElement>(".avatar");
		if (maxCount < totalChildElements) {
			avatars.forEach((avatar, index) => {
				if (index >= maxCount) (avatar as HTMLElement).classList.add("hidden");
			});
			const leftElement = document.createElement("div");
			leftElement.className = countDisplayClasses
				? countDisplayClasses
				: `${avatars[0].className}`;
			// Will be changed to eval(countChild)
			leftElement.innerHTML = countChild
				? countChild
				: `+${
						totalCount ? totalCount : totalChildElements - maxCount
				  }`;
			avatarGroup.appendChild(leftElement);
		}
	});
