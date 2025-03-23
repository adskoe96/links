function createGalaxy() {
    const container = document.getElementById('galaxy-background');
    const starCount = 150;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 3;
        
        if(size < 1) star.className = 'star small';
        else if(size < 2) star.className = 'star medium';
        else star.className = 'star large';

        const x = Math.random() * 100;
        const y = Math.random() * 100;
        star.style.left = x + '%';
        star.style.top = y + '%';
        
        star.style.animationDelay = Math.random() * 10 + 's';
        container.appendChild(star);
    }
}

window.addEventListener('DOMContentLoaded', createGalaxy);