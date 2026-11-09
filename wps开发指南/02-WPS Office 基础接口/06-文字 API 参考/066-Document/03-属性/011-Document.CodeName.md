# Document.CodeName

返回指定文档的代码名称。 **String** 类型，只读。



## 语法

express.**CodeName**

express   一个代表 **Document** 对象的变量。

## 类型

string

## 说明


代码名称是保存文档的事件宏的模块名。该模块的默认名为“ThisDocument”，可在“工程”窗口中查看该模块。有关使用 Document 对象的事件的内容，请参阅使用 Document 对象的事件。



## 示例


```JavaScript
/*本示例显示活动文档的代码名称。*/
function test() {
    alert(ActiveDocument.CodeName)
}
```


```JavaScript
/*本示例在光标处插入第一个文档的名称和代码名称。*/
function test() {
    let document = Documents.Item(1)
    Selection.TypeText(`文档的名称：${document.Name}\n文档的代码名称：${document.CodeName}`)
}
```
