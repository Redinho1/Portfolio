<html>
    <head>
        <title>Portfolio - Rafael Faquir De Moura</title>
        <meta charset="UTF-8">
        <link href="./css/model.css" rel="stylesheet" type="text/css" media="screen">
        <script src="./js/header.js"></script>
        <script src="./js/stages.js" defer></script>
        <?php include_once "./php/function.inc.php"; ?>
    </head>
    <body>
        <?php headery('stages'); ?>

        <div class="intro">
            <h1>Mes Stages</h1>
            <h6>Durant le BTS SIO</h6>
        </div>

        <div class="marge">
            <div id="rouge"><p>Stages</p></div>
            <button class="bouton2" onclick="Stage('stage1')">Stage 1 - Access Creed</button>
            <button class="bouton2" onclick="Stage('stage2')">Stage 2 - [STAGE #2]</button>
        </div>

        <div id="stage-content" class="marge">
            <p>Cliquez sur un stage pour afficher les détails.</p>
        </div>
        <?php footer(); ?>
    </body>
</html>
