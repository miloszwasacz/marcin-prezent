import { hideViewsOnBreakpoint } from "./progress-controller.js";

export function setUpResizeObservers() {
	const views = document.querySelectorAll("#margins-text");
	hideViewsOnBreakpoint(views);

	window.onresize = () => {
		hideViewsOnBreakpoint(views);
	};
}
