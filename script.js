const hero = document.querySelector('.hero');
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;
  mouseX = x;
  mouseY = y;
});

function animate() {
  const rotateX = mouseY * 10;
  const rotateY = mouseX * 10;
  hero.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  requestAnimationFrame(animate);
}

animate();
