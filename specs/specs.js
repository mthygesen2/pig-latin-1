describe("pigLatin", function () {
  it("is a word beginning with a vowel, add 'ay' to end", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  });

});
