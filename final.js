/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here

var landPerBrother = area/2;
console.log(landPerBrother);








/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here

if(money >=25000 ){
console.log("laptop");
} else if(money >=10000){
console.log("cycle");
} else{
    console.log("chocolate");
}









/** Problem -03 ( Medicine Planner ) */
var lastDay = 30 ;
//write your code here

for(var day = 1; day <= lastDay; day++){
    if(day % 3 === 0){
        console.log(day + " - madicine");
    } else {
        console.log(day + " - rest");
    }

}










/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here

if (
    fileName.startsWith("#") ||
    fileName.endsWith(".pdf") ||
    fileName.endsWith(".docx")
){
    console.log("Store");

} else {
    console.log("Delete");
}









/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here

var generateEmail = student.name + student.roll + "." + student.department + "@ph.ac.bd";

console.log(generateEmail);



















