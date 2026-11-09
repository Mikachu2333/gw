# View.ShowSpaces

如果显示空格字符，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ShowSpaces**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在选定内容之前插入空格，并显示活动窗口中的空格字符。*/
function test() {
    Selection.InsertBefore(" ")
    ActiveDocument.ActiveWindow.View.ShowSpaces = true
}
```


```JavaScript
/*本示例显示第一个窗口的活动窗格是否展示空格字符。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    alert(view.ShowSpaces)
}
```
