export const checkSimilarity = (a: string, b: string) => {
  const aWords = a.replace(/(\s)+/g, ' ').trim().split(' ');
  const bWords = b.replace(/(\s)+/g, ' ').trim().split(' ');
  const aSet = new Set(aWords);
  const bSet = new Set(bWords);
  const intersection = new Set([...aSet].filter((x) => bSet.has(x)));
  return intersection.size / aWords.length;
};

// if number returned is above 0.5, then the two strings are similar
// if number returned is below 0.5, then the two strings are not similar
