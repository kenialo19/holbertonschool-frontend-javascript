export default function hasValuesFromArray(set, arr) {
  let p = false;
  arr.forEach((element) => {
    p = set.has(element);
  });
  return p;
}
