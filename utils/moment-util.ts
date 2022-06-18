export const getMomentDetails = (momentObj: any) => {
  return {
    momentObj,
    timestamp: +momentObj,
    relativeReadable: momentObj.calendar(),
    inStringHKT: momentObj.format("YYYY-MM-DD HH:mm:ssZ"),
    // inStringUTC: momentObj.utc().format("YYYY-MM-DD HH:mm:ssZ"),
  };
};
