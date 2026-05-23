// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add interactive glow effect on mouse move
document.addEventListener('mousemove', (e) => {
    const boxes = document.querySelectorAll('.box');
    
    boxes.forEach(box => {
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const distance = Math.sqrt(x * x + y * y);
        const maxDistance = 300;
        
        if (distance < maxDistance) {
            const intensity = (1 - distance / maxDistance) * 0.3;
            box.style.boxShadow = `
                0 0 40px rgba(124, 58, 237, ${0.4 + intensity}),
                inset 0 0 40px rgba(124, 58, 237, ${0.1 + intensity * 0.5}),
                0 0 ${20 + intensity * 30}px rgba(124, 58, 237, ${0.2 + intensity})
            `;
        }
    });
});

// Reset glow when mouse leaves viewport
document.addEventListener('mouseleave', () => {
    document.querySelectorAll('.box').forEach(box => {
        box.style.boxShadow = '';
    });
});

// Add animation on page load
window.addEventListener('load', () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box, index) => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            box.style.transition = 'all 0.6s ease';
            box.style.opacity = '1';
            box.style.transform = 'translateY(0)';
        }, index * 50);
    });
});

// Add hover animation to skill tags
document.querySelectorAll('.skills-list span').forEach(skill => {
    skill.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    skill.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});
