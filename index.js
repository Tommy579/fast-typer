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
let startTime;
let countdownTime = 60; // Durée du compte à rebours en secondes
let maxWordsPerLine = 10; // Nombre de mots par ligne
let maxWordsPerScreen = 20; // Nombre total de mots affichés à l'écran

// Fonction pour générer une phrase aléatoire avec des mots courants
function generateRandomWords(count) {
    let randomWords = [];
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * commonWords.length);
        randomWords.push(commonWords[randomIndex]);
    }
    return randomWords;
}

// Fonction pour afficher les mots à l'écran (groupe de 10)
function displayWords() {
    let wordsDisplay = '';
    for (let i = currentWordIndex; i < currentWordIndex + maxWordsPerScreen; i++) {
        if (i === currentWordIndex + 7) { // Créer une nouvelle ligne après le 7ème mot
            wordsDisplay += '<br>';
        }
        wordsDisplay += `<span id="word-${i}">${wordsArray[i]} </span>`;
    }
    document.getElementById("words").innerHTML = wordsDisplay;
}

// Fonction pour démarrer le chrono

function startTimer() {
    const countdownInterval = setInterval(() => {
        if (countdownTime <= 0) {
            clearInterval(countdownInterval); // Arrêter le compte à rebours
            const wpm = typedWords;
            alert(`Temps écoulé ! Vous avez tapé à ${wpm} mots par minute.`);
            location.reload(); // Réinitialise la page après l'alerte
            return;
        }

        document.getElementById("timer").textContent = `Temps restant: ${countdownTime} secondes`;
        countdownTime--; // Décrémenter le temps restant
    }, 1000);  // Mise à jour chaque seconde
}

// La fonction startTyping reste inchangée
function startTyping() {
    const inputField = document.getElementById("user_input");

    inputField.addEventListener("keydown", (event) => {
        const userText = inputField.value.trim();

        if (event.key === " " && currentWordIndex < wordsArray.length) {
            if (userText === wordsArray[currentWordIndex]) {
                typedWords++;
                document.getElementById(`word-${currentWordIndex}`).classList.add("correct");
            } else {
                document.getElementById(`word-${currentWordIndex}`).classList.add("incorrect");
            }

            inputField.value = "";
            currentWordIndex++;

            if (currentWordIndex % maxWordsPerLine === 7) {
                wordsArray = wordsArray.concat(generateRandomWords(10));
            }

            displayWords();
        }

        if (!startTime) {
            startTimer();  // Démarre le compte à rebours lors de la première saisie
            startTime = new Date(); // Ajout de startTime pour la logique future si nécessaire
        }
    });
}


// Fonction pour démarrer la saisie
function startTyping() {
    const inputField = document.getElementById("user_input");

    inputField.addEventListener("keydown", (event) => {
        const userText = inputField.value.trim();

        // Si l'utilisateur tape un espace (fin du mot actuel)
        if (event.key === " " && currentWordIndex < wordsArray.length) {
            if (userText === wordsArray[currentWordIndex]) {
                typedWords++;  // Compter uniquement si le mot est correct
                document.getElementById(`word-${currentWordIndex}`).classList.add("correct");
            } else {
                document.getElementById(`word-${currentWordIndex}`).classList.add("incorrect");
            }

            // Réinitialiser l'input et passer au mot suivant
            inputField.value = "";
            currentWordIndex++;

            // Si on a dépassé 7 mots, ajouter une nouvelle ligne de 10 mots
            if (currentWordIndex % maxWordsPerLine === 7) {
                // Générer 10 nouveaux mots et les ajouter au tableau
                wordsArray = wordsArray.concat(generateRandomWords(10));
            }

            // Rafraîchir l'affichage
            displayWords();
        }

        if (!startTime) {
            startTimer();  // Démarre le chrono lors de la première saisie
        }
    });
}

// Initialisation du jeu
function initGame() {
    wordsArray = generateRandomWords(maxWordsPerScreen);  // Générer les premiers mots
    currentWordIndex = 0;  // Réinitialise l'index du mot courant
    displayWords();  // Affiche les mots initiaux
}

initGame();
startTyping();
