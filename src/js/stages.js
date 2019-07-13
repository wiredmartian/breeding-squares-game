// new Square(x.position, y.position, x.velocity, y.velocity, sq.width, sq.height, maxsquares)
function getColors() {
    return ['#57F408', '#08F4A5', '#08CDF4', '#9F33EE', '#0857F4', '#EE3382', '#CD85F5', '#9332FF', '#25F4E3', '#0F7C7E'];
}
export const Stages = [
    {
    stage: 1,
    data: {
            x: 10,
            y: 10,
            dx: Math.random() * 8,
            dy: Math.random() * 8,
            w: 80,
            h: 80,
            maxsquares: 50,
            colors: getColors()
        }
    },
    {
    stage: 2,
    data: {
            x: 10,
            y: 10,
            dx: Math.random() * 10,
            dy: Math.random() * 10,
            w: 80,
            h: 80,
            maxsquares: 50,
            colors: getColors()
        }
    },
    {
    stage: 2,
    data: {
            x: 10,
            y: 10,
            dx: Math.random() * 12,
            dy: Math.random() * 12,
            w: 80,
            h: 80,
            maxsquares: 50,
            colors: getColors()
        }
    },
    {
    stage: 3,
    data: {
            x: 10,
            y: 10,
            dx: Math.random() * 14,
            dy: Math.random() * 14,
            w: 80,
            h: 80,
            maxsquares: 50,
            colors: getColors()
        }
    },
    {
    stage: 4,
    data: {
            x: 10,
            y: 10,
            dx: Math.random() * 16,
            dy: Math.random() * 16,
            w: 80,
            h: 80,
            maxsquares: 50,
            colors: getColors()
        }
    },
    {
    stage: 5,
    data: {
            x: 10,
            y: 10,
            dx: Math.random() * 18,
            dy: Math.random() * 18,
            w: 80,
            h: 80,
            maxsquares: 50,
            colors: getColors()
        }
    },

    // velocity, colors, dimensions
    {
    stage: 6,
    data: {
            x: 10,
            y: 10,
            dx: Math.random() * 12,
            dy: Math.random() * 12,
            w: 65,
            h: 65,
            maxsquares: 50,
            colors: getColors().splice(0, getColors().length/2)
        }
    },
    {
    stage: 7,
    data: {
            x: 10,
            y: 10,
            dx: Math.random() * 14,
            dy: Math.random() * 14,
            w: 60,
            h: 60,
            maxsquares: 50,
            colors: getColors().splice(0, getColors().length/2)
        }
    },
    {
    stage: 8,
    data: {
            x: 10,
            y: 10,
            dx: Math.random() * 15,
            dy: Math.random() * 15,
            w: 60,
            h: 60,
            maxsquares: 50,
            colors: getColors().splice(0, getColors().length/2)
        }
    },
    {
    stage: 9,
    data: {
            x: 10,
            y: 10,
            dx: Math.random() * 14,
            dy: Math.random() * 14,
            w: 65,
            h: 65,
            maxsquares: 50,
            colors: getColors().splice(0, 6)
        }
    },
    {
    stage: 10,
    data: {
            x: 10,
            y: 10,
            dx: Math.random() * 12,
            dy: Math.random() * 12,
            w: 50,
            h: 50,
            maxsquares: 50,
            colors: getColors().splice(0, 6)
        }
    },

]