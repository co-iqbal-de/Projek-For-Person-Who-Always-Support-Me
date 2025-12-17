const title = document.querySelector('.title');
const text = 'I Have Something To You'.split('');

// Menambahkan setiap huruf ke dalam elemen .title
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}</span>`;
  } else {
    title.innerHTML += `<span style='margin-right: 20px;'></span>`;
  }
}

// Menambahkan delay animasi acak pada setiap huruf
const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Delay acak antara 0-3 detik
  element.style.animationDelay = `${randomDelay}s`;
});

// Versi Hitam Legam
const canvas = document.getElementById('liveCanvas');
const ctx = canvas.getContext('2d');

// Menyesuaikan Ukuran canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Membuat Partikel Putih
const particles = [];
for (let i = 0; i < 100; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
        color: `rgba(255, 255, 255, ${Math.random()})`,
    });
}

// Membuat Gambaran Partikel
function drawParticle(particle) {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fillStyle = particle.color;
    ctx.fill();
}

// Membuat posisi partikel diperbarui terus
function updateParticle(particle) {
    particle.x += particle.speedX;
    particle.y += particle.speedY;

    // Jika partikel keluar dari layar maka kembali ke layar
    if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
    if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
}

// Mengulang animasi 
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => {
        drawParticle(particle);
        updateParticle(particle);
    });
    requestAnimationFrame(animate);
}

animate();