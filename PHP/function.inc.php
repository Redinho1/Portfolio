<?php 
function headery($currentPage = "")
{
    ?>
    <header>
        <div class="nav">
            <p>PORTFOLIO - RAFAEL FAQUIR DE MOURA</p>

            <a href="index.php" class="bouton" <?= $currentPage === 'index' ? 'style="pointer-events:none; background-color:#612e2e; opacity:0.6;"' : '' ?>>
                Introduction
            </a>

            <a href="stages.php" class="bouton" <?= $currentPage === 'stages' ? 'style="pointer-events:none; background-color:#612e2e; opacity:0.6;"' : '' ?>>
                Stages
            </a>

            <a href="projets.php" class="bouton" <?= $currentPage === 'projets' ? 'style="pointer-events:none; background-color:#612e2e; opacity:0.6;"' : '' ?>>
                Projets Scolaires
            </a>
        </div>
    </header>
    <?php
}

function footer()
{
    ?>
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
                <a href="https://www.linkedin.com/in/rafael-faquir-de-moura-1a8551301/" aria-label="LinkedIn">
                    <img src="css/img/1linkedin.png" alt="LinkedIn" />
                </a>
                <a href="https://github.com/Redinho1" aria-label="GitHub">
                    <img src="css/img/2github.png" alt="GitHub" />
                </a>
            </div>
        </div>
    </footer>
    <?php
}
?>

