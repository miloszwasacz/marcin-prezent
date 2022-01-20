import { setUpView } from "../modules/progress-controller.js";
import { setUpResizeObservers } from "../modules/view-controller.js";
import * as Consts from "../modules/consts.js";

const progress = setUpView();
setUpResizeObservers();

const elevator = document.getElementById("elevator");
const offset = window.innerWidth > Consts.MOBILE_BREAKPOINT ? Consts.ELEVATOR_OFFSET : Consts.ELEVATOR_OFFSET_MOBILE;
elevator.style.height = `calc(${progress}% + ${offset}px)`;