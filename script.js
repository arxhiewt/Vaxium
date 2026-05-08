const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-2px) scale(1.02)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0px) scale(1)';
    });
});

console.log(`
====================================
      VAXIUM CLIENT v1.1.0
====================================
Experimental AI-Battler Loaded
Minecraft 1.19 - 1.21.11
====================================
`);
