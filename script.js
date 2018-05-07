console.log('test');

// var politician = {
//   name: " ";
//   electionResults: null;
//   voteTotal: 0;
// };

var factoryPolitician = function(nameType){


var politician = {};

politician.name = nameType;
politician.electionResults = null;
politician.totalVotes = 0;
// politician.testMethod = function(){
//   console.log(this.name + " has " + this.totalVotes + " votes. ");
//   };
//
// politician.testMethod();
return politician;

};


var Candidate1 = factoryPolitician("Rowena");
var Candidate2 = factoryPolitician("Lily");

Candidate1.totalVotes = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];

Candidate2.totalVotes =
[4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

Candidate1.totalVotes[9] = 1;
Candidate1.totalVotes[4] = 17;
Candidate1.totalVotes[43] = 11;

Candidate2.totalVotes[9] = 28;
Candidate2.totalVotes[4] = 38;
Candidate2.totalVotes[43] = 27;


console.log(Candidate1);
console.log(Candidate2);


//add up all of Candidate1 votes and Candidate2 votes by using loops over arrays//





Candidate1.addArrayforVotes = function(){

        var total1 = 0;
      for (i = 0; i < this.totalVotes.length; i = i + 1) {
            var total1 = this.totalVotes[i] + total1;
            console.log(total1);
      }

};

Candidate2.addArrayforVotes = function(){

      var total2 = 0;
  for (i = 0; i < this.totalVotes.length; i = i + 1) {
        var total2 = this.totalVotes[i] + total2;
        console.log(total2);
  };

};


Candidate1.addArrayforVotes();
Candidate2.addArrayforVotes();
//


  if (Candidate1.addArrayforVotes() > Candidate2.addArrayforVotes()) {
    console.log("The winner is Candidate 1, Rowena!");
  } else {
    console.log("The winner is Candidate 2, Lily!");
  };


// };


//

// var Candidate2.electionResults = [
