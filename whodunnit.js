var potentialMurderers = [
  "Dragon",
  "Scotto",
  "Stewbo",
  "Mad Fraz",
  "Posh Lyle",
  "Super Upul",
  "Edwardo the 8th, King of Scunthorpe"
];

var mansionTrip = function (murdererArray) {
  var murderMeter = 0;
  var murderer;

  for (var i = 0; i < potentialMurderers.length; i++) {
    if (potentialMurderers.length > murderMeter) {
      var murderMeter = potentialMurderers[i].length;
      murderer = potentialMurderers[i];
    }
  }
  potentialMurderers.push("Big Daddy Kane");
  return murderer;
};

const victims = [
  "Donald Trump",
  "Nicola Sturgeon",
  "Pitbull",
  "The Beebs",
  "Maggie Thatcher",
  "Kim Jong-Un",
  "Bono",
  "Lindsey Lohan"
];

const loopVictimsArray = function (victims) {
  let victimRating = 0;
  let nameOfVictim;

  victims.forEach(function (victim, index) {
    const victimNumber = loopThroughVictimName(victim);

    if (victimNumber > victimRating) {

      victimRating = victimNumber;
      nameOfVictim = victims[index];
    }
  });
  return nameOfVictim;
};

const loopThroughVictimName = function (victim) {
  let totalInARow = 0;

  Array.from(victim).forEach(function (char, index) {
    if (index !== 0 && char.charCodeAt(0) > victim[index - 1].charCodeAt(0)) {
      totalInARow++;
    }
  });
  return totalInARow;

};

// console.log(mansionTrip(potentialMurderers) + " Has Slaughtered " + loopVictimsArray(victims));
console.log(`${mansionTrip(potentialMurderers)} Has Slaughtered ${loopVictimsArray(victims)}`);
