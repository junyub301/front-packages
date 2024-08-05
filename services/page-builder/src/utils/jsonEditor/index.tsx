export const formatObjectToJson = (obj: object) =>
  JSON.stringify(obj, null, `\t`);
