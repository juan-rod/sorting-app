export const filterObj = (theKeys, theObj) =>
  theKeys.reduce((result, key) => {
    result[key] = theObj[key];
    return result;
  }, {});
export const filterDOB = dob => new Date(dob).toLocaleString().split(",");
export const capitalizeStr = str => str.charAt(0).toUpperCase() + str.slice(1);
