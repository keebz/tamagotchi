describe("Tamagotchi", function() {
  describe("initialize", function() {
    it("sets the name and other properties", function() {
      var pet = Object.create(Tamagotchi);
      pet.initialize("Kebler elf");
      pet.name.should.equal("Kebler elf");
      pet.foodLevel.should.equal(10);
      pet.sleepLevel.should.equal(10);
      pet.activityLevel.should.equal(10);
    });
  });
  describe("timePasses", function() {
    it("decreases the amount of food left by 1", function() {
      var pet = Object.create(Tamagotchi);
      pet.initialize("Kebler elf");
      pet.timePasses();
      pet.foodLevel.should.equal(9);
    });
  });
  describe("isAlive", function() {
    it("is alive if the food level is above 0", function() {
      var pet = Object.create(Tamagotchi);
      pet.initialize("Kebler elf");
      pet.isAlive();
      pet.isAlive().should.equal(true);
    });
    it("is dead if the food level is 0", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.foodLevel = 0;
      myPet.isAlive().should.equal(false);
    });
  });

});
