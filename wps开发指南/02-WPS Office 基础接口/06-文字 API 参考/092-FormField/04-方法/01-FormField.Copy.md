# FormField.Copy

将指定窗体域复制到剪贴板。



## 语法

express.**Copy()**

express   一个代表 **FormField** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将活动文档上名为“CheckBox1”的窗体域复制到剪贴板，并粘贴到光标处。*/
function test() {
    ActiveDocument.FormFields.Item("CheckBox1").Copy()
    Selection.Paste()
}
```


```JavaScript
/*本示例将所选内容中第一个窗体域复制到剪贴板。*/
function test() {
    Selection.FormFields.Item(1).Copy()
}
```
