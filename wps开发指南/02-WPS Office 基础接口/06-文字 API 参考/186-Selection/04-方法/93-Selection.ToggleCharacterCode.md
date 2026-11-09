# Selection.ToggleCharacterCode

在 Unicode 字符和其相应的十六进制值之间切换选定内容。



## 语法

express.**ToggleCharacterCode()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例在光标位置输入十六进制值“20ac”，并将其切换为相应的 Unicode 字符。*/
function test() {
    Selection.TypeText("20ac")
    Selection.ToggleCharacterCode()
}
```


```JavaScript
/*本示例在第一个窗口的光标位置插入一个 Unicode 字符，并将其切换为相应的十六进制值。*/
function test() {
    Windows.Item(1).Selection.Text = "1"
    Windows.Item(1).Selection.ToggleCharacterCode()
}
```
