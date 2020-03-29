const Fight = {
    startAttack: function () {  
        const randomE = getRandomInt(100);
        const dmgBlockEnemy =  document.getElementById("dmgBlockEnemy").innerHTML = enemy.heroName + " Dodge " + randomE;
        console.log("Dodge Enemy", randomE);
        const randomP = getRandomInt(100);
        const dmgBlockPlayer =  document.getElementById("dmgBlockPlayer").innerHTML = player.heroName + " Dodge " + randomP;
        console.log("Dodge Player", randomP);
        const currentPlayerlife =  document.getElementById("currentPlayerlife").innerHTML = "Health: " + player.health;
        const currentEnemylife =  document.getElementById("currentEnemylife").innerHTML = "Health: " + enemy.health;
        if (player.dodge < randomE) {
            Fight.enemyAttack();
        }
        if (enemy.dodge < randomP) {
            Fight.playerAttack();
        }
    },

    enemyAttack: function () {
        const playerLifeBar = document.querySelector('.life-percent-c');
        const playerCurrentHealth = ((player.health + player.armor) - enemy.attack);
        let pMaxHealth;
        if (player.heroName === "Ember Spirit") {
            pMaxHealth = 2120;
        } else if (player.heroName === "Earth Spirit") {
            pMaxHealth = 3160;
        } else if (player.heroName === "Storm Spirit") {
            pMaxHealth = 1780;
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
        const enemyCurrentHealth = ((enemy.health + enemy.armor) - player.attack);
        let eMaxHealth;
        if (enemy.heroName === "Spirit Breaker") {
            eMaxHealth = 2560;
        } else if (enemy.heroName === "Void Spirit") {
            eMaxHealth = 2140;
        } else if (enemy.heroName === "Vengeful Spirit") {
            eMaxHealth = 1960;
        }
        const enemyLifeBarP = (100 * enemyCurrentHealth) / eMaxHealth;
        enemyLifeBar.style.width = enemyLifeBarP + '%';
        enemy.health = enemyCurrentHealth;        
        if (enemyCurrentHealth < 0) {
            arenaDiv.style.display = "none";
            mainTitle.textContent = "You won !";
            GameManager.restartGame();
            new Audio('./js/youwin.mp3').play()
        }
    }
}