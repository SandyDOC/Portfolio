function initializeFilters() {
    function btnSelected(event) {
        const buttons = document.querySelectorAll(".filters-button");
        
        // Retirer la classe 'btn-selected' de tous les boutons
        buttons.forEach(button => {
            button.classList.remove('btn-selected');
        });
        
        // Ajouter la classe 'btn-selected' uniquement au bouton cliqué
        event.target.classList.add('btn-selected');
    }

    // Fonction pour afficher les projets selon les catégories
    function displayWorksByCategories(categoryId) {
        const projects = document.querySelectorAll('a[data-category]'); // Sélectionner tous les projets avec data-category

        projects.forEach(project => {
            const projectCategories = project.getAttribute('data-category').split(" "); // Récupérer les catégories du projet sous forme de tableau
            
            // Si categoryId est 0, afficher tous les projets (catégorie "Tous")
            if (categoryId === 0) {
                project.style.display = 'block'; // Afficher tous les projets
            } else if (projectCategories.includes(String(categoryId))) {
                project.style.display = 'block'; // Afficher si la catégorie du projet correspond
            } else {
                project.style.display = 'none'; // Cacher sinon
            }
        });
    }

    // Fonction pour gérer l'événement 'click' des boutons de filtre
    function handleFilterButtonClick(event) {
        // Récupère l'ID de la catégorie depuis l'attribut data-category de l'élément cliqué
        const categoryId = Number(event.target.dataset.category); // Convertir en nombre
        
        // Affiche les travaux filtrés par la catégorie sélectionnée
        displayWorksByCategories(categoryId);
        
        // Gère la sélection du bouton en ajoutant la classe 'btn-selected'
        btnSelected(event);
    }

    // Ajoute l'événement de clic à tous les boutons de filtre
    const filterButtons = document.querySelectorAll(".filters-button");
    filterButtons.forEach(button => {
        button.addEventListener('click', handleFilterButtonClick);
    });
}

function dropdownFilters() {
    const dropdownButton = document.getElementById('categoryDropdownButton');
    const dropdownList = document.getElementById('categoryDropdownList');
    const dropdownArrow = document.getElementById('dropdownArrow'); // Sélection de l'icône FontAwesome
    const buttonText = dropdownButton.querySelector('.button-text'); // Texte du bouton

    // Fonction pour ouvrir/fermer la liste déroulante
    function toggleDropdown() {
        dropdownList.classList.toggle('hide');
        dropdownArrow.classList.toggle('rotate'); // Fait pivoter la flèche
    }

    // Fonction pour fermer la liste si on clique à l'extérieur
    function closeDropdownOnClickOutside(event) {
        if (!dropdownButton.contains(event.target) && !dropdownList.contains(event.target)) {
            dropdownList.classList.add('hide'); // Ferme la liste
            dropdownArrow.classList.remove('rotate'); // Remet la flèche dans sa position d'origine
            document.removeEventListener('click', closeDropdownOnClickOutside); // Supprime l'écouteur d'événements
        }
    }

    // Gestion du clic sur le bouton pour afficher/masquer la liste
    dropdownButton.addEventListener('click', function(event) {
        toggleDropdown(); // Ouvre/ferme la liste

        // Ajoute un écouteur pour fermer la liste si on clique à l'extérieur
        if (!dropdownList.classList.contains('hide')) {
            document.addEventListener('click', closeDropdownOnClickOutside);
        }
    });

    // Fonction pour filtrer les projets par catégorie
    function filterProjectsByCategory(category) {
        const projectElements = document.querySelectorAll('.gallery a'); // Sélectionne tous les projets dans la galerie

        projectElements.forEach(project => {
            const projectCategory = project.getAttribute('data-category').split(' '); // Récupère les catégories du projet
            if (category === '0' || projectCategory.includes(category)) {
                project.style.display = 'block'; // Affiche le projet si la catégorie correspond
            } else {
                project.style.display = 'none'; // Masque le projet sinon
            }
        });
    }

    // Gestion du clic sur un élément de la liste pour changer la sélection et filtrer
    dropdownList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            const selectedCategory = event.target.getAttribute('data-category');
            const selectedText = event.target.textContent;

            // Met à jour le texte et l'attribut data-category du bouton
            buttonText.textContent = selectedText;
            dropdownButton.setAttribute('data-category', selectedCategory);

            // Ferme la liste et remet la flèche dans sa position d'origine
            dropdownList.classList.add('hide');
            dropdownArrow.classList.remove('rotate');

            // Filtre les projets selon la catégorie sélectionnée
            filterProjectsByCategory(selectedCategory);
        }
    });
}

