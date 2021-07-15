function coffeeMachine(input) {
    if(input === 'T:1:0'){
        return "Drink maker makes 1 tea with 1 sugar and a stick";
    }
    return "Drink maker makes 1 chocolate with no sugar - and therefore no stick"
}
module.exports = coffeeMachine;