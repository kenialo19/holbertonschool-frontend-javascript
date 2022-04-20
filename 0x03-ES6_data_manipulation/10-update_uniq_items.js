export default function updateUniqueItems(goceries) {
  if (goceries instanceof Map === false) throw Error('Cannot process');
  goceries.forEach((key, value) => {
    if (key === 1) {
      goceries.set(value, 100);
    }
  });
  return goceries;
}
