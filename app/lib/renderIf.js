renderIf = predicate => element => {
  if (predicate) {
    return element
  } else {
    return null
  }
};

export default renderIf;
