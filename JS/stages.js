const stages = {
    stage1: {
        title: "Access Creed",
        html: `
            <div class="stage" id="access-creed">
                <div class="container-img">
                    <img src="css/img/accesscreed.png" alt="Access Creed" class="img-centre">
                </div>
                <ul>
                    <li>Une entreprise Freelancer</li>
                    <li>L’entreprise aide à réparer les soucis des ordinateurs de ses clients (dans d’autres entreprises) via du code PowerShell</li>
                    <li>Access Creed fait aussi des délivraisons d’outils (ordinateurs, composants, écrans, etc.).</li>
                </ul> <br>
                <h2>J'ai fait quoi dans Access Creed?</h2>
                <p>Du 19 Mai 2025 au 27 Juin 2025, j'ai eu deux projets :</p>
                <ul>
                    <li>La construction du site web (malheureusement incomplet)</li>
                    <li>Un formulaire applicative en C# pour une autre entreprise</li>
                </ul>
                <p>Access Creed est une entreprise de type freelance spécialisée dans la réparation et la livraison de matériel informatique.</p>
                <p>Durant ce stage, j’ai participé à la maintenance d’ordinateurs et à la préparation d’un futur site web vitrine.</p>
            </div>
        `
    },
    stage2: {
        title: "Celeonet",
        html: `
            <div class="stage" id="celeonet">
                <div class="container-img">
                    <img src="css/img/celeonet.png" alt="Celeonet" class="img-centre">
                </div>
                <ul>
                    <li>Une entreprise expert en hébergement créée en 2003.</li>
                    <li>L'entreprise constitue d'une équipe d’experts d’internet et des réseaux.</li>
                    <li>C'est une entreprise qui se répartie sur la région Parisienne et Lyonnaise</li>
                    <li>Pour en savoir plus <a href="https://www.celeonet.fr/societe" target="_blank">cliquer ici</a></li>
                </ul>
            </div>
        `
    }
};


function Stage(name) {
    const stage = stages[name];
    const container = document.getElementById("stage-content");

    if (!stage) {
        container.innerHTML = "<p>Stage introuvable.</p>";
        return;
    }

    container.innerHTML = stage.html;
    window.location.hash = name;
}

window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash && stages[hash]) {
        Stage(hash); 
    }
});
