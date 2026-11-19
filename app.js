/* ===== L'ÉTAT DU JEU ===== */

// Valeurs fixes : on ne les modifie jamais
const PV_MAX_JOUEUR = 100;
const PV_MAX_MONSTRE = 80;

// Valeurs qui vont changer pendant le combat
let pvJoueur = PV_MAX_JOUEUR;
let pvMonstre = PV_MAX_MONSTRE;
let jeuEnCours = true; 

/* ===== LES ÉLÉMENTS DE LA PAGE ===== */

const textePvJoueur = document.getElementById("pv-joueur");
const textePvMonstre = document.getElementById("pv-monstre");
const barreJoueur = document.getElementById("barre-joueur");
const barreMonstre = document.getElementById("barre-monstre");
const historique = []; 
const journal = document.getElementById("journal"); 
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

const boutonAttaque = document.getElementById("bts-attaque");
const boutonSoin = document.getElementById("bts-soin");
const message = document.getElementById("message");
const boutonCritique = document.getElementById("btn-critique");

function nombreAuHasard(min , max) { 
    return Math.floor(math.randome() * (max - min + 1)) + min; 
}

function ripose() {
    const degats = nombreAuHasard(5, 12);
    pvJoueur = Math.max(0, pvJoueur - degats); 
    message.textContent = "Le monstre riposte : -" + degats + " PV !"; 
}

function verifierFin() {
    if (pvMonstre <= 0) { 
        message.textContent = " Victoire ! Le monstre est vaincu !";
        jeuEnCours = false;
    } else if (pvJoueur <= 0) {
        message.textContent = " Defaite ! Le héros est à terre.";
        jeuEnCours = false;
    } if (pvJoueur < 30) {
        message.textContent = " Attention, PV faible !";
    } if (!jeuEnCours) {
        boutonAttaque.disabled = true; 
        boutonSoin.disabled= true; 
        boutonCritique.disabled= true;
    } 
}

    
function attaquer() { 
    if (!jeuEnCours) return; 
   
    const degats = nombreAuHasard(10, 20); 
    pvMonstre = Math.max(0, pvMonstre - degats); 
    console.log("Tu infliges " + degats + " dégâts. ");

    verifierFin();
    if (jeuEnCours) {
        riposte();
        verifierFin();
    }
    afficherVie();
} 

function soigner () { 
    if (!jeuEnCours) return;
    
    pvJoueur = Math.min(PV_MAX_JOUEUR, pvJoueur + 15);
    console.log("Tu récupères 15 PV.");

    riposte();
    verifierFin();
    afficherVie();
}

function coupCritique() {
    const degats = degats(30);
    pvMonstre = Math.max(0, pvMonstre - degats);
    console.log("Tu infliges un coup critique"); 
    
    riposte();
    afficherVie();
}

boutonAttaque.addEventListener("click", attaquer);
boutonSoin.addEventListener("click", soigner); 
boutonCritique.addEventListener("click", coupCritique);