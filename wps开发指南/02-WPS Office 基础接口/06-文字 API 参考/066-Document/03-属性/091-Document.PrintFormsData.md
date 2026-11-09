# Document.PrintFormsData

如果 WPS 仅将相应联机窗体中的键入的数据打印在预打印窗体上，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**PrintFormsData**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 仅打印联机窗体域的数据内容，然后开始打印活动文档。*/
function test() {
    ActiveDocument.PrintFormsData = true
    ActiveDocument.PrintOut()
}
```


```JavaScript
/*本示例显示“选项”对话框“打印”选项卡上“只用于当前文档的选项”区域中“仅打印窗体域内容”复选框当前的状态。*/
function test() {
    let formsData = ActiveDocument.PrintFormsData
    alert(formsData)
}
```
