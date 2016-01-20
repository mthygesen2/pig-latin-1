var pigLatin = function(str) {
  if (str.startsWith("a", "e", "i", "o", "u")) {
    return (str += "ay");
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
