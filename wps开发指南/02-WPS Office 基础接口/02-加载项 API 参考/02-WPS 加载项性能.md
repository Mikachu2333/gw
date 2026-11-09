#  WPS 加载项性能

---

 WPS 加载项为了保证WPS 应用程序的安全性与稳定性，采用多进程架构，把网页渲染端和 WPS 应用进程分离； 同时通过共享内存、事件对象等技术，实现了一套进程间快速同步调用的机制。 在性能测试过程中，为10000个单元格赋值耗时2000毫秒，充分满足要求。

```JavaScript
function TestSetCellFormula() 
{
	var cells = Application.ActiveWorkbook.ActiveSheet.Cells;
	let date = new Date();
	let start = date.getTime();
	for(var i = 1; i <= 100; ++i) 
	{ 
		for(var j = 1; j <= 100; ++j) 
		{
			cells.Item(i, j).Formula = i + j; 
		} 
	} 
	date = new Date(); 
	let end = date.getTime(); 
	alert(end - start); return; 
}
```
