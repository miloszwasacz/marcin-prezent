import { setUpView } from "../modules/view-controller.js";
import { getProgress } from "../modules/progress-controller.js";
import { PUZZLE_COUNT } from "../modules/consts.js";

setUpView(true);
unlockPuzzle()

/**
 * @type {HTMLInputElement}
 */
const input = document.getElementById("answer");
document.getElementById("check-button").onclick = () => {
	const result = input.value.trim().toUpperCase() === "BAJTEK".toUpperCase();
    showMessage(result)
};

function unlockPuzzle() {
    const requiredProgress = (2 - 1) * 100 / PUZZLE_COUNT
    if (getProgress() >= requiredProgress) {
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
