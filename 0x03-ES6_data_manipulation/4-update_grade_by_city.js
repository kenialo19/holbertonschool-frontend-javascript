export default function updateStudentGradeByCity(objarray, city, newGrade) {
  return objarray
    .filter((objarray) => objarray.location === city)
    .map((objarray) => {
      const grades = newGrade.find((grade) => grade.studentId === objarray.id);
      const grade = grades ? grades.grade : 'N/A';
      return { ...objarray, grade };
    });
}
