export const parseInlineStyle = (style = ''): object => {
  try {
    const data = JSON.parse(style);
    return data;
  } catch (err) {
    return {};
  }
};
export const stringifyInlineStyle = (style = {}): string => {
  try {
    const data = JSON.stringify(style);
    return data;
  } catch (err) {
    return '';
  }
};
