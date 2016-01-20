var pigLatin = function(str) {
  // var word = str.slice(1); //grabs all but first letter
  // var word2 = str.slice(0,1); //grabs first letter
  var suffix = "ay";
  var firstletter = str.slice(0,1);
  var secondletter = str.slice(1,2);
  var firstisvowel = /[aeiou]/.test(firstletter);
  var secondisvowel = /[aeiou]/.test(secondletter);
  if (firstisvowel === true) {
    return (str += suffix);
  }

  else if ((firstisvowel === false) && (secondisvowel === false)) {
    //  console.log("str.charAt0": + str.charAt(0));
  var endLetters = str.slice(2);
  var firstTwo = (firstletter += secondletter);
  return (endLetters += firstTwo += suffix);
  }

  else if ((firstisvowel === false) && (secondisvowel === true)) {
    var endLetters2 = str.slice(1);
    return (endLetters2 += firstletter += suffix);
  }

  else {
    return false;
  }
  };










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
