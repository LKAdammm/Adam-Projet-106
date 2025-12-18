// On attend que la page soit chargée
document.addEventListener('DOMContentLoaded', () => {
    console.log("Casino script chargé !");

    // --- MINI JEU BLACKJACK (Version très simplifiée) ---

    const dealBtn = document.getElementById('bj-deal-btn');
    const playerHandSpan = document.getElementById('bj-player-hand');
    let credits = 1000;
    const creditsDisplay = document.getElementById('player-credits');

    // Fonction simple pour avoir une carte au hasard (entre 2 et 11 pour l'As)
    function getRandomCard() {
        return Math.floor(Math.random() * 10) + 2;
    }

    dealBtn.addEventListener('click', () => {
        // On simule une mise de 50$
        if(credits < 50) {
            alert("Crédits insuffisants !");
            return;
        }
        credits -= 50;
        creditsDisplay.textContent = credits;

        // On tire deux cartes pour le joueur
        let card1 = getRandomCard();
        let card2 = getRandomCard();
        let total = card1 + card2;

        // On affiche le résultat
        playerHandSpan.textContent = `${card1} + ${card2} (Total: ${total})`;

        // Petite logique de victoire simple pour la démo
        if(total === 21) {
             playerHandSpan.innerHTML += ' <br><span style="color:#d4af37">BLACKJACK ! +150$</span>';
             credits += 150;
             creditsDisplay.textContent = credits;
        }
        // Note: Un vrai blackjack demande beaucoup plus de code (gestion des As, du croupier, etc.)
    });

    // --- AUTRES JEUX ---
    // Vous pourrez ajouter la logique de la roulette et des slots ici plus tard.
});