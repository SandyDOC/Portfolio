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

// function updateProjects() {
//     // Vérifie que dataProjects est bien défini
//     if (!window.dataProjects || window.dataProjects.length === 0) {
//         console.error("dataProjects n'est pas disponible ou est vide");
//         return;
//     }
//     // Sélection de tous les projets dans la galerie
//     const projectElements = document.querySelectorAll('.gallery a');
    
//     // Parcours des projets dans dataProjects et les éléments HTML correspondants
//     dataProjects.forEach((project, index) => {
//         const projectElement = projectElements[index]; // Récupération de l'élément <a> correspondant

//         if (projectElement) {
//             // Mise à jour du lien et du data-category
//             projectElement.href = `https://github.com/SandyDOC/${project.title.replace(/\s+/g, '_')}/`;
//             projectElement.setAttribute('data-category', project["data-category"]);

//             // Sélection des éléments internes à mettre à jour
//             const img = projectElement.querySelector('img.gallery_image');
//             const tagLine = projectElement.querySelector('figure.view_picture span');
//             const title = projectElement.querySelector('h3.project_title');
//             const description = projectElement.querySelector('p.project_description');

//             // Mise à jour des contenus dynamiques
//             if (img) {
//                 img.src = `./assets/images/${project.image}`;
//                 img.alt = `aperçu du projet ${project.title}`;
//             }
//             if (tagLine) {
//                 tagLine.textContent = project.tagLine;
//             }
//             if (title) {
//                 title.textContent = project.title;
//             }
//             if (description) {
//                 description.textContent = project.description;
//             }
//         }
//     });
// }
// projects.js

function updateProjects() {
    // Vérifie si dataProjects existe et contient des données
    if (!window.dataProjects || window.dataProjects.length === 0) {
        console.error("dataProjects n'est pas disponible ou est vide");
        return;
    }

    // Sélectionne tous les éléments de projet dans la galerie
    const projectElements = document.querySelectorAll('.gallery a');

    // Parcours des projets dans dataProjects et mise à jour du contenu HTML
    window.dataProjects.forEach((project, index) => {
        const projectElement = projectElements[index]; // Sélectionne l'élément <a> correspondant

        if (projectElement) {
            // Mise à jour des attributs et contenu existants
            projectElement.href = `https://github.com/SandyDOC/${project.link.replace(/\s+/g, '_')}/`;
            projectElement.setAttribute('data-category', project["data-category"]);

            const img = projectElement.querySelector('img.gallery_image');
            const tagLine = projectElement.querySelector('figure.view_picture span');
            const title = projectElement.querySelector('h3.project_title');
            const description = projectElement.querySelector('p.project_description');

            if (img) {
                img.src = `./assets/images/${project.image}`;
                img.alt = `Aperçu du projet ${project.title}`;
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

            // Mise à jour des compétences (skills)
            const competencesList = projectElement.querySelector('.competences_list');
            if (competencesList) {
                competencesList.innerHTML = ''; // Vide la liste avant d'ajouter les nouvelles compétences

                if (Array.isArray(project.skills)) {
                    // Si skills est un tableau, crée des éléments <li> pour chaque compétence
                    project.skills.forEach(skill => {
                        const li = document.createElement('li');
                        li.textContent = skill;
                        competencesList.appendChild(li);
                    });
                } else if (typeof project.skills === 'string') {
                    // Si skills est une chaîne de caractères, ajoute un seul élément <li>
                    const li = document.createElement('li');
                    li.textContent = project.skills;
                    competencesList.appendChild(li);
                }
            }

            // Mise à jour des technologies (technologies)
            const technologiesList = projectElement.querySelector('.technologies_list');
            if (technologiesList) {
                technologiesList.innerHTML = ''; // Vide la liste avant d'ajouter les nouvelles technologies

                if (Array.isArray(project.technologies)) {
                    // Si technologies est un tableau, crée des éléments <li> pour chaque technologie
                    project.technologies.forEach(tech => {
                        const li = document.createElement('li');
                        li.textContent = tech;
                        technologiesList.appendChild(li);
                    });
                } else if (typeof project.technologies === 'string') {
                    // Si technologies est une chaîne de caractères, ajoute un seul élément <li>
                    const li = document.createElement('li');
                    li.textContent = project.technologies;
                    technologiesList.appendChild(li);
                }
            }
        }
    });
}

