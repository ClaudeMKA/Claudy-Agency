const projectsData = [
    {
        "id": 1,
        "title": "TD Screen Monitoring",
        "subtitle": "Affichage Centralisé des Informations Entreprise",
        "image": "./assets/images/td.png",
        "description": "Un système d'écran de surveillance TD qui offre une vision centralisée des informations essentielles de l'entreprise. Permet de suivre en temps réel les contrats en cours, les annonces importantes et d'autres données cruciales pour une meilleure visibilité et une prise de décision efficace."
    },
    {
        "id": 2,
        "title": "Création de Page de Connexion avec Système Drag-and-Drop",
        "subtitle": "Optimisation du Processus de Conception Collaborative",
        "image": "./assets/images/td-login.png",
        "description": "Ce projet vise à développer une page de connexion en utilisant un système de glisser-déposer avancé, offrant une expérience utilisateur intuitive et conviviale. Les composants préconçus facilitent la personnalisation tout en accélérant le processus de développement. Cette solution favorise la collaboration au sein des équipes, permettant une conception agile et une adaptation rapide aux besoins changeants du marché.",
        "video": "./assets/video/td-login.webm"
    },

    {
        "id": 3,
        "title": "Création d'un Site Web pour l'Association Espoir Jeunes",
        "subtitle": "Gestion de Projets de Réunion et Système de Blog Intégré",
        "image": "./assets/images/espoir_jeunes.png",
        "description": "Ce projet consiste à concevoir et développer un site web pour l'Association Espoir Jeunes. Le site comprendra un système de gestion de projets de réunion, facilitant la planification et la coordination des activités. De plus, un système de blog intégré permettra à l'association de partager des actualités, des histoires inspirantes et des informations pertinentes avec sa communauté en ligne.",
        "link": "https://www.espoirjeunes.fr/"
    },
    {
        "id": 4,
        "title": "Création d'un Site Vitrine pour une Application Blockchain",
        "subtitle": "Promotion d'une Innovation Technologique",
        "image": "./assets/images/sunplay.png",
        "description": "Ce projet consiste à concevoir un site vitrine pour mettre en avant une application de blockchain. Le site présente les fonctionnalités et les avantages de l'application de manière attrayante et informative, captivant l'intérêt des visiteurs et suscitant leur confiance dans cette innovation technologique. Visitez le lien pour découvrir le site vitrine.",
        "link": "https://claudemka.github.io/sunplay/index.html"
    },

    {
        "id": 5,
        "title": "Création d'un Site Vitrine pour une Société de Rénovation",
        "subtitle": "Promotion des Services de Rénovation",
        "image": "./assets/images/nk-renovation.png",
        "description": "Ce projet consiste à concevoir un site vitrine pour mettre en valeur les services de rénovation offerts par une société spécialisée. Le site présente de manière attrayante les différents types de rénovations réalisées, les compétences de l'équipe, ainsi que les témoignages de clients satisfaits. Visitez le lien pour découvrir le site vitrine.",
        "link": "https://nkrenovation.fr/"
    },
    {
        "id": 6,
        "title": "Création d'un Site Vitrine pour une Société de Bâtiment",
        "subtitle": "Mise en Avant des Services de Construction",
        "image": "./assets/images/kb-batiment.png",
        "description": "Ce projet consiste à concevoir un site vitrine pour mettre en avant les services de construction proposés par une société spécialisée dans le domaine du bâtiment. Le site présente de manière attrayante les compétences de l'équipe, les réalisations passées et les différents types de projets réalisés. Visitez le lien pour découvrir le site vitrine.",
        "link": "https://kb-batiment.fr/"
    },
    {
        "id": 7,
        "title": "Création d'un Site Vitrine,blog pour l'association adhandeveloppement ",
        "subtitle": "Site blog",
        "image": "./assets/images/adhan.png",
        "description": "Ce projet consiste à concevoir un site vitrine pour l'association Adhan Développement. L'objectif est de mettre en avant les actions humanitaires de l'association en Éthiopie, notamment dans les domaines de l'éducation, de l'accès à l'eau, de la santé, et de l'alimentation. Le site présente les initiatives de l'association, les réalisations passées, et les projets à venir, tout en offrant une plateforme pour le soutien et les dons.",
        "link": "https://adhandeveloppement.org/"
    }

    // Ajoute les données des autres projets ici...
];

// Sélectionne l'élément conteneur des projets
const gridList = document.getElementById('grid-list');

// Boucle à travers les données des projets et génère dynamiquement le contenu HTML
projectsData.forEach((project, index) => {
    // Crée un élément <li> pour chaque projet
    const listItem = document.createElement('li');

    // Structure du contenu HTML pour chaque projet
    listItem.innerHTML = `
    <div class="project-card">
      <figure class="card-banner img-holder" style="--width: 510; --height: 700;">
        <img src="${project.image}" width="510" height="700" loading="lazy" alt="${project.title}" class="img-cover">
      </figure>
      <div class="card-content">
        <p class="card-subtitle">${project.subtitle}</p>
        <h3 class="h3">
          <a href="#" class="card-title">${project.title}</a>
        </h3>
        <a  class="btn btn-primary" data-index="${index + 1}"> Voir plus </a>
      </div>
    </div>
  `;

    // Ajoute le projet à la liste des projets
    gridList.appendChild(listItem);
});

// Récupère la modal et le bouton pour la fermer
const modal = document.getElementById('project-modal');
const closeBtn = document.getElementById('close');

// Récupère les éléments de la modal pour y afficher les détails du projet
// Récupère les éléments de la modal
const modalTitle = document.getElementById('modal-title');
const modalSubtitle = document.getElementById('modal-subtitle');
const modalDescription = document.getElementById('modal-description');
const modalImage = document.getElementById('modal-image');
const modalVideo = document.getElementById('modal-video');
const modalLink = document.getElementById('modal-link');

// Gestionnaire d'événements de clic sur le bouton "Voir plus"
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function() {
        // Récupère l'index du projet dans le tableau projectsData
        const index = parseInt(this.dataset.index);
        // Récupère les données du projet correspondant
        const project = projectsData[index - 1]; // -1 car les index commencent à partir de 0
        // Affiche les détails du projet dans la modal
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        // Affiche le sous-titre s'il existe
        if (project.subtitle) {
            modalSubtitle.textContent = project.subtitle;
            modalSubtitle.style.display = 'block';
        } else {
            modalSubtitle.style.display = 'none';
        }
        // Affiche l'image s'il existe
        if (project.image) {
            modalImage.src = project.image;
            modalImage.alt = project.title;
            modalImage.style.display = 'block';
        } else {
            modalImage.style.display = 'none';
        }
        // Affiche le lien "Voir le projet" s'il existe
        if (project.link) {
            modalLink.href = project.link;
            modalLink.textContent = "Voir le projet";
            modalLink.style.display = 'inline-block';
        } else {
            modalLink.style.display = 'none';
        }
        // Affiche la vidéo s'il existe
        if (project.video) {
            modalVideo.src = project.video;
            modalVideo.style.display = 'block';
        } else {
            modalVideo.style.display = 'none';
        }
        // Affiche la modal
        modal.style.display = 'block';
    });
});


// Gestionnaire d'événements de clic sur le bouton de fermeture de la modal
closeBtn.addEventListener('click', function() {
    console.log('ezaea')
    closeModal();
});

// Gestionnaire d'événements de clic en dehors de la modal pour la fermer
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Fonction pour fermer la modal
function closeModal() {
    modal.style.display = 'none';
}
