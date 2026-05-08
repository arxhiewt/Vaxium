const animated = document.querySelectorAll('.feature, .server-card, .ac-card, .stat-card');

animated.forEach(card => {

  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-6px)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0px)';
  });

});

console.log(`
=====================================
        VAXIUM CLIENT
=====================================
Version: v1.1.0 ALPHA
Minecraft: 1.19 → 1.21.11
AI-Battler: ENABLED
=====================================
`);
