  ////////////////////////////////////// INIT AND ANIMATE

  let WIDTH, HEIGHT;
  let running = false;
  let particles = [];
  let particlesLength = 0;
  let maxParticles = 0;

  function resize() {
    WIDTH = document.querySelector("html").clientWidth;
    HEIGHT = document.querySelector("html").clientHeight;
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
  }

  init = function() {
    resize();

    // Define particle amount using WIDTH and HEIGHT
    maxParticles = Math.floor((WIDTH * HEIGHT) / 3500);

    if (!running) {
      generateParticles(maxParticles);
      particlesLength = particles.length;
      animate();
      running = true;
    }
  }

  function animate() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    //this handles recycling of particles or removing if density is too high

    updateParticles();

    //if window size increases, this will add particles to a similar density
    if (particlesLength < maxParticles) {
      generateParticles(1);
      particlesLength = particles.length;
    }

    requestAnimationFrame(animate);
  }

  ////////////////////////////////////// PARTICLES AND ANIMATE

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  class Particle {
    constructor() {
      this.alpha = (Math.floor(Math.random() * 70) + 30) / 100;
      //roughly 4% chance for particle to be bigger
      this.minSize;
      Math.round(Math.random() - 0.46)
        ? (this.minSize = 7)
        : (this.minSize = 1);
      //size based on size of screen
      this.size = Math.floor(Math.random() * maxParticles) / 180 + this.minSize;
      this.pos = {
        //set position to random place on X axis and offscreen on Y
        x: Math.floor(Math.random() * WIDTH),
        y: HEIGHT + this.size * 3,
      };
      this.vel = {
        // velocity to random amount between -0.2 and 0.2, two decimal places for performance
        x: Math.floor(Math.random() * 40) / 70 - 0.2,
        y: -Math.floor(Math.random() * (40 * this.size * 2)) / 100,
      };
      //add vel to y value of stronger alpha values to avoid obfuscation of yellow text
      if (this.alpha > 0.6) {
        this.vel.y += 0.7;
      }
      // color is not-white but with random amount of transparency
      this.color = `rgba(243, 247, 252, ${this.alpha})`;
      this.remove = false;
    }
    draw() {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, this.size, Math.PI * 2, false); // draws a circle
      ctx.fill();
    }
    move() {
      this.pos.x += this.vel.x;
      this.pos.y += this.vel.y;
    }
    removeOffscreen() {
      if (
        this.pos.x < -this.size ||
        this.pos.x > WIDTH + this.size ||
        this.pos.y < -this.size
      ) {
        this.remove = true;
      }
    }
    update() {
      this.removeOffscreen();
      this.move();
      this.draw();
    }
  }

  function generateParticles(amount) {
    for (let i = 0; i < amount; i++) {
      particles.push(new Particle());
    }
  }

  function updateParticles() {
    for (let i = 0; i < particlesLength; i++) {
      particles[i].update();
      reassignParticles(i);
    }
  }

  function reassignParticles(i) {
      if (particles[i].remove) {
        if (particlesLength > maxParticles) {
          particles.splice(i, 1);
          particlesLength = particles.length;
        } else particles[i] = new Particle();
      }
  }

  ////////////////////////////////////// EVENT LISTENERS
  
window.addEventListener("DOMContentLoaded", init);
window.addEventListener("resize", init);
