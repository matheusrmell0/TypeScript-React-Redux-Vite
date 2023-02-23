interface CountList {
  [key: string]: number;
}
export default function countBy(arr: (string | number)[]) {
  return arr.reduce((acc: CountList, value) => {
    if (acc[value]) {
      acc[value] += 1;
    } else acc[value] = 1;
    return acc;
  }, {});
}
