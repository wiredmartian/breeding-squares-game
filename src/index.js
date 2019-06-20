import "./styles/main.scss";

const canvas = document.querySelector('canvas');
let canvasDimensions = (window.innerHeight - 80);
const ctx = canvas.getContext('2d');
resizeCanvas();

let PARENT_HIT = false;
let ANIMATION_ID = undefined;
let squares = [];

let colors = ['#57F408', '#08F4A5', '#08CDF4', '#9F33EE', '#0857F4', '#EE3382'];

let mouseCoords = {
    x: undefined,
    y: undefined
};

document.addEventListener('mousedown', function (e) {
    mouseCoords.x = e.layerX;
    mouseCoords.y = e.layerY;
});

function Square(x, y, dx, dy) {

    this.x = x;
    this.y = y;

    this.dx = dx;
    this.dy = dy;

    let h = 40, w = 40;
    this.color = colors[Math.floor(Math.random() * colors.length)];

    this.draw = function () {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, h, w);
    };
    this.update = function () {
        if (this.x + w > canvasDimensions || this.x < 0) {
            this.dx = -this.dx;
        }
        if (this.y + h > canvasDimensions || this.y < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        if (this.parentHit()) {
            stop();
            this.reset();
        }

        mouseCoords.x = undefined;
        mouseCoords.y = undefined;
        this.draw();
    };

    this.parentHit = function () {
        // distance between mouse and original square
        if (!(mouseCoords.x === undefined && mouseCoords.y === undefined)) {
            if (calculateDistance((mouseCoords.x -10), this.x, (mouseCoords.y -10), this.y) < 30) {
                PARENT_HIT = true;
            }
        }
        return PARENT_HIT;
    };

    this.reset = function () {
        let x = squares.length - 1;
        let interval = setInterval(function () {
            if (squares.length > 0) {
                console.log(squares.length);
                ctx.clearRect(squares[x].x - 5, squares[x].y -5, w + 10, h + 10);
                squares.splice(x, 1);
                x--;
            } else {
                clearInterval(interval);
                ctx.clearRect(0, 0, innerWidth, innerHeight);
            }
        }, 500);
    };

}


function createParentSquares() {
    for(let i = 0; i < 2; i++) {
        let x = Math.random() * (canvasDimensions - 50);
        let y = Math.random() * (canvasDimensions - 50);
        let dx = (Math.random() * 5);
        let dy = (Math.random() * 5);
        squares.push(new Square(x, y, dx, dy));
    }
}
createParentSquares();

function animate() {
    let x = Math.random() * (canvasDimensions - 50);
    let y = Math.random() * (canvasDimensions - 50);
    let dx = (Math.random() * 5);
    let dy = (Math.random() * 5);
    ANIMATION_ID = requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for(let i = 0; i < squares.length; i++){
        squares[i].update();
        if (squares.length <= 100) {
            if (Math.floor(squares[0].x) === Math.floor(squares[1].x)) {
                squares.push(new Square(x, y, dx, dy));
                //updateScore();
                break;
            }
        }
    }
}
animate();

function stop() {
    cancelAnimationFrame(ANIMATION_ID);
    PARENT_HIT = false;
    ANIMATION_ID = undefined;
}
function reset() {

}

function calculateDistance(x2, x1, y2, y1) {
    x1 = Math.floor(x1);
    x2 = Math.floor(x2);
    y1 = Math.floor(y1);
    y2 = Math.floor(y2);
    let _x = Math.pow((x2 - x1), 2);
    let _y = Math.pow((y2 - y1), 2);
    let _sum = _x + _y;
    return Math.floor(Math.sqrt(_sum)) || undefined;
}
let squareCount = document.querySelector('#squareCount');

function updateScore() {
    squareCount.textContent = squares.length.toString() + " | 100";
}

window.addEventListener('resize', function () {
    resizeCanvas();
});
function resizeCanvas() {
    canvas.width = (window.innerHeight - 80);
    canvas.height = (window.innerHeight - 80);
}