export const validateNumber = (value: string, min?: number, max?: number) => {
  // no letter 'e', max 2 decimals
  const decimalRegex = /^\d*\.?\d{0,2}$/;
  if (!decimalRegex.test(value)) {
    return false;
  }
  const numValue = parseFloat(value);
  if (
    (min !== undefined && numValue < min) ||
    (max !== undefined && numValue > max)
  ) {
    return false;
  }
  return true;
};
