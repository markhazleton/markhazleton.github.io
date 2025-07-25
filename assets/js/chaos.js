// 🚀 CHAOS MODE JAVASCRIPT - PREPARE FOR MAYHEM! 🚀

// Matrix Rain Effect
class MatrixRain {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'matrix-canvas';
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);
    
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());
    
    this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
    this.fontSize = 14;
    this.columns = this.canvas.width / this.fontSize;
    this.drops = [];
    
    for (let i = 0; i < this.columns; i++) {
      this.drops[i] = 1;
    }
    
    this.animate();
  }
  
  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  
  animate() {
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.ctx.fillStyle = '#00ff00';
    this.ctx.font = this.fontSize + 'px monospace';
    
    for (let i = 0; i < this.drops.length; i++) {
      const text = this.chars[Math.floor(Math.random() * this.chars.length)];
      this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);
      
      if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }
      this.drops[i]++;
    }
    
    requestAnimationFrame(() => this.animate());
  }
}

// Visitor Counter with spinning numbers
class VisitorCounter {
  constructor() {
    this.count = this.getVisitorCount();
    this.element = document.querySelector('.visitor-count');
    if (this.element) {
      this.animateCounter();
    }
  }
  
  getVisitorCount() {
    let count = localStorage.getItem('chaosVisitorCount');
    if (!count) {
      count = Math.floor(Math.random() * 999999) + 100000; // Start with a "cool" number
    } else {
      count = parseInt(count) + 1;
    }
    localStorage.setItem('chaosVisitorCount', count.toString());
    return count;
  }
  
  animateCounter() {
    let currentCount = 0;
    const increment = this.count / 50;
    
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= this.count) {
        currentCount = this.count;
        clearInterval(timer);
      }
      this.element.textContent = Math.floor(currentCount).toLocaleString();
    }, 50);
  }
}

// Random Chaos Effects
class ChaosEngine {
  constructor() {
    this.initializeChaos();
    this.startRandomEffects();
  }
  
  initializeChaos() {
    // Add sparkles to random text
    this.addSparkles();
    
    // Random rotation to cards
    document.querySelectorAll('.card').forEach((card, index) => {
      card.classList.add(`rotate-${(index % 4) + 1}`);
    });
    
    // Add glitch effect to random elements
    this.addGlitchEffect();
  }
  
  addSparkles() {
    const sparkleChars = ['✨', '🌟', '⭐', '💫', '🎆', '🎇'];
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
    
    textElements.forEach(element => {
      if (Math.random() > 0.7) {
        const sparkle = document.createElement('span');
        sparkle.className = 'sparkle';
        sparkle.textContent = sparkleChars[Math.floor(Math.random() * sparkleChars.length)];
        element.appendChild(sparkle);
      }
    });
  }
  
  addGlitchEffect() {
    const elements = document.querySelectorAll('h1, h2, .site-title');
    elements.forEach(element => {
      if (Math.random() > 0.5) {
        element.classList.add('glitch');
      }
    });
  }
  
  startRandomEffects() {
    // Random screen shake
    setInterval(() => {
      if (Math.random() > 0.95) {
        document.body.style.animation = 'shake 0.5s';
        setTimeout(() => {
          document.body.style.animation = '';
        }, 500);
      }
    }, 2000);
    
    // Random color changes
    setInterval(() => {
      const elements = document.querySelectorAll('.btn, .card');
      elements.forEach(element => {
        if (Math.random() > 0.8) {
          const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd'];
          element.style.borderColor = colors[Math.floor(Math.random() * colors.length)];
        }
      });
    }, 3000);
  }
}

// Konami Code for EXTRA CHAOS
class KonamiCode {
  constructor() {
    this.sequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // UP UP DOWN DOWN LEFT RIGHT LEFT RIGHT B A
    this.userInput = [];
    document.addEventListener('keydown', (e) => this.handleKeyPress(e));
  }
  
  handleKeyPress(e) {
    this.userInput.push(e.keyCode);
    if (this.userInput.length > this.sequence.length) {
      this.userInput.shift();
    }
    
    if (this.arraysEqual(this.userInput, this.sequence)) {
      this.activateUltraChaos();
    }
  }
  
  arraysEqual(a, b) {
    return a.length === b.length && a.every((val, i) => val === b[i]);
  }
  
  activateUltraChaos() {
    alert('🚀 ULTRA CHAOS MODE ACTIVATED! 🚀');
    
    // Make EVERYTHING rainbow and bouncy
    document.querySelectorAll('*').forEach(element => {
      element.style.animation = 'rainbow 0.5s linear infinite, bounce 1s ease-in-out infinite';
    });
    
    // Add more matrix rain
    for (let i = 0; i < 3; i++) {
      setTimeout(() => new MatrixRain(), i * 1000);
    }
    
    // Play celebration sound (if audio is enabled)
    this.playBitcoinSound();
  }
  
  playBitcoinSound() {
    // Create a simple beep sound
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'square';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 1);
  }
}

// Initialize all the chaos when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 CHAOS MODE INITIALIZING... 🚀');
  
  // Start Matrix rain
  new MatrixRain();
  
  // Initialize visitor counter
  new VisitorCounter();
  
  // Start chaos engine
  new ChaosEngine();
  
  // Activate Konami code
  new KonamiCode();
  
  // Add some console messages for fun
  console.log('%c💫 Welcome to the Matrix, Neo! 💫', 'color: #00ff00; font-size: 20px; font-weight: bold;');
  console.log('%c🌈 Try the Konami Code for ULTRA CHAOS! 🌈', 'color: #ff00ff; font-size: 16px;');
  console.log('%c⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️BA', 'color: #ffff00; font-size: 14px;');
  
  console.log('🎮 CHAOS MODE FULLY ACTIVATED! 🎮');
});
