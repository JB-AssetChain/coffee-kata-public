const coffeeMachine = require("../index");

test('Given "T:1:0" returns "Drink maker makes 1 tea with 1 sugar and a stick"', () => {
  //Given
  const input = "T:1:0";
  const expected = "Drink maker makes 1 tea with 1 sugar and a stick";

  //When
  const result = coffeeMachine(input);

  //Then
  expect(result).toBe(expected);
});
/// comment
test('Given "H::" returns "Drink maker makes 1 chocolate with no sugar - and therefore no stick"', () => {
  //Given
  const input = "H::";
  const expected =
    "Drink maker makes 1 chocolate with no sugar - and therefore no stick";

  //When
  const result = coffeeMachine(input);

  //Then
  expect(result).toBe(expected);
});
