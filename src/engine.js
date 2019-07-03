import { EventEmitter } from "events";

let _gameEvent = new EventEmitter();


const canvas = document.querySelector('canvas');
let canvasDimensions = (window.innerHeight - 80);
const ctx = canvas.getContext('2d');
resizeCanvas();

let PARENT_HIT = false;
let ANIMATION_ID = undefined;
let SQUARES = [];
let MAX_SQUARES = 5;
let DX = undefined;
let DY = undefined;
let W;
let H;

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

window.addEventListener('resize', function () {
    resizeCanvas();
});

export class Square {
    constructor(x, y, dx, dy, w = 40, h = 40) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.w = w;
        this.h = h;

        this.color = colors[Math.floor(Math.random() * colors.length)];

        // share values with animate function
        if (!(DX && DY)) {
            DX = this.dx;
            DY = this.dy;
        }
        W = this.w;
        H = this.h;
        //
        this.draw = function () {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.h, this.w);
        };
        this.update = function () {
            if (this.x + this.w > canvasDimensions || this.x < 0) {
                this.dx = -this.dx;
            }
            if (this.y + this.h > canvasDimensions || this.y < 0) {
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

            // check squares
            if (SQUARES.length >= MAX_SQUARES) {
                this.emitEvent(":gameover");
            }
        };
        this.parentHit = function () {
            // distance between mouse and original square
            if (!(mouseCoords.x === undefined && mouseCoords.y === undefined)) {
                let x_c = mouseCoords.x - (this.w / 2);
                let y_c = mouseCoords.y - (this.h / 2);
                if (calculateDistance(x_c, this.x, y_c, this.y) < 30) {
                    this.emitEvent(":win");
                    PARENT_HIT = true;
                }
            }
            return PARENT_HIT;
        };
        this.reset = function () {
            this.emitEvent(":reset");
            setTimeout(function(){
                for (let x = (SQUARES.length-1); x > 0; x--) {
                    ctx.clearRect(SQUARES[x].x - 5, SQUARES[x].y - 5, w + 10, h + 10);
                    SQUARES.splice(x, 1);
                }

            }, 800)
            ctx.clearRect(0, 0, innerWidth, innerHeight);
        };
        this.createParents = function() {
            for(let i = 0; i < 2; i++) {
                let x = Math.random() * (canvasDimensions - 50);
                let y = Math.random() * (canvasDimensions - 50);
                let dx = (Math.random() * this.dx);
                let dy = (Math.random() * this.dy);
                SQUARES.push(new Square(x, y, dx, dy, this.w, this.h));
            }
        };
        this.start = function() {
            this.emitEvent(":start");
            this.createParents();
            animate();
        };
        this.restart = function () {
            if(ANIMATION_ID == undefined && SQUARES.length === 0 && PARENT_HIT === false) {
                this.createParents();
                animate();
            }
        };
        this.stop = function () {
            this.emitEvent(":stop");
            cancelAnimationFrame(ANIMATION_ID);
            PARENT_HIT = false;
            ANIMATION_ID = undefined;
        };
        this.emitEvent = function(eventName) {
            _gameEvent.emit(eventName);
        }

        this._game = _gameEvent;
    }
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

function resizeCanvas() {
    canvas.width = (window.innerHeight - 80);
    canvas.height = (window.innerHeight - 80);
}

function animate() {
    let x = Math.random() * (canvasDimensions - 50);
    let y = Math.random() * (canvasDimensions - 50);
    let dx = (Math.random() * DX);
    let dy = (Math.random() * DY);
    ANIMATION_ID = requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for(let i = 0; i < SQUARES.length; i++){
        SQUARES[i].update();
        if (SQUARES.length <= MAX_SQUARES) {
            if (Math.floor(SQUARES[0].x) === Math.floor(SQUARES[1].x)) {
                SQUARES.push(new Square(x, y, dx, dy, W, H, MAX_SQUARES));
                //updateScore();
                break;
            }
        }
    }
}