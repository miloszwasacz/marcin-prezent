import { PROGRESS_KEY, PROGRESS_PRECISION, PUZZLE_COUNT } from "./consts.js";

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
function saveProgress(progress) {
	localStorage.setItem(PROGRESS_KEY, Number.isNaN(progress) ? "0" : progress.toFixed(PROGRESS_PRECISION));
}

/**
 * Sets progress according to puzzle level
 * @param {number} puzzleLevel
 */
export function setPuzzleStatus(puzzleLevel) {
	saveProgress((puzzleLevel * 100) / PUZZLE_COUNT);
}
