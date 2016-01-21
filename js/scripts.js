var pigLatin = function(str) {
  // var word = str.slice(1); //grabs all but first letter
  // var word2 = str.slice(0,1); //grabs first letter
  // these variables should be lowerCamelCase
  var suffix = "ay";
  var firstletter = str.slice(0,1);
  var secondletter = str.slice(1,2);
  var thirdletter = str.slice(2,3);
  var firstthree = str.slice(0,3);
  var hasQu = /[qu]/.test(firstthree);
  var firstisvowel = /[aeiou]/.test(firstletter);
  var secondisvowel = /[aeiou]/.test(secondletter);

  if (firstisvowel === true) {
    return (str += suffix);
  }
// lines 19-21 inside the conditional here should be indented
  else if ((firstisvowel === false) && (secondisvowel === false) && (hasQu === false)) {
  var endLetters = str.slice(2);
  var firstTwo = (firstletter += secondletter);
  return (endLetters += firstTwo += suffix);
  }

  else if ((firstisvowel === false) && (secondisvowel === true) && (hasQu === false)) {
    var endLetters2 = str.slice(1);
    return (endLetters2 += firstletter += suffix);
  }

  else if ((firstisvowel === false) && (hasQu === true) && (firstletter !== "q")) {
    var endLetters3 = str.slice(3);
    return (endLetters3 += firstthree += suffix) ;
  }
// endLetters4 and endLetters are the same and could be condensed
  else if ((firstletter === "q") && (secondletter === "u")) {
    var endLetters4 = str.slice(2);
    var firstTwo = (firstletter += secondletter);
    return (endLetters4 += firstTwo += suffix);
  }
// this one is redundant and never going to happen because under your rules it's going to get swallowed up by one of the previous rules, since y isn't a vowel under your vowel detection, so doesn't need an exception.
  else if ((firstletter === "y")) {
    var endletters5 = str.slice(1);
    return (endletters5 += firstletter += suffix);
  }

  else {
    return false;
  }
  };

$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    var str = $("input#str").val();
    var result = pigLatin(str);

    $("#result").show();
    $("#resultText").text(result);

    event.preventDefault();
  });
});




// (firstletter === "q") && (secondletter === "u") || (firstisvowel === false) && (secondletter === "q") && (thirdletter === "u")



// $(document).ready(function(){
//   console.log();
//   $("form#triangles").submit(function(event){
//     var sideOne = parseInt($("input#sideOne").val());
//     var sideTwo = parseInt($("input#sideTwo").val());
//     var sideThree = parseInt($("input#sideThree").val());
//     var result = triangles(sideOne, sideTwo, sideThree);
//
//   $("#result").text(result);
//   $("#result").show(result);
//
//   event.preventDefault();
//   });
// });
