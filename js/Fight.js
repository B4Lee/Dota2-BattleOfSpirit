
const Fight = {
    startAttack: function () {
        const randomE = getRandomInt(100);
        console.log("Dodge Enemy", randomE);
        const randomP = getRandomInt(100);
        console.log("Dodge Player", randomP);
        if (player.dodge < randomE) {
            Fight.enemyAttack();
            console.log("Dodge Player NO", player.dodge, "Player Life", player.health);     
        }
        if (enemy.dodge < randomP) {
            Fight.playerAttack();
            console.log("Dodge Enemy NO", enemy.dodge, "Enemy Life", enemy.health);
        }
    },

    enemyAttack: function () {
        const playerLifeBar = document.querySelector('.life-percent-c');
        const playerCurrentHealth = ((player.health + player.defense) - enemy.attack);
        let pMaxHealth;
        if (player.heroName === "Ember Spirit") {
            pMaxHealth = 1200;
        } else if (player.heroName === "Earth Spirit") {
            pMaxHealth = 1000;
        } else if (player.heroName === "Storm Spirit") {
            pMaxHealth = 750;
        }
        const playerLifeBarP = (100 * playerCurrentHealth) / pMaxHealth;
        playerLifeBar.style.width = playerLifeBarP + '%';        
        player.health = playerCurrentHealth;
        const main = document.querySelector('.main');
        if (playerCurrentHealth < 0) {
            arenaDiv.style.display = "none";
            mainTitle.textContent = "You lost !";
            GameManager.restartGame();
        }
    },

    playerAttack: function() {
        const enemyLifeBar = document.querySelector('.life-percent-e');
        const enemyCurrentHealth = ((enemy.health + enemy.defense) - player.attack);
        let eMaxHealth;
        if (enemy.heroName === "Spirit Breaker") {
            eMaxHealth = 800;
        } else if (enemy.heroName === "Void Spirit") {
            eMaxHealth = 1200;
     
        } else if (enemy.heroName === "Vengeful Spirit") {
            eMaxHealth = 1100;
        }
        const enemyLifeBarP = (100 * enemyCurrentHealth) / eMaxHealth;
        enemyLifeBar.style.width = enemyLifeBarP + '%';
        enemy.health = enemyCurrentHealth;        
        const main = document.querySelector('.main');
        if (enemyCurrentHealth < 0) {
            arenaDiv.style.display = "none";
            mainTitle.textContent = "You have won !";
            GameManager.restartGame();
        }
    }
}