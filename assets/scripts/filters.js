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
    const dropdownItems = dropdownList.querySelectorAll('li');
    const dropdownArrow = document.getElementById('dropdownArrow');
    const buttonText = dropdownButton.querySelector('.button-text');
    let focusedItemIndex = -1;

    // Ajout des attributs ARIA pour l'accessibilité
    dropdownButton.setAttribute('aria-haspopup', 'listbox');
    dropdownButton.setAttribute('aria-expanded', 'false');
    dropdownList.setAttribute('role', 'listbox');

    dropdownItems.forEach(item => {
        item.setAttribute('role', 'option');
        item.setAttribute('tabindex', '-1'); // Focusable uniquement quand la liste est ouverte
    });

    // Fonction pour ouvrir/fermer la liste déroulante
    function toggleDropdown() {
        const isOpen = dropdownList.classList.toggle('hide');
        dropdownArrow.classList.toggle('rotate');
        dropdownButton.setAttribute('aria-expanded', !isOpen);
        if (!isOpen) {
            focusedItemIndex = 0;
            dropdownItems[focusedItemIndex].focus(); // Focus sur le premier élément
        } else {
            focusedItemIndex = -1;
        }
    }

    // Ferme la liste si on clique à l'extérieur
    function closeDropdownOnClickOutside(event) {
        if (!dropdownButton.contains(event.target) && !dropdownList.contains(event.target)) {
            dropdownList.classList.add('hide');
            dropdownArrow.classList.remove('rotate');
            dropdownButton.setAttribute('aria-expanded', 'false');
            document.removeEventListener('click', closeDropdownOnClickOutside);
        }
    }

    // Gestion du clic sur le bouton pour afficher/masquer la liste
    dropdownButton.addEventListener('click', function(event) {
        toggleDropdown();
        if (!dropdownList.classList.contains('hide')) {
            document.addEventListener('click', closeDropdownOnClickOutside);
        }
    });

    // Gérer la navigation au clavier dans la liste
    dropdownButton.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleDropdown();
        } else if (event.key === 'ArrowDown' && !dropdownList.classList.contains('hide')) {
            event.preventDefault();
            focusedItemIndex = (focusedItemIndex + 1) % dropdownItems.length;
            dropdownItems[focusedItemIndex].focus();
        }
    });

    dropdownList.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            focusedItemIndex = (focusedItemIndex + 1) % dropdownItems.length;
            dropdownItems[focusedItemIndex].focus();
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            focusedItemIndex = (focusedItemIndex - 1 + dropdownItems.length) % dropdownItems.length;
            dropdownItems[focusedItemIndex].focus();
        } else if (event.key === 'Enter') {
            event.preventDefault();
            const selectedItem = dropdownItems[focusedItemIndex];
            selectCategory(selectedItem); // Sélectionne l'élément actif
        } else if (event.key === 'Escape') {
            event.preventDefault();
            dropdownList.classList.add('hide');
            dropdownArrow.classList.remove('rotate');
            dropdownButton.setAttribute('aria-expanded', 'false');
            dropdownButton.focus();
        }
    });

    // Gestion du clic sur un élément de la liste pour changer la sélection
    dropdownList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            selectCategory(event.target);
        }
    });

    // Fonction pour sélectionner une catégorie
    function selectCategory(item) {
        const selectedCategory = item.textContent;
        buttonText.textContent = selectedCategory;
        dropdownButton.setAttribute('data-category', item.getAttribute('data-category'));
        dropdownList.classList.add('hide');
        dropdownArrow.classList.remove('rotate');
        dropdownButton.setAttribute('aria-expanded', 'false');
        dropdownButton.focus(); // Ramène le focus sur le bouton après sélection
        filterProjects(item.getAttribute('data-category')); // Appel à la fonction de filtrage
    }

    // Fonction pour filtrer les projets en fonction de la catégorie sélectionnée
    function filterProjects(category) {
        const projects = document.querySelectorAll('.project'); // Remplacez '.project' par la classe de vos projets
        projects.forEach(project => {
            // Remplacez cette condition par la logique de filtrage qui convient à votre cas
            if (project.getAttribute('data-category') === category || category === '0') { // '0' pour "Tous"
                project.style.display = ''; // Affiche le projet
            } else {
                project.style.display = 'none'; // Cache le projet
            }
        });
    }
}

// function dropdownFilters() {
//     const dropdownButton = document.getElementById('categoryDropdownButton');
//     const dropdownList = document.getElementById('categoryDropdownList');
//     const dropdownArrow = document.getElementById('dropdownArrow'); // Sélection de l'icône FontAwesome
//     const buttonText = dropdownButton.querySelector('.button-text'); // Texte du bouton

//     // Fonction pour ouvrir/fermer la liste déroulante
//     function toggleDropdown() {
//         dropdownList.classList.toggle('hide');
//         dropdownArrow.classList.toggle('rotate'); // Fait pivoter la flèche
//     }

//     // Fonction pour fermer la liste si on clique à l'extérieur
//     function closeDropdownOnClickOutside(event) {
//         if (!dropdownButton.contains(event.target) && !dropdownList.contains(event.target)) {
//             dropdownList.classList.add('hide'); // Ferme la liste
//             dropdownArrow.classList.remove('rotate'); // Remet la flèche dans sa position d'origine
//             document.removeEventListener('click', closeDropdownOnClickOutside); // Supprime l'écouteur d'événements
//         }
//     }

//     // Gestion du clic sur le bouton pour afficher/masquer la liste
//     dropdownButton.addEventListener('click', function(event) {
//         toggleDropdown(); // Ouvre/ferme la liste

//         // Ajoute un écouteur pour fermer la liste si on clique à l'extérieur
//         if (!dropdownList.classList.contains('hide')) {
//             document.addEventListener('click', closeDropdownOnClickOutside);
//         }
//     });

//     // Gestion du clic sur un élément de la liste pour changer la sélection
//     dropdownList.addEventListener('click', function(event) {
//         if (event.target.tagName === 'LI') {
//             const selectedCategory = event.target.textContent;
//             buttonText.textContent = selectedCategory; // Met à jour le texte du bouton
//             dropdownButton.setAttribute('data-category', event.target.getAttribute('data-category')); // Met à jour l'attribut data-category
//             dropdownList.classList.add('hide'); // Ferme la liste après sélection
//             dropdownArrow.classList.remove('rotate'); // Remet la flèche dans sa position d'origine
//         }
//     });
// }
