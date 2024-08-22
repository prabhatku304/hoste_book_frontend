export const replaceAt = (val: string, index: number, newChar: string) => {
  return (
    val.substring(0, index) + newChar + val.substring(index + newChar.length)
  );
};

export const numberToOrdinal = (number: number) => {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const absNumber = Math.abs(Number(number));

  // Check for special cases: 11th, 12th, 13th
  if (absNumber >= 11 && absNumber <= 13) {
    return number + 'th';
  }

  // Get the last digit of the number
  const lastDigit = absNumber % 10;

  // Determine the appropriate suffix
  const suffix = suffixes[lastDigit] || 'th';

  // Return the number with the suffix
  return number + suffix;
};
