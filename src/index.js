import "./styles/main.scss";

const canvas = document.querySelector('canvas');
let canvasDimensions = (window.innerHeight - 80);
const ctx = canvas.getContext('2d');
resizeCanvas();


let squares = [];

let colors = ['#57F408', '#08F4A5', '#08CDF4', '#9F33EE', '#0857F4', '#EE3382'];

let mouseCoords = {
    x: undefined,
    y: undefined
};

document.addEventListener('mousedown', function (e) {
    mouseCoords.x = e.layerX;
    mouseCoords.y = e.layerY;
    console.log(mouseCoords);
    /*let mouse_coords = [e.x, e.y];
    let square_coords = [Math.floor(squares[0].x), Math.floor(squares[0].y)];
    console.log(mouse_coords, square_coords);
    let distance = calculateDistance(mouse_coords[0], square_coords[0], mouse_coords[1], square_coords[1]);
    console.log(distance);*/

});

function Square(x, y, dx, dy) {

    this.x = x;
    this.y = y;

    this.dx = dx;
    this.dy = dy;

    let h = 40, w = 40;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    console.log(this.x, this.y);

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

        // distance between mouse and original square
        if (!(mouseCoords.x === undefined && mouseCoords.y === undefined)) {
            if (calculateDistance((mouseCoords.x -10), this.x, (mouseCoords.y -10), this.y) < 40) {
                console.log('----------------------------------------------')
            }
        }
        mouseCoords.x = undefined;
        mouseCoords.y = undefined;
        this.draw();
    };

    this.start = function () {

    }
}

function createParentSquares() {
    for(let i = 0; i < 1; i++) {
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
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for(let i = 0; i < squares.length; i++){
        squares[i].update();
        if (squares.length <= 100) {
            if (Math.floor(squares[0].x) === Math.floor(squares[0].x)) {
                //squares.push(new Square(x, y, dx, dy));
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





const NORTH = 1; // +y
const EAST = 2; // +x
const SOUTH = 3; // -y
const WEST = 4; // -x

function Drone(x, y, front = 1) {
    //PLACE
    this.x = x;
    this.y = y;

    // velocity
    let vx = 8;
    let vy = 8;

    // drone size
    let height = 100;
    let width = 100;

    let d = new Image();

    this.draw = function () {
        d.src = './src/assets/ship.png';
        d.addEventListener('load', function () {
            ctx.drawImage(d, x - Math.floor(width/2) ,y, width, height);
        });
        //ctx.translate(width, height);
        //ctx.rotate(Math.PI / 2);
        /*ctx.fillStyle = 'green';
        ctx.fillRect(x, y, width, height);*/
    };


    this.move = function () {
        if (front === NORTH) {
            y -= vy;
            this.moveY();
        } else if (front === EAST) {
            x += vx;
            this.moveX();
        } else if (front === SOUTH) {
            y += vy;
            this.moveY();
        } else if (front === WEST){
            x -= vx;
            this.moveX();
        }
    };
    this.moveX = function () {
        if (x + width < canvasDimensions && x > 0) {
            ctx.clearRect(vx, vy,innerWidth, innerHeight);
            this.draw();
        }
    };
    this.moveY = function () {
        if (y + height < canvasDimensions && y > 0) {
            ctx.clearRect(vx, vy,innerWidth, innerHeight);
            this.draw();
        }
    };
    this.turnLeft = function () {
        // anti-clockwise
        switch (front) {
            case NORTH:
                front = WEST;
                /*ctx.clearRect(vx, vy,innerWidth, innerHeight);
                ctx.translate(10, 10);
                ctx.rotate(Math.PI / 3);
                this.draw();*/
                console.log('translate');
                break;
            case WEST:
                front = SOUTH;
                break;
            case SOUTH:
                front = EAST;
                break;
            default:
                front = NORTH;
        }
    };
    this.turnRight = function () {
        // clockwise
        switch (front) {
            case NORTH:
                front = EAST;
                break;
            case EAST:
                front = SOUTH;
                break;
            case SOUTH:
                front = WEST;
                break;
            default:
                front = NORTH;
        }
    };
    this.shoot = function () {
        animate();
    };

    let bullet_x = width;
    let bullet_y = height;
    function animate() {
        ctx.clearRect(bullet_x, bullet_y, 20, 20);
        requestAnimationFrame(animate);
        ctx.fillStyle = 'green';
        ctx.fillRect(bullet_x, bullet_y, 10, 10);

        if (front === NORTH) {
            bullet_y -= 2;
        } else if (front === EAST) {
            bullet_x += 2;
        }
    }
}

// Place drone on origin
/*const drone_x = Math.floor(canvasDimensions /2);
let drone_y = canvasDimensions - 80;

const drone = new Drone(drone_x, drone_y);
drone.draw();


document.addEventListener('keydown', function (e) {
    if (e.code === 'KeyF' || e.key === 'f') {
        drone.move();
    }
    else if (e.code === 'ArrowRight' || e.key === 'ArrowRight'){
        drone.turnRight();
    } else if (e.code === 'ArrowLeft' || e.key === 'ArrowLeft') {
        drone.turnLeft();
    }
});
*/
window.addEventListener('resize', function () {
    resizeCanvas();
});
function resizeCanvas() {
    canvas.width = (window.innerHeight - 80);
    canvas.height = (window.innerHeight - 80);
}