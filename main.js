const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');


let stars = [];


function resize() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}


window.addEventListener('resize', resize);
resize();


for (let i = 0; i < 120; i++) {
stars.push({
x: Math.random() * canvas.width,
y: Math.random() * canvas.height,
r: Math.random() * 1.5 + 0.5,
s: Math.random() * 0.3 + 0.1
});
}


function animate() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = '#ffffff';


for (let s of stars) {
ctx.beginPath();
ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
ctx.fill();


s.y += s.s;
if (s.y > canvas.height) s.y = 0;
}


requestAnimationFrame(animate);
}


animate();
