function github() {
    window.location.href = "https://github.com/Minecraft-RTLauncher/RTLauncher";
}

// 动态计算占位高度
function updateNavPlaceholder() {
    const navbar = document.querySelector('.navbar');
    const placeholder = document.querySelector('.navbar-placeholder');
    if (navbar && placeholder) {
        placeholder.style.height = `${navbar.offsetHeight}px`;
        console.log('Updated navbar placeholder height:', placeholder.style.height);
    }
}

// 响应式监听
window.addEventListener('resize', () => {
    updateNavPlaceholder();
    console.log('Window resized, updating layout...');
});

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    updateNavPlaceholder();
    console.log('Initial navbar height:', document.querySelector('.navbar').offsetHeight);
});

// 按钮交互
document.querySelector('.cta-button').addEventListener('click', () => {
    alert('下载功能即将开放！');
});