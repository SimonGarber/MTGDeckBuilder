const stringSplit = someString => {
  const result = someString
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`'~()]/g, "")
    .split(" ");
  return result;
};

export default stringSplit;
