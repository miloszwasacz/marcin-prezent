import { setUpView } from "../modules/view-controller.js";

setUpView(true);

/**
 * @type {HTMLInputElement}
 */
const input = document.getElementById("");
document.getElementById("").onclick = () => {
	const result = check(input.value);
};

/**
 * @param {string} input
 * @returns {boolean}
 */
function check(input) {
	return input === "${ANSWER}";
}
