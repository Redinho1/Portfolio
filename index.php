<html>
<head>
    <title>Portfolio - Rafael Faquir De Moura</title>
    <meta charset="UTF-8">
    <link href="./css/model.css" rel="stylesheet" type="text/css" media="screen">
    <script src="./js/header.js"></script>
    <?php include_once "./php/function.inc.php"; ?>
</head>
<body>
    <?php headery('index'); ?>

    <div class="intro">
        <h3>Développeur / Programmeur</h3>
        <h1>Bienvenue dans mon Portfolio !</h1>
        <h2>Ravi de vous enchanter !</h2>
    </div>

    <div class="marge">
        <div id="rouge"><p>Présentation</p></div>
        <div><p>Je suis un étudiant de BTS SIO SLAM, passionné par le développement web, logiciel et les bases de données.</p></div>
    </div>

    <div class="marge">
        <div id="rouge"><p>Formation Scolaire</p></div>
        <div>
            <p>BTS SIO SLAM (Services Informatiques aux Organisations - Solutions Logicielles et Applications Métiers) (2024 - 2026)</p>
            <ul>
                <li>Lycée Ella Fitzgerald</li>
                <li>Saint-Romain-en-Gal</li>
                <li>BAC+2</li>
            </ul>
        </div>
        <div>
            <p>Année Général Spécialité NSI (Numérique et sciences informatiques) et AMC (Anglais Monde Contemporain) (2021-2024)</p>
            <ul>
                <li>Lycée Polyvalent Aragon-Picasso</li>
                <li>Givors</li>
                <li>BAC Général</li>
            </ul>
        </div>
    </div>

    <div class="marge">
        <div id="rouge"><p>Stage d'Entreprise</p></div>
        <div><p>Access Creed (19 Mai 2025 - 27 Juin 2025)</p></div>
        <div><button class="bouton2" onclick="window.location.href='stages.php#stage1'">En savoir plus sur Access Creed</button></div>
        <div><p>[STAGE #2] (5 Janvier 2026 - 13 Février 2026)</p></div>
        <div><button class="bouton2" onclick="window.location.href='stages.php#stage2'">En savoir plus sur [STAGE #2]</button></div>
    </div>

    <div class="marge">
        <div id="rouge"><p>Projets Scolaires</p></div>
        <div><p>Scrabble 2 Joueurs (BTS SIO 2024-2026)</p></div>
        <div><button class="bouton2" onclick="window.location.href='projets.php#scrabble'">En savoir plus sur Scrabble</button></div>
        <div><p>Multiburo (BTS SIO 2024-2026)</p></div>
        <div><button class="bouton2" onclick="window.location.href='projets.php#multiburo'">En savoir plus sur Multiburo</button></div>
        <div><p>Cooknco (BTS SIO 2025-2026)</p></div>
        <div><button class="bouton2" onclick="window.location.href='projets.php#cooknco'">En savoir plus sur Cooknco</button></div>
    </div>

    <?php footer(); ?>
</body>
</html>
