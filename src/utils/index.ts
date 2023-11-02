function removeUnderscorePrefix(obj: any) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  let newObj: any = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    let newKey = key.startsWith("_") ? key.slice(1) : key;
    newObj[newKey] = removeUnderscorePrefix(obj[key]);
  }

  return newObj;
}

export { removeUnderscorePrefix };
