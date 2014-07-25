var Tamagotchi = {
  initialize: function(name) {
    this.name = name;
    this.foodLevel = 30;
    this.sleepLevel = 20;
    this.activityLevel = 10;
  },
  timePasses: function() {
      this.foodLevel -= 1;
      this.sleepLevel -=1;
      this.activityLevel -=1;
  },
  isAlive: function() {
    if (this.foodLevel >= 1 && this.sleepLevel >= 1 && this.activityLevel >=1) {
      return true;
    } else {
      return false;
    }
  }
};

$(function(){
  var newTamagotchi = Object.create(Tamagotchi);
  newTamagotchi.initialize("Kebler Elf");

  $("#fullHeart").show();
  $("#eggPet").show();
  $("#eggPet").click(function(){
    $(".pet").hide();
    $("#alivePet").show();
 
  var time = window.setInterval(function(){
    newTamagotchi.timePasses();
    if (newTamagotchi.isAlive()) {
      $("#foodLevel").text(newTamagotchi.foodLevel);
      $("#playLevel").text(newTamagotchi.activityLevel);
      $("#sleepLevel").text(newTamagotchi.sleepLevel);

      if (newTamagotchi.foodLevel >20 && newTamagotchi.activityLevel >7 && newTamagotchi.sleepLevel >10){
        $(".heart").hide();
        $("#fullHeart").show();
      } else if (newTamagotchi.foodLevel >10 && newTamagotchi.activityLevel >3 && newTamagotchi.sleepLevel >7){
        $(".heart").hide();
        $("#halfHeart").show(); 
      } else {
        $(".heart").hide();
        $("#emptyHeart").show();
      }

      if (newTamagotchi.foodLevel >=20 && newTamagotchi.activityLevel >=5 && newTamagotchi.sleepLevel >=10){
        $(".pet").hide();
        $("#alivePet").show();
      } else {

        if(newTamagotchi.activityLevel < 5){
              $(".pet").hide();
              $("#playPet").show();
        } 
        if(newTamagotchi.foodLevel < 20){
              $(".pet").hide();
              $("#feedPet").show();
        } 
        if(newTamagotchi.sleepLevel < 10){
              $(".pet").hide();
              $("#sleepPet").show();
        }
      }   
    } else {
      $(".life").hide();
      $(".pet").hide();
      $("#deadPet").show();
      $(".score").hide();
      $(".buttonGroup").hide();
      $("#gameOver").show();
        }
    },1000);  
  })

  var blink = window.setInterval(function(){
    var blinker = 0;
    $(".buttonSize").css("height" , "130px");
  },200);

  $("#feedButton").click(function(){
    $("#feedButton").css("height" , "100px");
      if(newTamagotchi.foodLevel < 30) {
      newTamagotchi.foodLevel ++;
   }
  });

  $("#playButton").click(function(){
    $("#playButton").css("height" , "100px");
      if(newTamagotchi.activityLevel < 10) {
      newTamagotchi.activityLevel ++;
   }
  });

  $("#sleepButton").click(function(){
    $("#sleepButton").css("height" , "100px");
      if(newTamagotchi.sleepLevel < 20) {
      newTamagotchi.sleepLevel ++;
   }
  });

  $(".logo").click(function(){
    location.reload();
  });

});
