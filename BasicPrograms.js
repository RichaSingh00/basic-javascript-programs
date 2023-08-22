const sum = (...numbers) => {
  if (!validation(numbers)) {
    return [0, "error"];
  }
  let num = 0;
  for (let index = 0; index < numbers.length; index++) {
    num += numbers[index];
  }
  return [num, "success"];
};
const subtract = (...numbers) => {
  if (!validation(numbers)) {
    return [0, "error"];
  }
  let num = numbers[0];
  for (let index = 1; index < numbers.length; index++) {
    num -= numbers[index];
  }
  return [num, "success"];
};
const multiply = (...numbers) => {
  if (!validation(numbers)) {
    return [0, "error"];
  }
  let num = 1;
  for (let index = 0; index < numbers.length; index++) {
    num *= numbers[index];
  }
  return [num, "success"];
};
const divide = (...numbers) => {
  if (!validation(numbers)) {
    return [0, "error"];
  }
  let num = numbers[0];
  for (let index = 1; index < numbers.length; index++) {
    num /= numbers[index];
  }
  return [num, "success"];
};
function validation(numbers) {
  return numbers.every((numbrs) => typeof numbrs === "number");
}
const ceil = (number) => {
  if (typeof number !== "number") {
    return [0, "error"];
  }
  return [Math.ceil(number), "success"];
};
const floor = (number) => {
  if (typeof number !== "number") {
    return [0, "Invalid input"];
  }
  return [Math.floor(number), "success"];
};
const factorial = (n) => {
  if (typeof n !== "number" || n < 0) {
    return [0, "error"];
  }
  if (n == 0 || n == 1) {
    return [1, "success"];
  }
  return [n * factorial(n - 1), "success"];
};
const factory = (operation) => {
  switch (operation) {
    case "sum":
      return sum;
    case "subtract":
      return subtract;
    case "multiply":
      return multiply;
    case "divide":
      return divide;
    case "ceil":
      return ceil;
    case "floor":
      return floor;
    case "factorial":
      return factorial;
    default:
      return ()=>{
        console.log("Undefined entry");
      };
  }
};
