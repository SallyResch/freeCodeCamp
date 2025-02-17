function getAverage(scores) {
  let sum = scores.reduce((a, n) => a + n, 0);
  return sum / scores.length;
}
function getGrade(score) {
  if (score < 60) return "F";
  if (score < 70) return "D";
  if (score < 80) return "C";
  if (score < 90) return "B";
  if (score < 100) return "A";
  return "A++";
}
function hasPassingGrade(score) {
  return score >= 60;
}
function studentMsg(totalScores, studentScore) {
  let average = getAverage(totalScores).toFixed(2);
  let grade = getGrade(studentScore);
  let result = hasPassingGrade(studentScore);
  return `Class average: ${average}<br>Your grade: ${grade}<br>You ${result ? "passed" : "failed"} the course.`;
}
document.getElementById("gradeForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let scores = document.getElementById("scores").value.split(",").map(Number);
  let studentScore = Number(document.getElementById("studentScore").value);
  document.getElementById("result").innerHTML = studentMsg(scores, studentScore);
});