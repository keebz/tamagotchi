var Tamagotchi = {
  initialize: function(name) {
    this.name = name;
    this.foodLevel = 10;
    this.sleepLevel = 10;
    this.activityLevel = 10;
  },
  timePasses: function() {
      this.foodLevel -= 1;
  },
  isAlive: function() {
    if (this.foodLevel >= 1) {
      return true;
    } else {
      return false;
    }
  }
}

$(function(){
  var newTamagotchi = Object.create(Tamagotchi);
  newTamagotchi.initialize("Kebler Elf");

  
  var time = window.setInterval(function(){
    newTamagotchi.timePasses();
    if (newTamagotchi.foodLevel >= 1){
    console.log(newTamagotchi.foodLevel);
  } else if (newTamagotchi.foodLevel === 0) {
    console.log("dead")
    }
  },1000);


  $("#petStatus").click(function(){

  })
})