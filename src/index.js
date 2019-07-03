import "./styles/main.scss";
import { Square } from "./engine";

let STAGE = 1;

// new Square(x.position, y.position, x.velocity, y.velocity, sq.width, sq.height, maxsquares)
var game = new Square(10, 10, 10, 10, 40, 40);

game.start();
newStage(STAGE);

game._game.once(":gameover", function() {
    console.log('game over')
    game.stop();
    game.reset();
})



document.addEventListener('keydown', function (e) {
    if (e.key === " " || e.code === "Space") {
        game.restart();
    }
});

function newStage(stage) {
    localStorage.setItem(':STAGE', stage);
}