
const btn = document.getElementById('colorBtn');
if (!btn) return;

const colors = ['#6CD4FF', '#8C52FF', '#FF6B6B', '#FFB86B', '#7AF0C7', '#C39CFF', '#FFE66D', '#FF8FAB'];

btn.addEventListener('click', () => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = color;
});
