import "./styles/main.scss";

const canvas = document.querySelector('canvas');
let canvasDimensions = (window.innerHeight - 80);
const ctx = canvas.getContext('2d');
resizeCanvas();

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
const drone_x = Math.floor(canvasDimensions /2);
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

window.addEventListener('resize', function () {
    resizeCanvas();
});
function resizeCanvas() {
    canvas.width = (window.innerHeight - 80);
    canvas.height = (window.innerHeight - 80);
}