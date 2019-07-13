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
            dx: 8,
            dy: 8,
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
            dx: 10,
            dy: 10,
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
            dx: 12,
            dy: 12,
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
            dx: 14,
            dy: 14,
            w: 85,
            h: 85,
            maxsquares: 50,
            colors: getColors()
        }
    },
    {
    stage: 5,
    data: {
            x: 10,
            y: 10,
            dx: 15,
            dy: 15,
            w: 90,
            h: 90,
            maxsquares: 50,
            colors: getColors()
        }
    },
    // velocity, dimensions
    {
    stage: 6,
    data: {
            x: 10,
            y: 10,
            dx: 15,
            dy: 15,
            w: 75,
            h: 75,
            maxsquares: 50,
            colors: getColors()
        }
    },
    {
    stage: 7,
    data: {
            x: 10,
            y: 10,
            dx: 15,
            dy: 15,
            w: 70,
            h: 70,
            maxsquares: 50,
            colors: getColors()
        }
    },
    {
    stage: 8,
    data: {
            x: 10,
            y: 10,
            dx: 16,
            dy: 16,
            w: 65,
            h: 65,
            maxsquares: 50,
            colors: getColors()
        }
    },
    {
    stage: 9,
    data: {
            x: 10,
            y: 10,
            dx: 16,
            dy: 16,
            w: 60,
            h: 60,
            maxsquares: 50,
            colors: getColors()
        }
    },
    {
    stage: 10,
    data: {
            x: 10,
            y: 10,
            dx: 18,
            dy: 18,
            w: 55,
            h: 55,
            maxsquares: 50,
            colors: getColors()
        }
    },

    // veleocity, size, colors
    {
    stage: 11,
    data: {
            x: 10,
            y: 10,
            dx: 16,
            dy: 16,
            w: 50,
            h: 50,
            maxsquares: 50,
            colors: getColors().splice(0, getColors().length / 2)
        }
    },
    {
    stage: 12,
    data: {
            x: 10,
            y: 10,
            dx: 16,
            dy: 16,
            w: 50,
            h: 50,
            maxsquares: 50,
            colors: getColors().splice(0, (getColors().length / 2) - 1)
        }
    },
    {
    stage: 13,
    data: {
            x: 10,
            y: 10,
            dx: 16,
            dy: 16,
            w: 50,
            h: 50,
            maxsquares: 50,
            colors: getColors().splice(0, (getColors().length / 2) - 2)
        }
    },
    {
    stage: 13,
    data: {
            x: 10,
            y: 10,
            dx: 16,
            dy: 16,
            w: 50,
            h: 50,
            maxsquares: 50,
            colors: getColors().splice(0, (getColors().length / 2) - 3)
        }
    },
    {
    stage: 14,
    data: {
            x: 10,
            y: 10,
            dx: 16,
            dy: 16,
            w: 45,
            h: 45,
            maxsquares: 50,
            colors: getColors().splice(0, (getColors().length / 2) - 3)
        }
    },
    {
    stage: 15,
    data: {
            x: 10,
            y: 10,
            dx: 16,
            dy: 16,
            w: 50,
            h: 50,
            maxsquares: 50,
            colors: getColors().splice(0, (getColors().length / 2) - 4)
        }
    },
]