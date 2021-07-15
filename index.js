function coffeeMachine(input) {
  const array = input.split(":");
  return `Drink maker makes 1 ${getDrink(array[0])} with ${getSugar(
    array[1]
  )} ${getStick(array[2])}`;
}

const getDrink = (input) => {
  if (input === "C") return "coffee";
  else if (input === "T") return "tea";
  return "chocolate";
};

const getSugar = (input) => {
  if (Number(input) === 1) {
    return "1 sugar";
  } else if (Number(input) > 1) {
    return `${input} sugars`;
  }
  return "no sugar";
};

const getStick = (input) => {
  return input ? "and a stick" : "- and therefore no stick";
};

module.exports = coffeeMachine;
