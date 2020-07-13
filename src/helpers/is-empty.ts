export const isEmptyArr = <T>(array: T[]) => !array.length;

export const isEmptyObj = <T>(obj: T) => {
  for (var i in obj) {
    return false;
  }
  return true;
};
