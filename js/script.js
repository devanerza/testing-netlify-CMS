// Stats Counting Animation
const stats = document.querySelectorAll('.stat-number');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            stats.forEach(stat => {
                const target = parseFloat(stat.getAttribute('data-target'));
                let current = 0;
                const increment = target / 200;
                
                const updateCount = () => {
                    current += increment;
                    if (current < target) {
                        // Use toFixed(0) for whole numbers, toFixed(1) for decimal
                        stat.textContent = (target === 99.9) ? current.toFixed(1) : Math.floor(current);
                        requestAnimationFrame(updateCount);
                    } else {
                        // Final display - use toFixed(0) for whole numbers, toFixed(1) for decimal
                        stat.textContent = (target === 99.9) ? target.toFixed(1) : Math.floor(target);
                        
                        // Add percentage or plus sign based on the target value
                        if (target === 99.9) {
                            stat.textContent += '%';
                        } else if (target === 200) {
                            stat.textContent += '+';
                        } else if (target === 40) {
                            stat.textContent += '%';
                        }
                    }
                };
                
                updateCount();
            });
            
            // Disconnect observer after animation
            observer.disconnect();
        }
    });
}, {
    threshold: 0.5
});

// Observe each stat number
stats.forEach(stat => observer.observe(stat));