export default function getStudentsByLocation(objarray, city) {
  return objarray.filter((iterator) => iterator.location === city);
}
