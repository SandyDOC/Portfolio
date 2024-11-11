function initializeFilters() {

    // Fonction pour afficher les projets selon les catégories
    function displayWorksByCategories(categoryId) {
        const projects = document.querySelectorAll('a[data-category]');
        projects.forEach(project => {
            const projectCategories = project.getAttribute('data-category').split(" "); 
            // Si categoryId est 0, afficher tous les projets (catégorie "Tous")
            if (categoryId === 0) {
                project.style.display = 'block'; 
            } else if (projectCategories.includes(String(categoryId))) {
                project.style.display = 'block'; 
            } else {
                project.style.display = 'none';
            }
        });
    }

    // Fonction pour ajouter la classe au bouton cliqué
    function btnSelected(event) {
        const buttons = document.querySelectorAll(".filters-button");
        buttons.forEach(button => {
            button.classList.remove('btn-selected');
        });
        event.target.classList.add('btn-selected');
    }

    // Fonction pour gérer l'événement 'click' des boutons de filtre
    function handleFilterButtonClick(event) {
        const categoryId = Number(event.target.dataset.category);
        displayWorksByCategories(categoryId);
        btnSelected(event);
    }

    // Ajoute l'événement de clic à tous les boutons de filtre
    const filterButtons = document.querySelectorAll(".filters-button");
    filterButtons.forEach(button => {
        button.addEventListener('click', handleFilterButtonClick);
    });
}

/**  Fonction pour la liste déroulante des filtres en version mobile **/
function dropdownFilters() {
    const dropdownButton = document.getElementById('categoryDropdownButton');
    const dropdownList = document.getElementById('categoryDropdownList');
    const dropdownArrow = document.getElementById('dropdownArrow');
    const buttonText = dropdownButton.querySelector('.button-text');

    // Fonction pour ouvrir/fermer la liste déroulante et rotation de la flèche du menu
    function toggleDropdown() {
        dropdownList.classList.toggle('hide');
        dropdownArrow.classList.toggle('rotate');
    }

    // Fonction pour fermer la liste si on clique à l'extérieur
    function closeDropdownOnClickOutside(event) {
        if (!dropdownButton.contains(event.target) && !dropdownList.contains(event.target)) {
            dropdownList.classList.add('hide'); 
            dropdownArrow.classList.remove('rotate'); 
            document.removeEventListener('click', closeDropdownOnClickOutside); 
        }
    }

    // Gestion du clic sur le bouton pour afficher/masquer la liste
    dropdownButton.addEventListener('click', function (event) {
        toggleDropdown(); 
        // Ajoute un écouteur pour fermer la liste si on clique à l'extérieur
        if (!dropdownList.classList.contains('hide')) {
            document.addEventListener('click', closeDropdownOnClickOutside);
        }
    });

    // Fonction pour filtrer les projets par catégorie
    function filterProjectsByCategory(category) {
        const projectElements = document.querySelectorAll('.gallery a'); 
        projectElements.forEach(project => {
            const projectCategory = project.getAttribute('data-category').split(' '); 
            if (category === '0' || projectCategory.includes(category)) {
                project.style.display = 'block'; 
            } else {
                project.style.display = 'none'; 
            }
        });
    }

    // Gestion du clic sur un élément de la liste pour changer la sélection et filtrer
    dropdownList.addEventListener('click', function (event) {
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

