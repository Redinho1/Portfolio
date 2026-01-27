// Fonction pour générer le Header
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

let lastScroll = 0;
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll) {
        // Scroll vers le bas → cache le header
        header.style.top = '-80px';
    } else {
        // Scroll vers le haut → montre le header
        header.style.top = '0';
    }
    lastScroll = currentScroll;
});

function createHeader(currentPage = "") {
    const headerContainer = document.getElementById('headery');
    if (!headerContainer) return;

    // Helper pour le style du bouton actif
    const activeStyle = 'style="pointer-events:none; background-color:#612e2e; opacity:0.6;"';

    headerContainer.innerHTML = `
    <header>
        <div class="nav">
            <p>PORTFOLIO - RAFAEL FAQUIR DE MOURA</p>

            <a href="index.html" class="bouton" ${currentPage === 'index' ? activeStyle : ''}>
                Accueil
            </a>

            <a href="presentation.html" class="bouton" ${currentPage === 'presentation' ? activeStyle : ''}>
                Présentation
            </a>

            <a href="stages.html" class="bouton" ${currentPage === 'stages' ? activeStyle : ''}>
                Stages
            </a>

            <a href="projets.html" class="bouton" ${currentPage === 'projets' ? activeStyle : ''}>
                Projets
            </a>
        </div>
    </header>`;
}

// Fonction pour générer le Footer
function createFooter() {
    const footerContainer = document.getElementById('footery');
    if (!footerContainer) return;

    footerContainer.innerHTML = `
    <footer>
        <div class="footer-left">
            <img src="css/img/moi.jpg" alt="Photo de Rafael" />
            <h2>Rafael<br>Faquir De Moura</h2>
        </div>

        <div class="footer-right">
            <h2>Contact</h2>
            <p>+33 07 69 30 45 88</p>
            <p>18, Rue Gabriel Péri</p>
            <p>rafaelfaquirmoura@gmail.com</p>

            <div class="footer-icons">
                <a href="https://www.linkedin.com/in/rafael-faquir-de-moura-1a8551301/" target="_blank" aria-label="LinkedIn">
                    <img src="css/img/1linkedin.png" alt="LinkedIn" />
                </a>
                <a href="https://github.com/RafaelDMoura" target="_blank" aria-label="GitHub">
                    <img src="css/img/2github.png" alt="GitHub" />
                </a>
            </div>
        </div>
    </footer>`;
}