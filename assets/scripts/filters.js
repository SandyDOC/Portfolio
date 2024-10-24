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

// filters.js
function dropdownFilters() {
    const dropdownButton = document.getElementById("categoryDropdownButton");
    const dropdownList = document.getElementById("categoryDropdownList");
    const categoryItems = dropdownList.querySelectorAll("li");

    // Toggle la visibilité de la liste déroulante au clic
    dropdownButton.addEventListener("click", function () {
        dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
    });

    // Gérer la sélection d'une catégorie
    categoryItems.forEach(item => {
        item.addEventListener("click", function () {
            const selectedCategory = this.getAttribute("data-category");

            // Mettre à jour le texte et le data-category du bouton avec la catégorie sélectionnée
            dropdownButton.textContent = this.textContent;
            dropdownButton.setAttribute('data-category', selectedCategory);

            // Supprimer l'ancienne classe active et ajouter la classe active sur la catégorie sélectionnée
            categoryItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');

            // Fermer la liste déroulante après la sélection
            dropdownList.style.display = 'none';

            // Appliquer le tri par catégorie
            filterProjectsByCategory(selectedCategory);
        });
    });

    // Fonction pour filtrer les projets par catégorie
    function filterProjectsByCategory(category) {
        const projects = document.querySelectorAll('.gallery a');

        // Si "Tous" est sélectionné (data-category="0"), afficher tous les projets
        if (category === "0") {
            projects.forEach(project => project.style.display = "block");
        } else {
            projects.forEach(project => {
                const projectCategories = project.getAttribute('data-category').split(' ');
                // Afficher ou masquer le projet selon la catégorie sélectionnée
                if (projectCategories.includes(category)) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        }
    }
}

// // Exporter la fonction (facultatif, si tu utilises un module bundler comme Webpack)
// export { dropdownFilters };


