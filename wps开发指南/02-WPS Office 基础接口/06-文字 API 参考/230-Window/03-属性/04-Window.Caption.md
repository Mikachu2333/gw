# Window.Caption

返回或设置显示在文档或应用程序窗口的标题栏的窗口的标题文本。可读/写 **String** 类型。



## 语法

express.**Caption**

express   一个代表 **Window** 对象的变量。

## 类型

string

## 说明


要将应用程序窗口的题注改为默认文本，请将该属性设置为空字符串（""）。



## 示例


```JavaScript
/*本示例显示Windows集合中的每个窗口的标题。*/
function test() {
    for (let i = 1; i <= Windows.Count; i++) {
        MsgBox(Windows.Item(i).Caption, null, `Window${i} Caption`)
    }
}
```


```JavaScript
/*本示例重新设置活动窗口的题注。*/
function test() {
    ActiveWindow.Caption = ""
    alert(ActiveWindow.Caption)
}
```


```JavaScript
/*本示例将活动窗口的题注设置为与活动文档的名称相同。*/
function test() {
    ActiveDocument.ActiveWindow.Caption = ActiveDocument.FullName
}
```


```JavaScript
/*本示例修改第二个窗口的标题，使其包括用户名。*/
function test() {
    Windows.Item(2).Caption = `${Application.UserName}'s copy of Word`
}
```
