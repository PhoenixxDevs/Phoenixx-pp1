////////////////////////////////////// INIT AND ANIMATE

let WIDTH, HEIGHT;
let running = false;
let particles = []; 
let particlesLength = 0;

function init() {
  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight;
  canvas.width = WIDTH;
  canvas.height = HEIGHT;

  if(!running){ 
    generateParticles(100);
    particlesLength = particles.length;
    animate(); 
    running = true; }
}

function animate() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);

  updateParticles();

  requestAnimationFrame(animate);
}

////////////////////////////////////// PARTICLES AND ANIMATE

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

class Particle {
  constructor(){
    this.size = Math.floor(Math.random()) + 1;
    this.pos = {                    //set position to random place on screen
      x: Math.floor(Math.random() * WIDTH),
      y: Math.floor(Math.random() * HEIGHT)
    };
    this.vel = {                    // velocity to random amount between -1 and 1, two decimal places for performance
      x: (Math.floor(Math.random() * 60) / 100) - 0.3,
      y: (Math.floor(Math.random() * 60) / 100) - 0.3
    };
    this.color = `rgba(255, 255, 255, ${(Math.floor(Math.random() * 40) + 60) / 100})`; // white but with random amount of transparency
    this.remove = false;
  }
  draw(){
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.size, Math.PI * 2, false); // draws a circle
    ctx.fill();
  }
  move(){
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }
  removeOffscreen(){
    if(this.pos.x < -this.size || 
      this.pos.x > WIDTH + this.size ||
      this.pos.y < -this.size || 
      this.pos.x > HEIGHT + this.size ){
        this.remove = true;
      }
  }
  update() {
    this.move();
    this.draw();
  }
}

function generateParticles(amount) {
  for(let i = 0; i < amount; i++) {
    particles.push(new Particle());
  }
}

function updateParticles() {
  for(let i = 0; i < particlesLength; i++){
    particles[i].update();
  }
}

function removeParticle(){
  for(let i = 0; i < particlesLength; i++){
    if(particles[i].remove){
      particles.splice(i, 1); // removes particle at its position in array
      particlesLength = particles.length;
    }
  }
}

////////////////////////////////////// EVENT LISTENERS

window.addEventListener('DOMContentLoaded', init);
window.addEventListener('resize', init);