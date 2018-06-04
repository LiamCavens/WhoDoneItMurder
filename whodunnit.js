var potentialMurderers = [
  "Dragon",
  "Scotto",
  "Stewbo",
  "Mad Fraz",
  "Posh Lyle",
  "Super Upul",
  "Edwardo the 8th, King of Scunthorpe"
];

var mansionTrip = function(murdererArray) {
  var murderMeter = 0;
  var murderer;

  for (var i = 0; i < potentialMurderers.length; i++) {
    if (potentialMurderers.length > murderMeter) {
      var murderMeter = potentialMurderers[i].length;
      murderer = potentialMurderers[i];
    }
  }
  console.log(murderer);
};

mansionTrip(potentialMurderers);

const victims = []; // yeah?

const getMostLettersThatAccumulateToAHigherOne = function(victims) {
    victims
};
