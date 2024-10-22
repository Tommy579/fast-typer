const commonWords = [
    "le", "de", "un", "être", "et", "à", "en", "avoir", "que", "pour",
    "dans", "ce", "il", "qui", "ne", "sur", "se", "pas", "plus", "pouvoir",
    "par", "je", "avec", "tout", "faire", "son", "mettre", "autre", "on",
    "mais", "nous", "comme", "ou", "si", "leur", "y", "dire", "elle",
    "devoir", "avant", "deux", "même", "prendre", "aussi", "celui", "donner",
    "bien", "où", "fois", "vous", "encore", "nouveau", "aller", "cela",
    "entre", "premier", "vouloir", "déjà", "grand", "mon", "me", "moins",
    "aucun", "lui", "temps", "savoir", "falloir", "voir", "quelque", "sans",
    "raison", "notre", "dont", "non", "an", "monde", "jour", "monsieur",
    "demander", "alors", "après", "trouver", "personne", "rendre", "part",
    "dernier", "venir", "pendant", "passer", "peu", "lequel", "suite",
    "bon", "comprendre", "depuis", "point", "ainsi", "heure", "rester",
    "toujours", "tenir", "chef", "parler", "là", "année", "jamais",
    "chose", "trois", "rien", "entendre", "fin", "attendre", "perdre",
    "homme", "oublier", "trop", "appeler", "croire", "commencer", "fille",
    "quand", "jeune", "travailler", "parce", "vieux", "femme", "vers", "complet",
    "plein", "regarder", "hommes", "droit", "long", "ministre", "fort", "main",
    "chez", "vite", "maintenant", "eux", "dieu", "madame", "terre", "doit", "simple",
    "entrer", "payer", "chaque", "besoin", "écrire", "autour", "feu", "gauche",
    "visage", "doute", "groupe", "président", "sembler", "sentir", "partir",
    "attention", "devant", "question", "pied", "important", "petit", "ville",
    "mari", "sorte", "compte", "route", "connaître", "ami", "corps", "police",
    "société", "idée", "produit", "devenir", "eau", "second", "problème", "sujet",
    "seul", "moitié", "équipe", "oeil", "pareil", "peur", "guerre", "espace", "rue",
    "commencer", "face", "savoir", "courant", "histoire", "cause", "film", "arbre",
    "chambre", "malgré", "type", "projet", "accord", "pays", "conseil", "photo",
    "train", "nuit", "bras", "fermer", "forme", "livre", "public", "finir", "force",
    "porte", "musique", "rapport", "fleur", "cœur", "lettre", "message", "avenir",
    "bord", "vent", "mer", "ordre", "profession", "partie", "jeu", "scène", "milieu",
    "prix", "calme", "suite", "niveau", "étude", "proposer", "réponse", "confiance",
    "décision", "chance", "possible", "objet", "centre", "frère", "quartier", "mode",
    "commerce", "visite", "présence", "préférer", "direction", "source", "ligne",
    "propriété", "saison", "surprise", "cadre", "geste", "fenêtre", "coût", "science",
    "habit", "opinion", "affaire", "autorité", "bouche", "carte", "champ", "oeuvre",
    "plaisir", "résultat", "état", "honte", "pluie", "colère", "lumière", "droit",
    "journal", "client", "langue", "faim", "découvrir", "détruire", "brouillard",
    "capitaine", "banque", "contrôle", "effet", "expérience", "hiver", "chocolat",
    "radio", "centre", "tribunal", "retour", "essayer", "école", "mariage", "fête",
    "bibliothèque", "système", "théorie", "médaille", "solution", "montagne", "taille",
    "balle", "cheveux", "tomber", "opération", "couleur", "sécurité", "séjour",
    "organisation", "plan", "chaussure", "plafond", "danger", "poids", "pomme",
    "service", "vérité", "professeur", "chiffre", "responsable", "campagne", "voler"
];



let currentWordIndex = 0;
let wordsArray = [];
let typedWords = 0;
let maxWordsPerLine = 10; // Nombre de mots par ligne
let maxWordsPerScreen = 20; // Nombre total de mots affichés à l'écran
let startTime = null; // Variable pour vérifier si le chrono a commencé
let currentInputWord = "";  // Mot en cours de saisie par l'utilisateur
let countdownStarted = false; // Indicateur pour vérifier si le chrono a démarré

// Fonction pour générer une phrase aléatoire avec des mots courants
function generateRandomWords(count) {
    let randomWords = [];
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * commonWords.length);
        randomWords.push(commonWords[randomIndex]);
    }
    return randomWords;
}

// Fonction pour afficher les lignes à l'écran
function displayWords() {
    let wordsDisplay = '';
    for (let i = currentWordIndex; i < currentWordIndex + maxWordsPerScreen; i++) {
        if ((i - currentWordIndex) % maxWordsPerLine === 0 && i > currentWordIndex) {
            wordsDisplay += '<br>';
        }
        if (wordsArray[i]) {  // S'assurer que le mot existe
            wordsDisplay += `<span id="word-${i}">${wordsArray[i]} </span>`;
        }
    }
    document.getElementById("words").innerHTML = wordsDisplay;
}

function startCountdown() {
    let countdownTime = 60; // Compte à rebours de 60 secondes
    const countdownInterval = setInterval(() => {
        countdownTime--;
        document.getElementById("timer").textContent = `Temps restant: ${countdownTime} secondes`;

        if (countdownTime <= 0) {
            clearInterval(countdownInterval);
            document.getElementById("user_input").disabled = true; // Désactiver l'entrée utilisateur après le temps écoulé

            // Afficher le résultat final sous la zone de saisie
            document.getElementById("wpm_number").textContent = typedWords;

            // Rendre visible le message avec le résultat
            document.getElementById("wpm_result").style.display = "block";
        }
    }, 1000);  // Mise à jour chaque seconde
}


// Fonction pour démarrer la saisie
function startTyping() {
    const inputField = document.getElementById("user_input");

    inputField.addEventListener("keydown", (event) => {
        // Si le chrono n'a pas encore démarré, démarre-le à la première touche
        if (!startTime) {
            startTime = Date.now();
            startCountdown()
        }

        // Si l'utilisateur tape un espace
        if (event.key === " ") {
            event.preventDefault(); // Empêche l'espace d'être écrit

            // Vérifie si le mot entier est correct
            if (currentInputWord.trim() === wordsArray[currentWordIndex]) {
                document.getElementById(`word-${currentWordIndex}`).style.color = 'green'; // Mot correct en vert
                typedWords++; // Compter uniquement si le mot est correct
            } else {
                document.getElementById(`word-${currentWordIndex}`).style.color = 'red'; // Mot incorrect en rouge
            }

            // Réinitialiser l'input et passer au mot suivant
            currentInputWord = ""; // Réinitialise l'input
            inputField.value = ""; // Réinitialiser le champ de saisie
            currentWordIndex++;

            // Si la ligne complète est tapée, on fait défiler les mots
            if (currentWordIndex % maxWordsPerLine === 0) {
                wordsArray = wordsArray.concat(generateRandomWords(maxWordsPerLine));
                displayWords(); // Rafraîchir l'affichage avec les nouvelles lignes
            }

            // Met à jour l'affichage du mot courant
            updateWordDisplay();
        } else if (event.key !== "Backspace") {
            // Si l'utilisateur tape une lettre, met à jour l'affichage
            currentInputWord += event.key; // Ajoute la lettre à la saisie en cours
            updateWordDisplay();
        }
    });
}


// Fonction pour comparer la saisie utilisateur et mettre à jour l'affichage
function updateWordDisplay() {
    // Supprime la classe 'current-word' de tous les mots
    for (let i = currentWordIndex - maxWordsPerLine; i <= currentWordIndex + maxWordsPerLine; i++) {
        const previousWordElement = document.getElementById(`word-${i}`);
        if (previousWordElement) {
            previousWordElement.classList.remove('current-word');
        }
    }

    // Ajouter la classe 'current-word' au mot actuel
    const currentWordElement = document.getElementById(`word-${currentWordIndex}`);
    if (currentWordElement) {
        currentWordElement.classList.add('current-word');
    }
}


// Initialisation du jeu
function initGame() {
    wordsArray = generateRandomWords(maxWordsPerScreen); // Générer les premiers mots
    currentWordIndex = 0; // Réinitialise l'index du mot courant
    displayWords(); // Affiche les mots initiaux
}

initGame();
startTyping();