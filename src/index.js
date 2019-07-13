import "./styles/main.scss";
import { Square } from "./js/engine";
import { Stages } from './js/stages';

let GAME;
let STAGE = getCurrentStage(); // number
let STAGE_DATA = getNextStage(); // stage variables
if (STAGE_DATA) {
    loadNewGame(STAGE_DATA);
}


GAME._game.on(":gameover", function() {
    //GAME.stop();
    //GAME.reset();
})


document.addEventListener('keydown', function (e) {
    if (e.key === " " || e.code === "Space") {
        GAME.restart();
    }
});

function loadNewGame(s) {
    GAME = new Square(s.data.x, s.data.y, s.data.dx, s.data.dy, s.data.w, s.data.h);
    GAME.start();
    setNewStage(s.stage);
}

function setNewStage(stage) {
    localStorage.setItem(':STAGE', stage);
}
function getCurrentStage() {
    let s = localStorage.getItem(':STAGE');
    if (!s) {
        localStorage.setItem(':STAGE', 1);
        return 1;
    }
    return parseInt(s);
}
function getNextStage() {
    return Stages.find(s => s.stage === STAGE);
}