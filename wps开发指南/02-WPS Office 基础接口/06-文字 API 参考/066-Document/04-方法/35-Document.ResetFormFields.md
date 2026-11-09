# Document.ResetFormFields

清除文档中的所有窗体域，准备再次填充窗体。



## 语法

express.**ResetFormFields()**

express   一个代表 **Document** 对象的变量。

## 返回值

void

## 说明


当文档中的域没有锁定时，可用 **ResetFormFields** 方法清除域。要在文档中的域处于锁定状态时清除域，请使用 **Protect** 方法。



## 示例


```JavaScript
/*本示例清除活动文档中的域。本示例假定活动文档包含窗体域。*/
function test() {
    Application.ActiveDocument.ResetFormFields()
}
```


```JavaScript
/*本示例提示用户是否清除文档中的所有窗体域，如果用户选择是，则清除第一个文档中的所有窗体域。*/
function test() {
    let response = MsgBox("是否清除文档中的所有窗体域？", jsYesNo)
    if (response == jsResultYes) {
        Documents.Item(1).ResetFormFields()
    }
}
```
