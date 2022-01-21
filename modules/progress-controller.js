import { PROGRESS_KEY, PROGRESS_PRECISION } from "./consts.js";

//#region Progress
/**
 * @returns {number} Progress in percentage
 */
export function getProgress() {
	const progress = Number(localStorage.getItem(PROGRESS_KEY));
	return Number.isNaN(progress) ? 0 : Number(progress.toFixed(PROGRESS_PRECISION));
}

/**
 * @param {number} progress
 */
export function saveProgress(progress) {
	localStorage.setItem(PROGRESS_KEY, Number.isNaN(progress) ? "0" : progress.toFixed(PROGRESS_PRECISION));
}
//#endregion
