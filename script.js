/* ═══════════════════════════════════════════════════════════════
   CADmint — Interactive Engine
   Custom cursor, particles, scroll reveals, timeline, counters
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── Loading Screen ───────────────────────────────────────────
  const loadingScreen = document.getElementById('loading-screen');
  window.addEventListener('load', () => {
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
      document.getElementById('navbar').classList.add('visible');
      initRevealObserver();
    }, 2400);
  });

  // ── Custom Cursor ────────────────────────────────────────────
  const cursor = document.getElementById('cursor');
  const cursorTrail = document.getElementById('cursor-trail');
  let mouseX = -100, mouseY = -100;
  let cursorX = -100, cursorY = -100;
  let trailX = -100, trailY = -100;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Hover states
  const hoverTargets = 'a, button, .btn, .feature-card, .problem-card, .persona-card, .scene-card, .magnetic';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverTargets)) {
      cursor.classList.add('hover');
      cursorTrail.classList.add('hover');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverTargets)) {
      cursor.classList.remove('hover');
      cursorTrail.classList.remove('hover');
    }
  });

  function animateCursor() {
    // Smooth follow for main cursor
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

    // Slower follow for trail
    trailX += (mouseX - trailX) * 0.08;
    trailY += (mouseY - trailY) * 0.08;
    cursorTrail.style.left = trailX + 'px';
    cursorTrail.style.top = trailY + 'px';

    requestAnimationFrame(animateCursor);
  }

  // Only animate cursor on non-touch devices
  if (window.matchMedia('(pointer: fine)').matches) {
    animateCursor();
  }

  // ── Particle System ──────────────────────────────────────────
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  const PARTICLE_COUNT = 60;
  const CONNECTION_DISTANCE = 120;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.radius = Math.random() * 1.5 + 0.5;
      this.opacity = Math.random() * 0.3 + 0.1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

      // Subtle mouse attraction
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 200) {
        this.vx += dx * 0.00005;
        this.vy += dy * 0.00005;
      }

      // Dampen velocity
      this.vx *= 0.999;
      this.vy *= 0.999;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(16, 185, 129, ${this.opacity})`;
      ctx.fill();
    }
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECTION_DISTANCE) {
          const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.15;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(16, 185, 129, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    drawConnections();
    requestAnimationFrame(animateParticles);
  }

  resizeCanvas();
  initParticles();
  animateParticles();

  window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
  });

  // ── Scroll Progress Bar ──────────────────────────────────────
  const scrollProgress = document.getElementById('scroll-progress');

  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = percent + '%';
  }

  // ── Navbar Scroll Behavior ───────────────────────────────────
  const navbar = document.getElementById('navbar');
  let lastScrollY = 0;

  function updateNavbar() {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScrollY = scrollY;
  }

  window.addEventListener('scroll', () => {
    updateScrollProgress();
    updateNavbar();
  }, { passive: true });

  // ── Scroll Reveal (IntersectionObserver) ─────────────────────
  function initRevealObserver() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  }

  // ── Timeline Interaction ─────────────────────────────────────
  const sceneData = [
    {
      text: 'A calm space where your idea, your code, and your experiments live side by side without distractions.',
      beats: ['Sketch concepts', 'Play with behaviour', 'Save versions as chapters']
    },
    {
      text: 'Describe what you want and let the system suggest paths, catch mistakes, and keep you moving forward.',
      beats: ['Chat with the AI co-pilot', 'Review suggested circuits', 'Iterate until it feels right']
    },
    {
      text: 'Turn your digital prototype into a physical kit without hunting across ten vendor sites.',
      beats: ['Generate your BOM', 'Compare vendor pricing', 'Order with one click']
    }
  ];

  const sceneCards = document.querySelectorAll('.scene-card');
  const timelineBar = document.getElementById('timeline-bar');
  const sceneDetailText = document.getElementById('scene-detail-text');
  const sceneDetailBeats = document.getElementById('scene-detail-beats');

  function setActiveScene(index) {
    // Update cards
    sceneCards.forEach((card, i) => {
      if (i === index) {
        card.classList.add('active');
        card.querySelector('.scene-card-status').innerHTML = '<span class="scene-card-status-dot"></span>Current focus';
      } else {
        card.classList.remove('active');
        card.querySelector('.scene-card-status').innerHTML = '<span class="scene-card-status-dot"></span>Tap to jump here';
      }
    });

    // Update progress bar
    timelineBar.style.width = ((index + 1) / 3 * 100) + '%';

    // Update detail panel
    const data = sceneData[index];
    sceneDetailText.textContent = data.text;

    // Rebuild beats with staggered animation
    sceneDetailBeats.innerHTML = '';
    data.beats.forEach((beat, i) => {
      const div = document.createElement('div');
      div.className = 'scene-beat';
      div.innerHTML = `<span class="scene-beat-num">0${i + 1}</span><span class="scene-beat-text">${beat}</span>`;
      sceneDetailBeats.appendChild(div);

      // Trigger animation
      setTimeout(() => {
        div.classList.add('visible');
      }, 80 * (i + 1));
    });

    // Re-trigger detail panel animation
    const detail = document.getElementById('scene-detail');
    detail.style.animation = 'none';
    // Force reflow
    void detail.offsetHeight;
    detail.style.animation = 'sceneDetailIn 0.5s var(--ease-out-expo) forwards';
  }

  sceneCards.forEach((card, index) => {
    card.addEventListener('click', () => setActiveScene(index));
  });

  // Auto-cycle scenes
  let sceneCycleInterval;
  let currentAutoScene = 0;

  function startSceneCycle() {
    sceneCycleInterval = setInterval(() => {
      currentAutoScene = (currentAutoScene + 1) % 3;
      setActiveScene(currentAutoScene);
    }, 5000);
  }

  function stopSceneCycle() {
    clearInterval(sceneCycleInterval);
  }

  // Start auto-cycle when timeline is in view
  const timelineSection = document.getElementById('timeline');
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startSceneCycle();
      } else {
        stopSceneCycle();
      }
    });
  }, { threshold: 0.3 });

  timelineObserver.observe(timelineSection);

  // Stop auto-cycle on manual interaction
  sceneCards.forEach((card, index) => {
    card.addEventListener('click', () => {
      stopSceneCycle();
      currentAutoScene = index;
      // Restart after 10s of no interaction
      setTimeout(startSceneCycle, 10000);
    });
  });

  // ── Animated Stat Counters ───────────────────────────────────
  const statNumbers = document.querySelectorAll('.stat-number');

  function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const startTime = performance.now();

    // Special handling for the infinity symbol
    if (target === 0 && suffix === '∞') {
      el.textContent = '∞';
      return;
    }

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out quart
      const easedProgress = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easedProgress * target);

      if (target >= 1000) {
        el.textContent = current.toLocaleString() + suffix;
      } else {
        el.textContent = current + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        if (target >= 1000) {
          el.textContent = target.toLocaleString() + suffix;
        } else {
          el.textContent = target + suffix;
        }
      }
    }

    requestAnimationFrame(update);
  }

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const numbers = entry.target.querySelectorAll('.stat-number');
        numbers.forEach((num, i) => {
          setTimeout(() => animateCounter(num), i * 200);
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.getElementById('stats');
  if (statsSection) {
    statsObserver.observe(statsSection);
  }

  // ── Magnetic Button Effect ───────────────────────────────────
  const magneticBtns = document.querySelectorAll('.magnetic');

  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
      btn.style.transition = 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)';
      setTimeout(() => {
        btn.style.transition = '';
      }, 400);
    });
  });

  // ── Smooth Scroll for Nav Links ──────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ── Card Tilt Effect (Feature Cards) ─────────────────────────
  const tiltCards = document.querySelectorAll('.feature-card, .problem-card');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const tiltX = (y - 0.5) * 6;
      const tiltY = (x - 0.5) * -6;

      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
      card.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
      setTimeout(() => {
        card.style.transition = 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)';
      }, 500);
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'none';
    });
  });

  // ── Parallax Glow Effect ─────────────────────────────────────
  document.addEventListener('mousemove', (e) => {
    const glowElements = document.querySelectorAll('.problem-card-glow');
    glowElements.forEach(glow => {
      const card = glow.parentElement;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(16,185,129,0.08), transparent 70%)`;
    });
  });

  // ── Mobile Menu Toggle ───────────────────────────────────────
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      // Animate hamburger
      const spans = mobileToggle.querySelectorAll('span');
      if (navLinks.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }

  // ── Keyboard Navigation for Timeline ─────────────────────────
  document.addEventListener('keydown', (e) => {
    if (document.activeElement && document.activeElement.classList.contains('scene-card')) {
      const currentIndex = parseInt(document.activeElement.dataset.scene);
      if (e.key === 'ArrowRight' && currentIndex < 2) {
        stopSceneCycle();
        setActiveScene(currentIndex + 1);
        sceneCards[currentIndex + 1].focus();
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        stopSceneCycle();
        setActiveScene(currentIndex - 1);
        sceneCards[currentIndex - 1].focus();
      }
    }
  });

  // ── Section Enter Animations (Staggered) ─────────────────────
  // Add subtle entrance tracking for the hero section
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    // Force initial reveal for hero since it's above fold
    setTimeout(() => {
      const heroReveals = document.querySelectorAll('#hero .reveal');
      heroReveals.forEach((el, i) => {
        setTimeout(() => {
          el.classList.add('revealed');
        }, i * 120);
      });
    }, 2600); // After loading screen dismisses
  }

})();
