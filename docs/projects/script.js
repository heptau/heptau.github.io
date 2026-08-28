(function () {
	// Color scheme
	const media = window.matchMedia("(prefers-color-scheme: dark)");
	function applyTheme() {
		document.documentElement.style.colorScheme = media.matches
			? "dark"
			: "light";
	}
	applyTheme();
	media.addEventListener("change", applyTheme);

	// Opt-in animations — mark body so CSS can hide/show elements
	document.documentElement.classList.add("js-ready");

	// Staggered entrance animations via IntersectionObserver
	function observe() {
		const sections = document.querySelectorAll(".section");
		const cards = document.querySelectorAll(".card-item");

		const sectionObs = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");
						sectionObs.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.05 },
		);

		const cardObs = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const card = entry.target;
						// stagger within grid by sibling index
						const siblings =
							card.parentElement.querySelectorAll(".card-item");
						let idx = 0;
						siblings.forEach((s, i) => {
							if (s === card) idx = i;
						});
						card.style.animationDelay = idx * 60 + "ms";
						card.classList.add("visible");
						cardObs.unobserve(card);
					}
				});
			},
			{ threshold: 0.08 },
		);

		sections.forEach((s) => sectionObs.observe(s));
		cards.forEach((c) => cardObs.observe(c));
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", observe);
	} else {
		observe();
	}
})();
