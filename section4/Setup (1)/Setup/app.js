new Vue({
    el:'#app',
    data:{
        playerHealth:100,
        monsterHealth:100,
        gameIsRunning:false,
        turns:[]
    },
    methods:{
        starGame(){
            this.playerHealth=100;
            this.monsterHealth=100;
            this.gameIsRunning=true;
            this.turns=[];
        },
        attack(){
            var damage = this.calculateDamage(3,10);
            this.monsterHealth -= damage;
            this.turns.unshift({isPlayer:true,
                    text:'Player hits monster for '+ damage
                });
            
            if(this.checkWin()){
                return;
            }

            this.monsterAttacks();
        },
        specialAttack(){
            var damage = this.calculateDamage(10,20);
            this.monsterHealth -= damage;
            this.turns.unshift({isPlayer:true,
                    text:'Player hits monster hard for '+ damage
                });

            if(this.checkWin()){
                return;
            }

            this.monsterAttacks();
        },
        heal(){
            var heal = this.playerHealth;
            if(this.playerHealth <= 90){
                this.playerHealth += 10;
            }else{
                this.playerHealth=100;
            }

            this.turns.unshift({isPlayer:true,
                    text:'Player heals for '+ (this.playerHealth - heal)
                });

            this.monsterAttacks();
        },
        giveUp(){
            this.gameIsRunning=false;
        },
        calculateDamage(min, max){
            return Math.max(Math.floor(Math.random()* max)+1,min);
        },
        checkWin(){
            if(this.monsterHealth <=0){
                if(confirm('You Won!!, new Game?')){
                    this.starGame();
                }else{
                    this.gameIsRunning=false;
                }
                return true;
            }else if(this.playerHealth <=0){
                if(confirm('You Lost!!, new Game?')){
                    this.starGame();
                }else{
                    this.gameIsRunning=false;
                }
                return true;
            }

            return false;
        },
        monsterAttacks(){
            var damage = this.calculateDamage(5,12);
            this.playerHealth -= damage;

            this.turns.unshift({isPlayer:false,
                    text:'monster hits player for '+ damage
                });

            this.checkWin();
        }
    }

})