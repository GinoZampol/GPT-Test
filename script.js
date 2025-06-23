const canvas = document.getElementById('mesh');
const ctx = canvas.getContext('2d');
let width, height;
function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();
const dots = Array.from({length: 50}, () => ({
  x: Math.random() * width,
  y: Math.random() * height,
  radius: Math.random() * 4 + 2,
  dx: (Math.random() - 0.5) * 2,
  dy: (Math.random() - 0.5) * 2
}));
function draw() {
  ctx.clearRect(0, 0, width, height);
  dots.forEach(dot => {
    dot.x += dot.dx;
    dot.y += dot.dy;
    if (dot.x < 0 || dot.x > width) dot.dx *= -1;
    if (dot.y < 0 || dot.y > height) dot.dy *= -1;
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.fill();
  });
  requestAnimationFrame(draw);
}
draw();
const hero = document.querySelector('.hero');
hero.addEventListener('mousemove', e => {
  const { offsetX: x, offsetY: y } = e;
  const rotateX = (y / hero.offsetHeight - 0.5) * 10;
  const rotateY = (x / hero.offsetWidth - 0.5) * -10;
  hero.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
hero.addEventListener('mouseleave', () => {
  hero.style.transform = 'rotateX(0) rotateY(0)';
});
