describe("pigLatin", function () {
  it("is a word beginning with a vowel, add 'ay' to end", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  });

  it("is a word beginning with a consonant, move consonant to end and add 'ay'", function() {
    expect(pigLatin("pig")).to.equal("igpay");
  });

});
