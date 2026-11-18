/* ===== L'ÉTAT DU JEU ===== */

// Valeurs fixes : on ne les modifie jamais
const PV_MAX_JOUEUR = 100;
const PV_MAX_MONSTRE = 80;

// Valeurs qui vont changer pendant le combat
let pvJoueur = PV_MAX_JOUEUR;
let pvMonstre = PV_MAX_MONSTRE;

/* ===== LES ÉLÉMENTS DE LA PAGE ===== */

const textePvJoueur = document.getElementById("pv-joueur");
const textePvMonstre = document.getElementById("pv-monstre");
const barreJoueur = document.getElementById("barre-joueur");
const barreMonstre = document.getElementById("barre-monstre");

/* ===== L'AFFICHAGE ===== */

// Une fonction = un bloc de code qu'on peut lancer quand on veut.
// Celle-ci met l'écran à jour avec les valeurs actuelles.
function afficherVie() {
    // On écrit les PV dans le texte
    textePvJoueur.textContent = pvJoueur;
    textePvMonstre.textContent = pvMonstre;

    // On règle la largeur des barres en pourcentage.
    // Exemple : 50 PV sur 100 → 50 / 100 * 100 = 50 %
    barreJoueur.style.width = (pvJoueur / PV_MAX_JOUEUR) * 100 + "%";
    barreMonstre.style.width = (pvMonstre / PV_MAX_MONSTRE) * 100 + "%";
}

// On l'appelle une fois au chargement de la page
afficherVie();