const coffeeMachine = require('../index');

test('Given "T:1:0" returns "Drink maker makes 1 tea with 1 sugar and a stick"', () => {
    //Given
    const input = "T:1:0";
    const expected = "Drink maker makes 1 tea with 1 sugar and a stick";

    //When
    const result = coffeeMachine(input);

    //Then
    expect(result).toBe(expected);
});
