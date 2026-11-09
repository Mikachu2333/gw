# View.ShowOptionalBreaks

如果 WPS 显示可选换行符，则该属性值为 **True** 。 **Boolean** 类型，可读写



## 语法

express.**ShowOptionalBreaks**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动窗口中的可选换行符。*/
function test() {
    ActiveDocument.ActiveWindow.View.ShowOptionalBreaks = true
}
```


```JavaScript
/*本示例显示第一个窗口的活动窗格是否展示可选换行符。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    alert(view.ShowOptionalBreaks)
}
```
