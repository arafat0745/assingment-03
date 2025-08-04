/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here

if (
    fileName.startsWith("#") ||
    fileName.startsWith(".pdf") ||
    fileName.startsWith(".docx")
){
    console.log("store");

} else {
    console.log("Delete");
}