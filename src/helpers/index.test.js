import { getLetterMatchCount } from "./";

describe("getLetterMatchCount", () => {
  const secretWord = "party";
  test("return correct count-no matching letter", () => {
    const letterCount = getLetterMatchCount(secretWord, "xxqw");
    expect(letterCount).toBe(0);
  });
  test("3 macthing letter", () => {
    const letterCount = getLetterMatchCount(secretWord, "parme");
    expect(letterCount).toBe(3);
  });

  test("duplicate letters", () => {
    const letterCount = getLetterMatchCount(secretWord, "partyparty");
    expect(letterCount).toBe(5);
  });
});
