import { setUpView } from "../modules/view-controller.js";
import { getProgress, setPuzzleStatus } from "../modules/progress-controller.js";
import { PROGRESS_PRECISION, PUZZLE_COUNT } from "../modules/consts.js";

setUpView(true);
unlockPuzzle()

/**
 * @type {HTMLInputElement}
 */
const input = document.getElementById("answer");
document.getElementById("check-button").onclick = () => {
	const result = input.value.trim().toUpperCase() === "0".toUpperCase();
    showMessage(result)
    if(result) {
        setPuzzleStatus(3)
        setUpView(true)
    }
};

function unlockPuzzle() {
    /**
     * @type {number}
     */
    const requiredProgress = (3 - 1) * 100 / PUZZLE_COUNT
    if (getProgress() >= requiredProgress.toFixed(PROGRESS_PRECISION)) {
        document.getElementById("locked-message").setAttribute("hidden", "true")
        document.getElementById("container").removeAttribute("hidden")
    }
}

/**
 * @param {boolean} result 
 */
function showMessage(result) {
    const wrong = document.getElementById("wrong-message")
    const correct = document.getElementById("correct-message")
    if (result) {
        wrong.setAttribute("hidden", "true")
        correct.removeAttribute("hidden")
    }
    else {
        correct.setAttribute("hidden", "true")
        wrong.removeAttribute("hidden")
    }
}
