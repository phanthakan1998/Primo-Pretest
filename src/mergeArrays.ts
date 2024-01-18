export function merge(collection1: number[], collection2: number[]): number[] {
  let mergedArray: number[] = [];
  let i = 0;
  let j = 0;
  while (i < collection1.length && j < collection2.length) {
    if (collection1[i] <= collection2[j]) {
      mergedArray.push(collection1[i]);
      i++;
    } else {
      mergedArray.push(collection2[j]);
      j++;
    }
  }

  for (; i < collection1.length; i++) {
    mergedArray.push(collection1[i]);
  }

  for (; j < collection2.length; j++) {
    mergedArray.push(collection2[j]);
  }

  return mergedArray;
}
