export const DEFAULT_STRING_LENGTH = 150;
export const truncateString = (str, len = DEFAULT_STRING_LENGTH) => {
  if (str.split('').length <= len) {
    return str;
  }
  return str.split('').slice(0, len).join('') + "...";
};
