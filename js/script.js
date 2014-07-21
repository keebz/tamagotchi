var Tamagotchi = {
  initialize: function(name, foodLevel, sleepLevel, activityLevel) {
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
  newTamagotchi.initialize(name, foodLevel, sleepLevel, activityLevel);

  alert(newTamagotchi);





})