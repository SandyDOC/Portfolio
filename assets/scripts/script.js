document.addEventListener("DOMContentLoaded", function() {
    updateProjects();
    // Appel de la fonction dans filters.js après le chargement du DOM
    initializeFilters();
});

// // Sélectionne tous les boutons de filtre
// const filterButtons = document.querySelectorAll('.filters-button');
// // Sélectionne tous les projets
// const projects = document.querySelectorAll('.project');

// // Ajoute un événement de clic à chaque bouton
// filterButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         // Récupère la catégorie du bouton
//         // const category = button.textContent.toLowerCase().replace(/ /g, "-");
//         let category = button.textContent.toLowerCase().replace(/ /g, "").replace(/\//g, "");
//         // Si le bouton "Tous" est cliqué, affiche tous les projets
//         if (category === 'tous') {
//             projects.forEach(project => {
//                 project.style.display = 'block';
//             });
//         } else {
//             // Pour chaque projet, affiche uniquement ceux qui correspondent à la catégorie
//             projects.forEach(project => {
//                 if (project.classList.contains(category)) {
//                     project.style.display = 'block';
//                 } else {
//                     project.style.display = 'none';
//                 }
//             });
//         }
//     });
// });

