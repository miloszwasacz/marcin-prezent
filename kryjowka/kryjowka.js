import { setUpView } from "../modules/view-controller.js";
import * as Consts from "../modules/consts.js";

const progress = setUpView();

const elevator = document.getElementById("elevator");
const offset = window.innerWidth > Consts.MOBILE_BREAKPOINT ? Consts.ELEVATOR_OFFSET : Consts.ELEVATOR_OFFSET_MOBILE;
elevator.style.height = `calc(${(progress * Consts.PUZZLE_COUNT) / (Consts.PUZZLE_COUNT + 1)}% + ${offset}px)`;
