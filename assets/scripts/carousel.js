// function projectCarousel() {
//     const carouselInner = document.querySelector('.carousel-inner');
//     const carouselDotsContainer = document.querySelector('.carousel-dots');
//     let currentIndex = 0;

//     // Crée les slides uniquement avec les images
//     window.dataProjects.forEach((project, index) => {
//         const item = document.createElement('div');
//         item.className = 'carousel-item';
//         if (index === 0) {
//             item.classList.add('active'); // Classe active pour la première image
//         }

//         item.innerHTML = `
//             <img src="${project.image}" alt="Slide image ${index + 1}">
//         `;
//         carouselInner.appendChild(item);

//         // Crée un point pour chaque slide
//         const dot = document.createElement('span');
//         dot.className = 'carousel-dot' + (index === 0 ? ' active' : ''); // Classe active pour le premier point
//         dot.dataset.index = index; // Indice de la slide
//         dot.addEventListener('click', () => goToSlide(index));
//         carouselDotsContainer.appendChild(dot);
//     });

//     // Fonction pour changer de slide
//     function changeSlide(direction) {
//         const items = document.querySelectorAll('.carousel-item');
//         items[currentIndex].classList.remove('active');
//         carouselDotsContainer.children[currentIndex].classList.remove('active'); // Met à jour le point actif

//         if (direction === 'next') {
//             currentIndex = (currentIndex + 1) % items.length;
//         } else {
//             currentIndex = (currentIndex - 1 + items.length) % items.length;
//         }

//         items[currentIndex].classList.add('active');
//         carouselDotsContainer.children[currentIndex].classList.add('active'); // Met à jour le point actif
//         carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
//     }

//     // Fonction pour aller à une slide spécifique
//     function goToSlide(index) {
//         const items = document.querySelectorAll('.carousel-item');
//         items[currentIndex].classList.remove('active');
//         carouselDotsContainer.children[currentIndex].classList.remove('active'); // Met à jour le point actif

//         currentIndex = index;

//         items[currentIndex].classList.add('active');
//         carouselDotsContainer.children[currentIndex].classList.add('active'); // Met à jour le point actif
//         carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
//     }

//     // Événements pour les boutons de contrôle
//     document.querySelector('.carousel-control-prev').addEventListener('click', () => changeSlide('prev'));
//     document.querySelector('.carousel-control-next').addEventListener('click', () => changeSlide('next'));
// }

