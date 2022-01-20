import * as Consts from "./consts.js";

export function setUpView() {
	const progress = getProgress();
	setProgress(progress);
}

/**
 * @param {NodeListOf<Element>} views
 */
export function hideViewsOnBreakpoint(views) {
	const width = document.getElementById("margins").getBoundingClientRect().width;
	for (const view of views) {
		if (width < Consts.SIZE_BREAKPOINT) view.style.display = "none";
		else view.style.display = "block";
	}
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
 */
function setProgress(progress) {
	const view = document.getElementById("progress");
	view.innerText = progress.toFixed(0);
	const textViews = document.querySelectorAll("#margins-text");
	for (const view of textViews) {
		const margin = 100 - Number(progress.toFixed(0));
		view.innerText = `${margin}%`;
	}
	setMargins(progress);
	hideViewsOnBreakpoint(textViews);
}

//#region Progress
/**
 * @returns {number} Progress in percentage
 */
function getProgress() {
	const progress = Number(localStorage.getItem(Consts.PROGRESS_KEY));
	return Number.isNaN(progress) ? 0 : Number(progress.toFixed(0));
}

/**
 * @param {number} progress
 */
export function saveProgress(progress) {
	localStorage.setItem(Consts.PROGRESS_KEY, Number.isNaN(progress) ? "0" : progress.toFixed(0));
}
//#endregion
