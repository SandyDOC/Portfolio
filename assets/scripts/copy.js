    function generateAndCopyEmail() {
        // Générer l'adresse email
        const email = 'sandy77515@gmail.com'; // Adresse email à copier

        // Copier l'email dans le presse-papier
        navigator.clipboard.writeText(email).then(() => {
            // Sélectionner le tooltip et changer son message
            const tooltip = document.getElementById('tooltip');
            tooltip.innerText = 'Email copié !';

            // Rendre le tooltip visible
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = 1;

            // Rendre le tooltip invisible après 2 secondes et restaurer le texte initial
            setTimeout(() => {
                tooltip.innerText = 'Copier';
                tooltip.style.visibility = 'hidden';
                tooltip.style.opacity = 0;
            }, 2000);
        }).catch(err => {
            console.error('Échec de la copie : ', err);
        });
    }
