<html>
    <head>
        <title>Portfolio - Rafael Faquir De Moura</title>
        <meta charset="UTF-8">
        <link href="./css/model.css" rel="stylesheet" type="text/css" media="screen">
        <script src="./js/header.js"></script>
        <script src="./js/projets.js" defer></script>
        <?php include_once "./php/function.inc.php"; ?>
    </head>
    <body>
        <?php headery('projets'); ?>

        <div class="intro">
            <h1>Mes Projets</h1>
            <h6>Que j'ai fait pendant le BTS</h6>
        </div>

        <div class="marge">
            <div id="rouge"><p>Projets Scolaires</p></div>
            <button class="bouton2" onclick="Projet('scrabble')">Scrabble</button>
            <button class="bouton2" onclick="Projet('multiburo')">Multiburo</button>
            <button class="bouton2" onclick="Projet('cooknco')">Cooknco</button>
        </div>

        <div id="project-content" class="marge">
            <p>Cliquez sur un projet pour afficher sa description.</p>
        </div>
        <?php footer(); ?>
    </body>
</html>
