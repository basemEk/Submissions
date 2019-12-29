const stringSize = text => {
  return text.length;
};
const replaceCharacterE = text => {
  return text.replace("e", " ");
};
const concatString = (text1, text2) => {
  return text1.concat(text2);
};
const showChar5 = text => {
  return text[4];
};
const showChar9 = text => {
  return text.substring(0, 9);
};
const toCapitals = text => {
  let x = text.toUpperCase("Another useful function");
  return x;
};
const toLowerCase = text => {
  return text.toLowerCase("This is a sentence!");
};
const removeSpaces = text => {
  let y = text.trim();
  return y;
};
const IsString = text => {
  return typeof text;
};

const getExtension = text => {
  return text.split(".").pop();
};

const countSpaces = text => {
  var countSpaces = text.split(" ").length - 1;
  return countSpaces;
};
const InverseString = text => {};

const power = (x, y) => {
  Math.pow(x, y);
};
const absoluteValue = num => {
  Math.abs(-5);
};
const absoluteValueArray = array => {
  Math.abs([-5, -50, -25, -568]);
};
const circleSurface = radius => {
  return 2 * radius * Math.PI;
};
const hypothenuse = (ab, ac) => {
  return Math.hypot(5, 8);
};
const BMI = (weight, height) => {
  return weight / Math.pow(height, 2);
};

const createLanguagesArray = () => {
  return (languages = ["HTML", "CSS", "Java", "PHP"]);
};

const createNumbersArray = () => {
  return (numbers = [0, 1, 2, 3, 4, 5]);
};

const replaceElement = languages => {
  return (replaceElement[2] = "Javascript");
};

const addElement = languages => {
  return languages.push(-2, -1);
};

const addNumberElement = numbers => {
  return numbers.push(-2, -1);
};

const removeFirst = languages => {};

const removeLast = languages => {};

const convertStrToArr = social_arr => {};

const convertArrToStr = languages => {};

const sortArr = social_arr => {};

const invertArr = social_arr => {};
