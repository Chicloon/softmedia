export const addExponents = (str: string | number) =>
  str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
