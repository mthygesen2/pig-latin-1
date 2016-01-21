describe("pigLatin", function () {
  it("is a word beginning with a vowel, add 'ay' to end", function() {
    expect(pigLatin("integer")).to.equal("integeray");
  });
// this next one seems like it should come later, after the single consonant one?
  it("is a word beginning with multiple consonants, move all consonants to end and add 'ay'", function() {
    expect(pigLatin("plate")).to.equal("ateplay");
  });

  it("is a word beginning with a consonant, move consonant to end and add 'ay'", function() {
    expect(pigLatin("pig")).to.equal("igpay");
  });

  it("is a word beginning a consonant followed by 'qu', move consonant-vowel pair to end and add 'ay'", function() {
    expect(pigLatin("squall")).to.equal("allsquay");
  });

  it("is a word beginning with 'qu', move consonant-vowel pair to end and add 'ay'", function() {
    expect(pigLatin("quack")).to.equal("ackquay");
  });

  it("is a word beginning with 'y', move the 'y' to the end and add 'ay'", function() {
    expect(pigLatin("yellow")).to.equal("ellowyay");
  });

});
