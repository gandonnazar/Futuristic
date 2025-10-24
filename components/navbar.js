// Global Navbar Component
class GlobalNavbar {
    constructor() {
        this.init();
    }

    init() {
        this.createNavbar();
        this.setActiveLink();
    }

    createNavbar() {
        const navbarHTML = `
            <nav class="navbar">
                <div class="logo">
                    <a href="index.html">NEONLIGHTS AI</a>
                </div>
                <ul class="nav-links">
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="image.html">IMAGE GEN</a></li>
                    <li><a href="video.html">VIDEO GEN</a></li>
                    <li><a href="upscale.html">UPSCALE</a></li>
                    <li><a href="gallery.html">GALLERY</a></li>
                    <li><a href="pricing.html">PRICING</a></li>
                    <li><a href="profile.html">PROFILE</a></li>
                </ul>
                <div class="auth-section">
                    <a href="#" class="auth-btn">Sign Up</a>
                    <a href="#" class="auth-btn">Log In</a>
                    <div class="profile-avatar">
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9InVybCgjZ3JhZGllbnQwKSIvPgo8cGF0aCBkPSJNMTYgOEMxMy4zNDkgOCAxMS4yIDEwLjE0OSAxMS4yIDEyLjhDMTEuMiAxNS40NTEgMTMuMzQ5IDE3LjYgMTYgMTcuNkMxOC42NTEgMTcuNiAyMC44IDE1LjQ1MSAyMC44IDEyLjhDMjAuOCAxMC4xNDkgMTguNjUxIDggMTYgOFoiIGZpbGw9IiMwMGZmZmYiLz4KPHBhdGggZD0iTTE2IDE5LjJDMTEuNTgyIDE5LjIgOCAyMi43ODIgOCAyNy4ySDI0QzI0IDIyLjc4MiAyMC40MTggMTkuMiAxNiAxOS4yWiIgZmlsbD0iIzAwZmZmZiIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudDAiIHgxPSIwIiB5MT0iMCIgeDI9IjMyIiB5Mj0iMzIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzAwZmZmZiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZjAwZmYiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K" alt="Profile" />
                    </div>
                </div>
            </nav>
        `;

        // Insert navbar at the beginning of body
        document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    }

    setActiveLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-links a');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            }
        });
    }
}

// Initialize navbar when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new GlobalNavbar();
});