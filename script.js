document.addEventListener('DOMContentLoaded', () => {

    // Set generated images if they exist
    // Check if the HTML elements exist before setting styles to prevent errors
    const heroBg = document.getElementById('hero-bg-container');
    if (heroBg) {
        // Path matches the generated artifact path
        heroBg.style.backgroundImage = "url('../hero_bg_1772132979699.png')";

        // Fallback styling if image fails to load
        heroBg.style.backgroundColor = "#111";
    }

    const chefImg = document.getElementById('chef-img');
    if (chefImg) {
        chefImg.src = "../chef_cooking_1772133651193.png";
    }

    const dishImg = document.getElementById('dish-img');
    if (dishImg) {
        // Since the dish image generation previously failed, we'll assign it here. 
        // We are retrying generation in the current task. 
        // We will assume it gets generated as signature_dish.png
        // In a real scenario you would dynamically get the actual output name or supply a placeholder.
        // For now, assigning a relative path for when it succeeds.
        dishImg.src = "../signature_dish_1772133929023.png";
        dishImg.alt = "Signature Dish";

        // Error handling fallback for image
        dishImg.onerror = function () {
            this.src = "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
        };
    }

    // --- Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle ---
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const mobileMenu = document.querySelector('.mobile-menu-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

    if (menuBtn && closeBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });

        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100; // Trigger point

        revealElements.forEach(element => {
            const revealTop = element.getBoundingClientRect().top;

            if (revealTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    };

    // Initial check on load
    revealOnScroll();

    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);

    // --- Form Submission Prevention (for demo) ---
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = bookingForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;

            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';
            btn.style.opacity = '0.8';

            setTimeout(() => {
                btn.innerHTML = 'Reservation Confirmed!';
                btn.style.backgroundColor = '#4caf50'; // Success green
                btn.style.color = '#fff';

                // Reset form
                setTimeout(() => {
                    bookingForm.reset();
                    btn.innerHTML = originalText;
                    btn.style.backgroundColor = '';
                    btn.style.color = '';
                    btn.style.opacity = '1';
                }, 3000);
            }, 1500);
        });
    }
});

