let title = "test";
let Path = "c:/Temp/AJA/";
let Fragment = "pipeSizesFrag";
let templateFile = "app.html?";
let param1 = "Title="+title;
let param2 = "&Frag=" + Fragment;

let ConcatURL = (Path + templateFile + param1 + param2);
Acad.Application.addPalette(title, ConcatURL);