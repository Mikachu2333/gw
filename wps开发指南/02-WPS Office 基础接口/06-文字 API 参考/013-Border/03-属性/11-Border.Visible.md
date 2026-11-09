# Border.Visible

如果指定对象可见，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**Visible**

express   一个代表 **Border** 对象的变量。

## 类型

boolean

## 说明


对于任何对象，如果其 **Visible** 属性值为 **False** ，则某些方法和属性可能无法使用。



## 示例


```JavaScript
/*本示例如果选中带有边框的文本，则隐藏左边的边框*/
function test() {
    let bor = Application.Selection.Borders(wdBorderLeft)
    bor.Visible = false
}
```


```JavaScript
/*本示例如果选中带有边框的文本，且左边框隐藏，则将其显示并变更颜色为红色*/
function test() {
    let bor = Application.Selection.Borders(wdBorderLeft)
    if (!bor.Visible) {
        bor.Visible = true
        bor.Color = wdColorRed
    }
}
```
