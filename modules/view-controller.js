import { getProgress } from "./progress-controller.js";
import { PROGRESS_PRECISION, SIZE_BREAKPOINT } from "./consts.js";

/**
 * @param {boolean} isPuzzle
 * @returns {number} Progress
 */
export function setUpView(isPuzzle = false) {
	const progress = getProgress();
	setProgress(progress, isPuzzle);
	if (!isPuzzle) setUpResizeObservers();
	return progress;
}

/**
 * @param {number} progress
 */
function setMargins(progress) {
	const width = progress / 2 + 50;
	const content = document.getElementById("content");
	content.style.width = `${width}%`;
	const marginViews = document.querySelectorAll("#margins");
	for (const view of marginViews) {
		view.style.width = `${(100 - width) / 2}%`;
	}
}

/**
 * @param {number} progress
 * @param {boolean} isPuzzle
 */
function setProgress(progress, isPuzzle) {
	const view = document.getElementById("progress");
	view.innerText = progress.toFixed(PROGRESS_PRECISION);
	if (!isPuzzle) {
		const textViews = document.querySelectorAll("#margins-text");
		for (const view of textViews) {
			const margin = 100 - Number(progress.toFixed(PROGRESS_PRECISION));
			view.innerText = `${margin}%`;
		}
		setMargins(progress);
		hideViewsOnBreakpoint(textViews);
	}
}

function setUpResizeObservers() {
	const views = document.querySelectorAll("#margins-text");
	hideViewsOnBreakpoint(views);

	window.onresize = () => {
		hideViewsOnBreakpoint(views);
	};
}

/**
 * @param {NodeListOf<Element>} views
 */
export function hideViewsOnBreakpoint(views) {
	const width = document.getElementById("margins").getBoundingClientRect().width;
	for (const view of views) {
		if (width < SIZE_BREAKPOINT) view.style.display = "none";
		else view.style.display = "block";
	}
}
