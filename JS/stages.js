const stages = {
    stage1: {
        title: "Access Creed",
        html: `
            <div class="stage-access-creed">
                <h2>C’est quoi Access Creed ?</h2>
                <ul>
                    <li>Une entreprise Freelancer</li>
                    <li>L’entreprise aide à réparer les soucis des ordinateurs de ses clients (dans d’autres entreprises) via du code PowerShell</li>
                    <li>Access Creed fait aussi des délivraisons d’outils (ordinateurs, composants, écrans, etc.)</li>
                    <li>Et bientôt, il aura un site pour guider ses clients qui auront besoin de lui</li>
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
        title: "[STAGE #2]",
        html: `
            <div class="stage-access-creed">
                <h2>Stage #2</h2>
                <ul>
                    <li>Stage prévu pour 5 Janvier 2026 - 13 Février 2026</li>
                    <li>En cours de planification – probablement dans le domaine du développement web.</li>
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
}
