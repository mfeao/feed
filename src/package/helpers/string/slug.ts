export const slug = (input: string): string => {
  return input
    .toLowerCase()
    .replace(/\W/g, '-')
    .replace(/-+/g, '-')
    .replace(/-$/g, '');
};
