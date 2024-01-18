import { merge } from "../src/mergeArrays";

describe("merge", () => {
  it("should merge two arrays", () => {
    const arr1 = [1, 3, 5, 7];
    const arr2 = [2, 4, 6, 8];
    const result = merge(arr1, arr2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it("should merge two arrays in case 2 arrays length is not equal", () => {
    const arr1 = [1, 3, 5, 7, 9, 10];
    const arr2 = [2, 4, 6, 8];
    const result = merge(arr1, arr2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("should handle empty", () => {
    const arr1: number[] = [];
    const arr2 = [2, 4, 6, 8];
    const result = merge(arr1, arr2);
    expect(result).toEqual([2, 4, 6, 8]);
  });
});
