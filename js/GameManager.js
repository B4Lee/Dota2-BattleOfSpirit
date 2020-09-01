console.log("ok");

const arenaDiv = document.querySelector('.arena');
const interface = document.querySelector('.interface');
const mainTitle = document.querySelector('.main-title');
const player = Object.create(Entity);
const enemy = Object.create(Entity);

const GameManager = {
    
    arenaInterface: function() {
        interface.classList.add('hide');
    },

    restartGame: function() {        
        const restartBtn = document.createElement('div');
        const main = document.querySelector('.main');
        main.appendChild(restartBtn);
        restartBtn.classList.add('container', 'text-center');
        restartBtn.innerHTML = `<button class="btn btn-success restart-btn"onClick="window.location.reload()">Restart</button>`;
    },

    setGameStart: function(heroName) {
        const result = heroName;
        switch (heroName) {
            case "Ember Spirit":
                player.init(heroName, 2120, 35, 150, 14);
                break;
            case "Earth Spirit":
                player.init(heroName, 3160, 60, 200, 13);
                break;
            case "Storm Spirit":
                player.init(heroName, 1780, 20, 250, 12);
                break;
        }
        const selectedCharacter = document.createElement('div');
        mainTitle.textContent = 'Battle of Spirit ⚔️ ';
        selectedCharacter.classList.add('container','col-lg-6', 'col-md-8', 'selected-character');
        selectedCharacter.innerHTML = '<h3 class="text-center">' + result + '</h3><div class="life-container"><div class="life-percent-c"=></div></div><div class="d-flex pb-5"><img src="img/avatar-player/'
        + result + '.gif" class="img-avatar"><ul class="col-md-6"><li id="currentPlayerlife">Health: '
        + player.health + '</li><li id="dmgBlockEnemy">Dodge: ' 
        + player.dodge + '</li><li>Attack: ' 
        + player.attack + '</li><li>Armor: ' 
        + player.armor + '</li></ul></div><div class="text-center"><button class="btn btn-danger find-enemy-btn"onClick="GameManager.searchEnemy()">Find an opponent</button></div>';
                                  
        arenaDiv.appendChild(selectedCharacter);
        GameManager.arenaInterface();
    },

    searchEnemy: function() {      
        const randomEnemy = Math.floor(Math.random() * Math.floor(3));
        switch (randomEnemy) {
            case 0:
                enemy.init("Spirit Breaker", 2560, 40, 150, 12);
                break;
            case 1:
                enemy.init("Void Spirit", 2140, 25, 100, 12);
                break;
            case 2:
                enemy.init("Vengeful Spirit", 1960, 55, 130, 20);
                break;
            }
        const enemyArea = document.createElement('div');
        enemyArea.classList.add('container', 'col-lg-6', 'col-md-8', 'enemy-area');
        enemyArea.innerHTML = `<h3 class="text-center">${enemy.heroName}</h3>
                            <div class="life-container">
                            <div class="life-percent-e"=></div>
                            </div> 
                            <div class="d-flex">
                                <img src="./img/avatar-enemies/${enemy.heroName}.gif" />
                                <ul class="col-md-6">
                                    <li id="currentEnemylife">Health: ${enemy.health}</li>
                                    <li id="dmgBlockPlayer">Dodge: ${enemy.dodge}</li>
                                    <li>Attack: ${enemy.attack}</li>
                                    <li>Armor: ${enemy.armor}</li>
                                </ul>                                 
                                </div>`;
        arenaDiv.appendChild(enemyArea);
        GameManager.setGameFight();
    },

    setGameFight: function() {
            const findEnemyBtn = document.querySelector('.find-enemy-btn');
            const attackBtn = document.createElement('button');
            attackBtn.classList.add('btn', 'btn-danger', 'attack-btn');
            attackBtn.textContent = 'Attack!';
            findEnemyBtn.parentNode.replaceChild(attackBtn, findEnemyBtn);            
            attackBtn.addEventListener('click', Fight.startAttack);            
    }
    
} 



