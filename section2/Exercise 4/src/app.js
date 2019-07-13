new Vue({
  el: '#exercise',
  data: {
    effect:true,
    effectClasses: {
      highlight:true,
      shrink:false
    },
    likethat:'',
    apply:false,
    other:'',
    estilacho:'',
    progress:{'width':'0px', 'height': '20px', 'background-color': 'blue'}
  },
  methods: {
    startEffect: function() {
      var ex = this;
      setInterval(function(){
        ex.effectClasses = {
          highlight:!ex.effect,
          shrink:ex.effect
        };
        ex.effect= !ex.effect
      },1000)
    },
    starProgress: function(){
      var ex = this;
      let width=0;
      setInterval(function(){
        ex.progress.width = width+'px';
        width=width+10;
      },500)
    }
  }
});
