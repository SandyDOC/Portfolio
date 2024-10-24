// const dataProjects = [
//     {
//         "data-category": "1",
//         "image": "riding-cities.png",
//         "tagLine": "html/css",
//         "title": "Riding Cities",
//         "description": "Site statique d'une association sportive de skate en région"
//     },
//     {
//         "data-category": "1 2",
//         "image": "booki.png",
//         "tagLine": "responsive",
//         "title": "Booki",
//         "description": "Site statique d'une agence de voyage"
//     }
// ];

function updateProjects() {
    // Vérifie que dataProjects est bien défini
    if (!window.dataProjects || window.dataProjects.length === 0) {
        console.error("dataProjects n'est pas disponible ou est vide");
        return;
    }
    // Sélection de tous les projets dans la galerie
    const projectElements = document.querySelectorAll('.gallery a');
    
    // Parcours des projets dans dataProjects et les éléments HTML correspondants
    dataProjects.forEach((project, index) => {
        const projectElement = projectElements[index]; // Récupération de l'élément <a> correspondant

        if (projectElement) {
            // Mise à jour du lien et du data-category
            projectElement.href = `https://github.com/SandyDOC/${project.title.replace(/\s+/g, '_')}/`;
            projectElement.setAttribute('data-category', project["data-category"]);

            // Sélection des éléments internes à mettre à jour
            const img = projectElement.querySelector('img.gallery_image');
            const tagLine = projectElement.querySelector('figure.view_picture span');
            const title = projectElement.querySelector('h3.project_title');
            const description = projectElement.querySelector('p.project_description');

            // Mise à jour des contenus dynamiques
            if (img) {
                img.src = `./assets/images/${project.image}`;
                img.alt = `aperçu du projet ${project.title}`;
            }
            if (tagLine) {
                tagLine.textContent = project.tagLine;
            }
            if (title) {
                title.textContent = project.title;
            }
            if (description) {
                description.textContent = project.description;
            }
        }
    });
}

// Appel de la fonction pour mettre à jour les projets
// updateProjects();
