function calculateCurrentGrade(){
var hw = (document.getElementById("Homework Grades").value);
    var hwToArray = convertStringToArray(hw);
var hwArrayToNumber = convertArrayStringToNumber(hwToArray);
var hwAverage = averageArray(hwArrayToNumber);
var hwWeighted = hwAverage * (document.getElementById("Homework Weight").value / 100);
var hwWeight = parseInt(document.getElementById("Homework Weight").value);
rowColor("Homework", hwAverage);
console.log(hwAverage);
console.log(hwWeighted);

var tests = (document.getElementById("Test Grades").value);
var testsToArray = convertStringToArray(tests);
var testsArrayToNumber = convertArrayStringToNumber(testsToArray);
var testsAverage = averageArray(testsArrayToNumber);
var testsWeighted = testsAverage * (document.getElementById("Test Weight").value / 100);
var testWeight = parseInt(document.getElementById("Test Weight").value);
rowColor("Tests", testsAverage);
console.log(testsAverage);
console.log(testsWeighted);

var cw = (document.getElementById("Classwork Grades").value);
var cwToArray = convertStringToArray(cw);
    var cwArrayToNumber = convertArrayStringToNumber(cwToArray);
var cwAverage = averageArray(cwArrayToNumber);
var cwWeighted = cwAverage * (document.getElementById("Classwork Weight").value / 100);
var cwWeight = parseInt(document.getElementById("Classwork Weight").value);
rowColor("Classwork", cwAverage);
console.log(cwAverage);
console.log(cwWeighted);

var midterm = (document.getElementById("Midterm Grade").value);
var midtermArrayToNumber = convertArrayStringToNumber(midterm);
var midtermWeighted = midtermArrayToNumber * (document.getElementById("Midterm Weight").value / 100);
console.log(midtermWeighted);
var midtermWeight = parseInt(document.getElementById("Midterm Weight").value);
rowColor("Midterm", midtermArrayToNumber);
var grade = (hwWeighted + testsWeighted + cwWeighted + midtermWeighted);
document.getElementById("Current Grade").innerHTML = grade + "%";
var failure = "Something isn't adding up :( Try some different numbers!";
var sumWeights = (hwWeight + cwWeight + testWeight + midtermWeight);
console.log(sumWeights);
if (sumWeights !== 100){
    document.getElementById("Fail").innerHTML = failure;
}else {
document.getElementById("Fail").innerHTML = "";
return grade;
}

}

function calculateGradeNeeded(){
    var currentGrade = calculateCurrentGrade();
    var desiredGrade = parseInt(document.getElementById("Desired Grade").value);
    var finalWeight = parseInt(document.getElementById("Final Weight").value);
    var weight = (1 - (finalWeight/100));
    var currentWeight = currentGrade * weight;
    var gradeNeeded = (desiredGrade - currentWeight) / (finalWeight / 100);
    console.log(gradeNeeded);
    document.getElementById("Grade Needed").innerHTML = parseInt(gradeNeeded) + "%";
}

function convertStringToArray(str){
     var arr = str.split(",");
     return arr;
}

function convertArrayStringToNumber(arr){
    for (var i = 0; i < arr.length; i++){
         arr[i] = parseInt(arr[i]);
    }
    return arr;
}

function averageArray(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
       sum += arr[i];
    }
    avg = sum/arr.length;
    return avg;
}

function rowColor(arr,row){
    if(arr <= 60) {
        document.getElementById(row).style.background = "red";
    }
    if(arr >= 60 && arr <= 69){
        document.getElementById(row).style.background = "orange";
    }
    if(arr >= 70 && arr <= 79){
        document.getElementById(row).style.background = "blue";
    }
    if(arr >= 80 && arr <= 89){
        document.getElementById(row).style.background = "green";
    }
}