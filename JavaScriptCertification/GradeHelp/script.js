function getAverage(scores) {
    let sum = scores.reduce((a,n) => a + n, 0); //Summerar alla tal i arrayen
    let averageScore = sum / scores.length; // Delar summan med antalet tal i arrayen

    return averageScore;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

function getGrade(score) {
    if(score <= 59){
      return "F";
    } else if(score === 60 || score < 70){
      return "D";
    }else if(score === 70 || score < 80){
      return "C";
    }else if(score === 80 || score < 90){
      return "B";
    }else if(score === 90 || score < 99){
      return "A";
    }else if(score === 100){
      return "A++";
    }
  }

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

function hasPassingGrade(score) {
    let studentScore = getGrade(score);
        if(studentScore === "F"){
            return false;
        }else{
            return true;
        }
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

function studentMsg(totalScores, studentScore) {
   let average= getAverage(totalScores);
   let grade= getGrade(studentScore);
   let result= hasPassingGrade(studentScore);

    if(result === true){
        return "Class average: " + average+". Your grade: " + grade + ". You passed the course."
    } else{
         return "Class average: " + average+". Your grade: " + grade + ". You failed the course."
    }

}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));