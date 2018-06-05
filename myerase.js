Acad.Editor.addCommand("JSCOMMAND","MYERASE","MYERASE",Acad.CommandFlag.TRANSPARENT,callback);

function callback()
{
	Acad.Editor.executeCommand("_erase","all","");
}