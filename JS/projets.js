const projets = {
    scrabble: {
        title: "Scrabble 2 Joueurs",
        techs: ["C#", "XAML", "SQL/MySQL", "API"],
        description: "Un projet de jeu Scrabble en C# avec interface WPF, permettant à deux joueurs de s’affronter et sauvegarder leurs scores dans une base de données."
    },
    multiburo: {
        title: "Multiburo",
        techs: ["HTML", "CSS", "JS", "PHP", "SQL/MySQL"],
        description: "Une application web simulant la gestion d’espaces de coworking avec authentification, gestion de réservations et base de données MySQL."
    },
    cooknco: {
        title: "Cooknco",
        techs: ["HTML", "CSS", "JS", "PHP", "SQL/MySQL"],
        description: "Un site collaboratif de recettes où les utilisateurs peuvent partager, noter et commenter des plats."
    }
};

function Projet(name) {
    const projet = projets[name];
    const container = document.getElementById("project-content");

    if (!projet) {
        container.innerHTML = "<p>Projet introuvable.</p>";
        return;
    }

    container.innerHTML = `
        <div id="rouge"><p>${projet.title}</p></div>
        <p>${projet.description}</p>
        <ul>${projet.techs.map(t => `<li>${t}</li>`).join("")}</ul>
    `;
}

window.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash.substring(1); // enlève le hashtag
    if (hash && projets[hash]) {
        Projet(hash);
    }
});
