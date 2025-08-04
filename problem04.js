/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here

if (
    fileName.startsWith("#") ||
    fileName.endsWith(".pdf") ||
    fileName.endsWith(".docx")
){
    console.log("store");

} else {
    console.log("Delete");
}