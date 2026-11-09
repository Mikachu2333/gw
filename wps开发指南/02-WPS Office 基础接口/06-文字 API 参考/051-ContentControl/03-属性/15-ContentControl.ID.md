# ContentControl.ID

返回一个代表内容控件标识的 **String** 类型的值。只读。



## 语法

express.**ID**

express   一个代表 **ContentControl** 对象的变量。

## 类型

string

## 说明


 **ID** 属性是一个内部号码，您不能更改它，但可以使用它在代码中标识内容控件。此号码对于每个内容控件都是唯一的，并且不会更改。

在运行时获取 ID 属性值时，它将作为无符号值返回。但是，当保存为 Office Open XML 文件格式时，它将保存为有符号值。如果您的解决方案尝试以编程方式返回的值映射到以文件格式保存的值，则必须检查从此属性获取的值的无符号和有符号版本。



## 示例


```JavaScript
/*本示例显示活动文档中第一个内容控件的 ID。*/
function test() {
    let control = ActiveDocument.ContentControls.Item(1)
    alert(control.ID)
}
```


```JavaScript
/*本示例在光标处插入活动文档上第二个内容控件的 ID。*/
function test() {
    let control = ActiveDocument.ContentControls.Item(2)
    Selection.TypeText(control.ID)
}
```
