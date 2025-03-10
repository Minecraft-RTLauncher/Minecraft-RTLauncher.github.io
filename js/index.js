// 移动端菜单切换
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// 轮播暂停控制
const carousel = document.querySelector('.team-track');
carousel.addEventListener('mouseenter', () => {
  carousel.style.animationPlayState = 'paused';
});
carousel.addEventListener('mouseleave', () => {
  carousel.style.animationPlayState = 'running';
});

// 动态光效
document.querySelectorAll('.feature-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  });
});

//GitHub
function github() {
    window.location.href = "https://github.com/Minecraft-RTLauncher/RTLauncher";
}