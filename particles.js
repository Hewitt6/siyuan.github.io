let particles = [];

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('canvas-container');

    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    background(255); // 或者其他颜色

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].show();
    }
}

class Particle {
    constructor() {
        this.x = mouseX;
        this.y = mouseY;
        this.px = mouseX;
        this.py = mouseY;
        this.vx = random(-1, 1);
        this.vy = random(-1, 1);
        this.alpha = 255;
    }

    update() {
        this.px = this.x;
        this.py = this.y;
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 5;
    }

    show() {
        noStroke();
        fill(0, this.alpha); // 或者其他颜色
        ellipse(this.x, this.y, 8); // 您可以更改粒子的大小
    }
}
