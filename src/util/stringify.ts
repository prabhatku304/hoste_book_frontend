export const jsonStringify = (value?: any) => {
  try {
    if (!value) return '';
    const data = JSON.stringify(value);
    return data;
  } catch {
    return '';
  }
};

export const jsonParse = (value?: string, defVal = {}) => {
  try {
    if (!value) return defVal;
    const data = JSON.parse(value);
    return data;
  } catch {
    return defVal;
  }
};
