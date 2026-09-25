document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '15px 0';
        }
    });

    // Mobile menu toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    // We would typically toggle a class here to show/hide the menu on mobile
    // For now it's a placeholder as the design mainly shows desktop
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            alert('Menú móvil (Para implementar según diseño específico móvil)');
        });
    }
});
