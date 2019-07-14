<template>
<div id="app">
    <section class="row">
        <div class="small-6 columns">
            <h1 class="text-center">YOU</h1>
            <div class="healthbar">
                <div class="healthbar text-center" 
                :style="[playerHealthStyle, healthBase]">
                    {{playerHealth}}
                </div>
            </div>
        </div>
        <div class="small-6 columns">
            <h1 class="text-center">MONSTER</h1>
            <div class="healthbar">
                <div class="healthbar text-center" 
                :style="[monsterHealthStyle, healthBase]">
                    {{monsterHealth}}
                </div>
            </div>
        </div>
    </section>
    <section v-if="canStartGame" class="row controls">
        <div class="small-12 columns">
            <button id="start-game" @click="startNewGame">START NEW GAME</button>
        </div>
    </section>
    <section v-else class="row controls">
        <div class="small-12 columns">
            <button id="attack" @click="attack">ATTACK</button>
            <button id="special-attack" @click="specialAttack">SPECIAL ATTACK</button>
            <button id="heal" @click="heal">HEAL</button>
            <button id="give-up" @click="startNewGame">GIVE UP</button>
        </div>
    </section>
    <section class="row log">
        <div class="small-12 columns">
            <ul >
                <li v-for="(ev,i) in sucesos" :key="i" :class="ev.style">{{ev.log}}
                </li>
            </ul>
        </div>
    </section>
</div>
</template>

<script>

export default {
  name: 'app',
  data: function(){
    return {
      canStartGame: true,
      healthBase: {
          'background-color': 'green', 
          'margin': 0,
          'color': 'white'
      },
      playerHealth:100,
      monsterHealth: 100,
      playerHealthStyle:{
          'width': 100 + '%'
      },
      monsterHealthStyle:{
          'width': 100+ '%'
      },
      attackLimit: 12,
      specialAttackLimit: 25,
      healLimit: 8,
      sucesos:[]
    }
  },
  watch:{
      'playerHealth':function(){
          if(this.playerHealth<=0){
              this.canStartGame=true;
          }
          this.playerHealthStyle.width= this.playerHealth +'%';
      },
      'monsterHealth':function(){
          if(this.monsterHealth<=0){
              this.canStartGame=true;
          }
          this.monsterHealthStyle.width= this.monsterHealth +'%';
      }
  },
  methods:{
    startNewGame(){
      this.canStartGame = !this.canStartGame;
      this.playerHealth= 100 ;
      this.monsterHealth= 100;
      this.playerHealthStyle.width= '100%';
      this.monsterHealthStyle.width= '100%';
      this.sucesos=[];
    },
    attack(){
      let amount = this.randomAttack(this.attackLimit);
      this.playerHealth = this.playerHealth - amount;
      this.log('PLAYER', amount, 'ATTACK');

      amount = this.randomAttack(this.attackLimit);
      this.monsterHealth= this.monsterHealth- amount;
      this.log('MONSTER', amount);

     if(this.playerHealth <1 ){
        this.playerHealth=0;
      }

      if(this.monsterHealth<1){
        this.monsterHealth=0;
      }
    },
    specialAttack(){
      let amount = this.randomAttack(this.specialAttackLimit);
      this.playerHealth = this.playerHealth - amount;
      this.log('PLAYER', amount, 'ATTACK');

      amount = this.randomAttack(this.specialAttackLimit);
      this.monsterHealth= this.monsterHealth- amount;
      this.log('MONSTER', amount);

      if(this.playerHealth <1 ){
this.playerHealth=0;
      }
if(this.monsterHealth<1){
this.monsterHealth=0;
      }
    },
    heal(){
      if(this.playerHealth<100){
          const amount = this.randomAttack(this.healLimit)
          let newHealt = this.playerHealth +amount;
          if(newHealt>100){
            this.playerHealth= '100';
            newHealt=100;
            this.log('PLAYER', 100);
          }else{
              this.playerHealth =newHealt;
              this.log('PLAYER', amount);
          }

        this.log('PLAYER', amount, 'HEAL');
      }
    },
    randomAttack(limit){
        return Math.floor((Math.random() * limit) + 1);
    },
    log(character, amount, event){
        let log = character;
        if(character ==='PLAYER'){
            if(event ==='ATTACK'){
                log = log + ' HITS MONSTER FOR ' + amount;
            }else{
                log = log + ' HEALS HIMSELF FOR ' + amount;
            }
        }

        if(character ==='MONSTER'){
            log = log + ' HITS PLAYER FOR ' + amount;
        }

        this.sucesos.push({log, style:
                                {'player-turn': character==='PLAYER'?true:false,
                                'monster-turn':character==='MONSTER'?true:false}
                                });
    }
  }
}
</script>

