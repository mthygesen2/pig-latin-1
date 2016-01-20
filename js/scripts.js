var pigLatin = function(str) {
  if (str.startsWith("a", "e", "i", "o", "u")) {
    return (str += "ay");

  } else if (str.charAt(0) !== ("a", "e", "i", "o", "u")) {
    var word = str.slice(1); //grabs all but first letter
    var word2 = str.slice(0,1); //grabs first letter
    var suffix = "ay";
    return (word += word2 +=suffix);

      // var word = str - (str.slice(0,1));
      // return (word += (str.slice(0,1)) += "ay");

  } else {
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
