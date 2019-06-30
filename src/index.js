import "./styles/main.scss";

const canvas = document.querySelector('canvas');
let canvasDimensions = (window.innerHeight - 80);
const ctx = canvas.getContext('2d');
resizeCanvas();

let PARENT_HIT = false;
let ANIMATION_ID = undefined;
let SQUARES = [];

let colors = ['#57F408', '#08F4A5', '#08CDF4', '#9F33EE', '#0857F4', '#EE3382'];

let mouseCoords = {
    x: undefined,
    y: undefined
};

// event handlers
document.addEventListener('mousedown', function (e) {
    mouseCoords.x = e.layerX;
    mouseCoords.y = e.layerY;
});

document.addEventListener('keydown', function (e) {
    if (e.key === " " || e.code === "Space") {
        if (ANIMATION_ID === undefined && SQUARES.length === 0 && PARENT_HIT === false) {
            restart();
        }
    }
});

window.addEventListener('resize', function () {
    resizeCanvas();
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
            this.stop();
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
        let x = SQUARES.length - 1;
        let interval = setInterval(function () {
            if (SQUARES.length > 0) {
                console.log(SQUARES.length);
                ctx.clearRect(SQUARES[x].x - 5, SQUARES[x].y -5, w + 10, h + 10);
                SQUARES.splice(x, 1);
                x--;
            } else {
                clearInterval(interval);
                ctx.clearRect(0, 0, innerWidth, innerHeight);
            }
        }, 200);
    };

    this.restart = function () {
        createParentSquares();
        animate();
    }

    this.stop = function() {
        cancelAnimationFrame(ANIMATION_ID);
        PARENT_HIT = false;
        ANIMATION_ID = undefined;
    }
}


function restart() {
    createParentSquares();
    animate();
}

function createParentSquares() {
    for(let i = 0; i < 2; i++) {
        let x = Math.random() * (canvasDimensions - 50);
        let y = Math.random() * (canvasDimensions - 50);
        let dx = (Math.random() * 10);
        let dy = (Math.random() * 10);
        SQUARES.push(new Square(x, y, dx, dy));
    }
}
createParentSquares();

function animate() {
    let x = Math.random() * (canvasDimensions - 50);
    let y = Math.random() * (canvasDimensions - 50);
    let dx = (Math.random() * 10);
    let dy = (Math.random() * 10);
    ANIMATION_ID = requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for(let i = 0; i < SQUARES.length; i++){
        SQUARES[i].update();
        if (SQUARES.length <= 100) {
            if (Math.floor(SQUARES[0].x) === Math.floor(SQUARES[1].x)) {
                SQUARES.push(new Square(x, y, dx, dy));
                //updateScore();
                break;
            }
        }
    }
}
animate();

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

function resizeCanvas() {
    canvas.width = (window.innerHeight - 80);
    canvas.height = (window.innerHeight - 80);
}