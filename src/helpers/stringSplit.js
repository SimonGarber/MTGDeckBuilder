const stringSplit = someString => {
  const result = someString
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`'~()]/g, "")
    .split(" ")
    .join("-");
  return result;
};

export default stringSplit;
