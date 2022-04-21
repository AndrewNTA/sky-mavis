export const findOption = (id, options) => {
  for (let i = 0; i < options.length; i++) {
    if(options[i].id === id) {
      return options[i];
    }
  }
  return null;
};
