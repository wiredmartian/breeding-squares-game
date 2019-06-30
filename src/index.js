import "./styles/main.scss";
import { Square } from "./engine";



// new Square(x.position, y.position, x.velocity, y.velocity, sq.width, sq.height)
var game = new Square(10, 10, 5, 5, 40, 40);

game.start();





