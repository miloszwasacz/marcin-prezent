import { saveProgress } from "./modules/progress-controller.js";
import { setUpView } from "./modules/view-controller.js";

setUpView();
document.getElementById("bt").onclick = () => {
	const progress = document.getElementById("pr").value;
	saveProgress(Number(progress));
	setUpView();
};
