function gradingStudents(grades) {
  // Write your code here

  let finalGrade = [];
  grades.forEach((grade) => {
    const nextMultiple5 = Math.ceil(grade / 5) * 5;
    if (nextMultiple5 - grade < 3 && grade >= 38) {
      finalGrade.push(nextMultiple5);
    } else {
      finalGrade.push(grade);
    }
  });
  return finalGrade;

  // another to solve it

  //    let finalGrades = grades.map((grade) => {
  //        return grade >= 38 && grade % 5 >= 3 ? grade - ( grade % 5) +5 : grade;
  //    })
  //    return finalGrades
}
