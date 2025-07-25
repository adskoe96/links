function createBubbles() {
    const container = document.getElementById('bubble-background');
    const bubbleCount = 35;

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        const size = Math.random() * 60 + 20;
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        
        const colors = [
            'rgba(173, 216, 230, 0.9)',   // Light Blue
            'rgba(144, 238, 144, 0.8)',   // Light Green
            'rgba(224, 255, 255, 0.8)',   // Light Cyan
            'rgba(255, 250, 205, 0.8)'    // Light Yellow
        ];
        bubble.style.background = `radial-gradient(circle at 30% 30%, 
            ${colors[Math.floor(Math.random() * colors.length)]}, 
            rgba(255, 255, 255, 0.4))`;
        
        bubble.innerHTML = '<div class="bubble-highlight"></div>';
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        bubble.style.left = x + '%';
        bubble.style.top = y + '%';
        
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 8;
        
        bubble.style.animation = `
            float ${duration}s ease-in-out ${delay}s infinite,
            fadeInOut ${duration/2}s ease-in-out ${delay}s infinite alternate
        `;

        container.appendChild(bubble);
    }
}

window.addEventListener('DOMContentLoaded', createBubbles);