import "./styles/main.scss";
import { Square } from "./engine";



// new Square(x.position, y.position, x.velocity, y.velocity, sq.width, sq.height)
var game = new Square(10, 10, 8, 8, 80, 80);

game.start();


document.addEventListener('keydown', function (e) {
    if (e.key === " " || e.code === "Space") {
        game.restart();
    }
});


