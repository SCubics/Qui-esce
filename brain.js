// On récupère les éléments du DOM correspondant à chaque bouton et chaque section de la page
const questionForm = document.getElementById('question-form'); // Le formulaire des questions
const submitButton = document.getElementById('submit-button'); // Le bouton pour soumettre le formulaire
const restartButton = document.getElementById('restart-button'); // Le bouton pour recommencer le quiz
const resultDiv = document.getElementById('result'); // La section pour afficher le résultat du quiz
const resultText = document.getElementById('result-text'); // L'élément où afficher le texte du résultat
const robotDiv = document.getElementById('robot'); // La section contenant l'image du robot

// Cette fonction est appelée lorsque l'utilisateur soumet le formulaire de questions
function guessPersonality() {
// On récupère les valeurs sélectionnées dans le formulaire
const couple = document.getElementById('couple').value;
const parleConjoint = document.getElementById('parle-conjoint').value;
const college = document.getElementById('college').value;

// On affiche le résultat en fonction des réponses données
if (couple === 'non') {
resultText.textContent = 'Tu es Papi Crocro';
} else if (parleConjoint === 'non') {
resultText.textContent = 'Tu es Vee';
} else if (college === 'oui') {
resultText.textContent = 'Tu es Noah' ;
} else {
resultText.textContent = 'Tu es Wolfy';
}
resultText.classList.add('white-background');

// On cache le formulaire et l'image du robot, et on affiche la section du résultat
questionForm.style.display = 'none';
resultDiv.style.display = 'block';
robotDiv.style.display = 'none';
}

// Cette fonction est appelée lorsque l'utilisateur clique sur le bouton pour recommencer le quiz
function restartQuiz() {
// On remet le formulaire à zéro et on efface le texte du résultat
questionForm.reset();
resultText.textContent = '';
// On affiche le formulaire et l'image du robot, et on cache la section du résultat
questionForm.style.display = 'block';
resultDiv.style.display = 'none';
robotDiv.style.display = 'block';
}

// On ajoute un événement pour que la fonction guessPersonality soit appelée lorsque l'utilisateur soumet le formulaire
questionForm.addEventListener('submit', function(event) {
event.preventDefault();
guessPersonality();
});

// On ajoute un événement pour que la fonction restartQuiz soit appelée lorsque l'utilisateur clique sur le bouton pour recommencer le quiz
restartButton.addEventListener('click', function(event) {
event.preventDefault();
restartQuiz();
});