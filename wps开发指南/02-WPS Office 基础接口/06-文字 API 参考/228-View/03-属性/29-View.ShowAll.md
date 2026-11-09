# View.ShowAll

如果显示所有非打印字符（如隐藏文字、制表符、空格和段落标记），则该属性值为 **True** 。可读写 **Boolean** 类型。



## 语法

express.**ShowAll**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在活动窗口中显示所有非打印字符。*/
function test() {
    ActiveDocument.ActiveWindow.View.ShowAll = true
}
```


```JavaScript
/*本示例在第一个窗口中切换非打印字符的显示方式。*/
function test() {
    Windows.Item(1).View.ShowAll = !Windows.Item(1).View.ShowAll
}
```
