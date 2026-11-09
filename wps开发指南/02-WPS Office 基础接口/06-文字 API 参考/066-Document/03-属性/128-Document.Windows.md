# Document.Windows

返回一个 **Windows** 集合，该集合代表指定文档的所有窗口。只读。



## 语法

express.**Windows**

express   一个代表 **Document** 对象的变量。

## 类型

Windows

## 说明


有关返回集合中单个成员的信息，请参阅返回集合中的对象。



## 示例


```JavaScript
/*本示例显示 NewWindow 方法运行前后活动文档的窗口数目。*/
function test() {
    alert(ActiveDocument.Windows.Count + " window(s) " + ActiveDocument.Name)
    ActiveDocument.ActiveWindow.NewWindow()
    alert(ActiveDocument.Windows.Count + " windows " + ActiveDocument.Name)
}
```


```JavaScript
/*本示例在第一个文档上打开一个新窗口。*/
function test() {
    Documents.Item(1).Windows.Add()
}
```
