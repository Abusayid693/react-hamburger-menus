export const amplifyString = (
  property: string | number | undefined,
  defaultV: string,
  addr: string
) => {
  if (property)
    return typeof property === 'string' ? property : property + addr;

  return defaultV;
};
