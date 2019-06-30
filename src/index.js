import "./styles/main.scss";
import { Square } from "./engine";



// new Square(x.position, y.position, x.velocity, y.velocity, sq.width, sq.height)
var game = new Square(10, 10, 20, 20, 60, 60);

game.start();





