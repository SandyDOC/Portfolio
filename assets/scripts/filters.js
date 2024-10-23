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

