import { setUpView, saveProgress } from "./modules/progress-controller.js";
import { setUpResizeObservers } from "./modules/view-controller.js";

setUpView();
setUpResizeObservers();
document.getElementById("bt").onclick = () => {
	const progress = document.getElementById("pr").value;
	saveProgress(Number(progress));
	setUpView();
};
