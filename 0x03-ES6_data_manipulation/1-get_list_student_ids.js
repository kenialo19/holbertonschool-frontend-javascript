export default function getListStudentIds(objarray) {
  if (Array.isArray(objarray)) {
    return objarray.map((iterator) => iterator.id);
  }
  return [];
}
