var pigLatin = function(str) {
  // var word = str.slice(1); //grabs all but first letter
  // var word2 = str.slice(0,1); //grabs first letter
  var suffix = "ay";
  var isvowel = /[^aeiou]/.test(str);
  if (isvowel = true) {
    return (str += suffix);

  }

  else if (str.charAt(0) !== ((("a", "e", "i", "o", "u")) && (str.charAt(1) !== ("a", "e", "i", "o", "u")))) {

  //  console.log("str.charAt0": + str.charAt(0));
  return ("blah");
  }

  else if (str.charAt(0) !== ("a", "e", "i", "o", "u")) {
    var word = str.slice(1); //grabs all but first letter
    var word2 = str.slice(0,1); //grabs first letter
    // console.log("str.charAt(0)": + str.charAt(0));
    console.log("word:" + word);
    console.log("word2:" + word2);

    return (word += word2 += suffix);
  }

  else {
    return false;
  }
  };










        // var word = str - (str.slice(0,1));
        // return (word += (str.slice(0,1)) += "ay");


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
