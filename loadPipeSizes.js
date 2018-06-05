let title = "Pipe Sizes";
let Path = "http://127.0.0.1:8080/";
let Fragment = "pipeSizesFrag";
let templateFile = "app.html?";
let param1 = "Title="+title;
let param2 = "&Frag=" + Fragment;

let ConcatURL = (Path + templateFile + param1 + param2);
Acad.Application.addPalette(title, ConcatURL);