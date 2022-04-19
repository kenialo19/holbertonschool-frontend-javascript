export default function getStudentIdsSum(objarray) {
  return objarray.reduce((sum, { id }) => sum + id, 0);
}
