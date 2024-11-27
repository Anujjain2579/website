// Add cursor effect
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Modified click handler
// Scroll smoothly to section when clicking a matrix cell
document.querySelectorAll('.matrix-cell, .matrix-center').forEach(cell => {
    cell.addEventListener('click', () => {
        const targetId = cell.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


function closeDisplay() {
    document.getElementById('content-display').classList.add('hidden');
}