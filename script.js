const contentData = {
    quant: {
        title: "Quantitative Trading",
        content: `Founded Triton Quantitative Trading club with 250+ members
                  Designed student-run course on Quantitative Finance
                  US national top 8 finalist in WorldQuant Championship`
    },
    ml: {
        title: "Time Series Analysis",
        content: `Core expertise connecting all domains
                  Implemented predictive models for El-Niño
                  Developed spatiotemporal clustering algorithms`
    },
    time: {
        title: "Time Series Analysis",
        content: `Core expertise connecting all domains
                  Implemented predictive models for El-Niño
                  Developed spatiotemporal clustering algorithms`
    }
    // Add other sections similarly
};

// Scroll smoothly to section when clicking a matrix cell
document.querySelectorAll('.matrix-cell').forEach(cell => {
    cell.addEventListener('click', () => {
        const category = cell.getAttribute('data-category');
        const section = document.getElementById(`${category}-section`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


// Add cursor effect
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Modified click handler
document.querySelectorAll('.matrix-cell').forEach(cell => {
    cell.addEventListener('click', () => {
        const category = cell.getAttribute('data-category');
        const section = document.getElementById(category + '-section');
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

function closeDisplay() {
    document.getElementById('content-display').classList.add('hidden');
}