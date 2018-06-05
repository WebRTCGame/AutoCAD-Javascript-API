let title = "Calculator";
let Path = "http://127.0.0.1:8080/";
let templateFile = "calculator.html";
let param1 = "Title="+title;

let ConcatURL = (Path + templateFile);
Acad.Application.addPalette(title, ConcatURL);