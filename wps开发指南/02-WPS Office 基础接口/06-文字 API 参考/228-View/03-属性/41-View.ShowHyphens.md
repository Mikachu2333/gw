# View.ShowHyphens

如果为 **True** ，则显示可选连字符，该连字符指明在何处断开处于行尾的字。 **Boolean** 类型，可读写。



## 语法

express.**ShowHyphens**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在选定内容之前插入一个可选连字符，然后在活动窗口显示可选连字符。*/
function test() {
    Selection.InsertBefore(String.fromCharCode(31))
    ActiveDocument.ActiveWindow.View.ShowHyphens = true
}
```


```JavaScript
/*本示例显示第一个窗口的活动窗格是否展示可选连字符。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    alert(view.ShowHyphens)
}
```
