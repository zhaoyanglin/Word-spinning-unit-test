const {spinWordsss} = require('./mainCode');

test("returns the same string, but with all five or more letter words reversed", () => {
    const answer = spinWordsss("Hey fellow warriors");
    expect(answer).toBe("Hey wollef sroirraw");
});

test("returns the same string, but with all five or more letter words reversed", () => {
    const answer = spinWordsss("Just kidding there is still one more");
    expect(answer).toBe("Just gniddik ereht is llits one more");
});