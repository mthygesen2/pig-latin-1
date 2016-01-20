describe("pigLatin", function () {
  it("is a word beginning with a vowel, add 'ay' to end", function() {
    expect(pigLatin("integer")).to.equal("integeray");
  });

  it("is a word beginning with multiple consonants, move all consonants to end and add 'ay'", function() {
    expect(pigLatin("plate")).to.equal("ateplay");
  });

  it("is a word beginning with a consonant, move consonant to end and add 'ay'", function() {
    expect(pigLatin("pig")).to.equal("igpay");
  });
});
