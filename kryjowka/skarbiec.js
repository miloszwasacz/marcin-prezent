import { setUpView } from "../modules/view-controller.js";
import { getProgress } from "../modules/progress-controller.js";

setUpView(true);
unlockPuzzle();

function unlockPuzzle() {
	if (getProgress() === 100) {
		document.getElementById("locked-message").setAttribute("hidden", "true");
		document.getElementById("container").removeAttribute("hidden");
	}
}
