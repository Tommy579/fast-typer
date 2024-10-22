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
    "chose", "trois", "rien", "entendre", "fin", "heure", "attendre",
    "perdre", "nouveau", "homme", "oublier", "trop", "appeler", "croire",
    "commencer", "fille", "quand", "jeune", "travailler", "parce que",
    "vieux", "femme", "vers", "complet", "plein", "regarder", "hommes",
    "droit", "long", "ministre", "fort", "main", "chez", "vite", "aucun",
    "maintenant", "eux", "dieu", "madame", "terre", "doit", "simple",
    "entrer", "payer", "chaque", "besoin", "écrire", "autour", "feu",
    "mettre", "gauche", "visage", "doute", "groupe", "président",
    "sembler", "sentir", "partir", "vouloir", "attention", "devant",
    "question", "pied", "important", "petit", "ville", "mari", "ministre",
    "sorte", "compte", "route", "connaître", "ami", "corps", "police",
    "société", "devant", "chacun", "idée", "produit", "devenir", "eau",
    "second", "problème", "sujet", "seul", "compte", "premier", "pouvoir",
    "moitié", "personne", "équipe", "oeil", "pareil", "peur", "guerre",
    "espace", "rue", "commencer", "dîner", "face", "savoir", "courant",
    "histoire", "cause", "film", "arbre", "chambre", "malgré", "type",
    "projet", "accord", "pays", "conseil", "raison", "photo", "club",
    "train", "nuit", "bras", "fermer", "forme", "chef", "livre", "public",
    "finir", "force", "porte", "musique", "rapport", "fleur", "cœur",
    "lettre", "message", "avenir", "toit", "bord", "vent", "mer",
    "ordre", "profession", "main", "partie", "jeu", "cause", "scène",
    "suivant", "milieu", "prix", "calme", "suite", "niveau", "étude",
    "chemin", "proposer", "directeur", "réponse", "confiance", "décision",
    "chance", "possible", "objet", "presse", "préparer", "capable",
    "envoyer", "élément", "centre", "besoin", "frère", "montre",
    "quartier", "mode", "commerce", "visite", "présence", "préférer",
    "armée", "direction", "détail", "source", "ligne", "propriété",
    "saison", "combattre", "surprise", "cadre", "geste", "quartier",
    "fenêtre", "coût", "science", "habit", "opinion", "affaire",
    "autorité", "bouche", "besoin", "carte", "champ", "oeuvre",
    "plaisir", "hôtel", "résultat", "objet", "état", "honte", "pluie",
    "colère", "lumière", "droit", "journal", "monde", "proche",
    "client", "langue", "gauche", "faim", "découvrir", "détruire",
    "brouillard", "capitaine", "banque", "taxe", "contrôle", "chose",
    "climat", "effet", "expérience", "hiver", "chocolat", "problème",
    "radio", "chance", "centre", "président", "tribunal", "retour",
    "trouver", "bataille", "bateau", "revoir", "essayer", "remercier",
    "école", "mariage", "château", "fête", "bibliothèque", "système",
    "théorie", "médaille", "pouvoir", "résoudre", "couleur", "montagne",
    "taille", "balle", "cheveux", "tomber", "opération", "solution",
    "ordre", "offrir", "sécurité", "séjour", "proposer", "posséder",
    "gouvernement", "carte", "ordinateur", "cadre", "pouvoir",
    "sac", "acheter", "réussir", "terre", "organisation", "plan",
    "route", "lettre", "chose", "semaine", "chaussure", "plafond",
    "danger", "doute", "gagner", "épreuve", "poids", "pomme", "porte",
    "pièce", "professeur", "service", "vérité", "analyser", "chiffre",
    "mauvais", "type", "responsable", "système", "tristesse",
    "forêt", "campagne", "voler", "pitié", "loi", "tour", "belle",
    "route", "poste", "temps", "jambe", "faux", "ventre", "chemin",
    "campagne", "trop", "assurer", "supporter", "hiver", "poids",
    "vérité", "précis", "carte", "courir", "effet", "boire", "arbre",
    "mouvement", "recommencer", "éclair", "assurer", "différence",
    "rêve", "soleil", "politique", "mère", "étude", "homme",
    "délai", "chaîne", "durée", "bâtiment", "feuille", "officier",
    "bureau", "bataille", "autobus", "général", "gauche", "texte",
    "voyage", "solution", "boîte", "ordre", "argent", "tonnerre",
    "violence", "banque", "fenêtre", "produit", "pouvoir", "couleur",
    "officier", "mur", "plume", "ennemi", "désir", "bilan", "état",
    "mer", "rapport", "possibilité", "chemin", "courant", "but",
    "responsabilité", "échelle", "réalité", "principe", "argent",
    "cuisine", "opération", "sécurité", "résultat", "avenir", "crise"
];


let currentWordIndex = 0;
let wordsArray = [];
let typedWords = 0;
let maxWordsPerLine = 10; // Nombre de mots par ligne
let maxWordsPerScreen = 20; // Nombre total de mots affichés à l'écran
let startTime = null; // Variable pour vérifier si le chrono a commencé

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
        wordsDisplay += `<span id="word-${i}">${wordsArray[i]} </span>`;
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
        const userText = inputField.value.trim();

        // Si l'utilisateur tape un espace (fin du mot actuel)
        if (event.key === " " && currentWordIndex < wordsArray.length) {
            if (userText === wordsArray[currentWordIndex]) {
                typedWords++; // Compter uniquement si le mot est correct
                document.getElementById(`word-${currentWordIndex}`).classList.add("correct");
            } else {
                document.getElementById(`word-${currentWordIndex}`).classList.add("incorrect");
            }

            // Réinitialiser l'input et passer au mot suivant
            inputField.value = "";
            currentWordIndex++;

            // Si la ligne complète est tapée, on fait défiler les mots
            if (currentWordIndex % maxWordsPerLine === 0) {
                // Ajouter une nouvelle ligne en dessous
                wordsArray = wordsArray.concat(generateRandomWords(maxWordsPerLine));
                displayWords(); // Rafraîchir l'affichage avec les nouvelles lignes
            }
        }

        // Démarre le chrono lors de la première saisie
        if (!startTime) {
            startTime = Date.now(); // Marquer le début de la saisie
            startCountdown(); // Démarrer le compte à rebours
        }
    });
}

// Initialisation du jeu
function initGame() {
    wordsArray = generateRandomWords(maxWordsPerScreen); // Générer les premiers mots
    currentWordIndex = 0; // Réinitialise l'index du mot courant
    displayWords(); // Affiche les mots initiaux
}

initGame();
startTyping();
