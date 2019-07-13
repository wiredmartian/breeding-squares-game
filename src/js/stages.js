// new Square(x.position, y.position, x.velocity, y.velocity, sq.width, sq.height, maxsquares)

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
            maxsquares: 5,
            colors: ['#57F408', '#08F4A5']
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
            maxsquares: 40,
            colors: ['#57F408', '#08F4A5']
        }
    },
    
]