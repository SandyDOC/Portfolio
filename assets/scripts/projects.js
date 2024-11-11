// Fonction pour afficher les données des projets
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
            projectElement.href = `https://github.com/SandyDOC/${project.link}/`;
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
            // Affichage des compétences et technologies (hover, desktop)
            // Mise à jour des compétences (skills)
            const competencesList = projectElement.querySelector('.competences_list');
            if (competencesList) {
                competencesList.innerHTML = '';

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

            // Mise à jour des technologies 
            const technologiesList = projectElement.querySelector('.technologies_list');
            if (technologiesList) {
                technologiesList.innerHTML = ''; 

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

