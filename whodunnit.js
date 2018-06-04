console.log("Episode 1 : Bob");
console.log("Episode 2 : 3");
console.log("Episode 3 : Ducks, Dogs, Lions");
console.log("Episode 4 : Prints all names in a string (Colin will be Sus3 in function), then Upul will be suspect 3 in log outside function");
console.log("Episode 5 : Just calls info function which name is Poiret");
console.log("Episode 6 : Outer function = Morty, console log = Rick");

var potentialMurderers = ["Dragon", "Scotty2Hotty", "Stewbo", "Mad Fraz", "Posh Lyle", "Super Upul", "Edwardo the 8th, King of Scunthorpe"]

var mansionTrip = function(murdererArray){
    var length = 0;
    var murderer;

    for (var i = 0; i < potentialMurderers.length; i++){
        if(potentialMurderers.length > length) {
            var length = potentialMurderers[i].length;
            murderer = potentialMurderers[i];
        } 
    }
    console.log(murderer);
}

mansionTrip(potentialMurderers);
