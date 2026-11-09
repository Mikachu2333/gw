# View.WrapToWindow

如果文字在文档窗口的右边缘换行，而不是在右边距或文本栏的右边界，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**WrapToWindow**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 说明


该属性在页面视图或 Web 版式视图中无效。



## 示例


```JavaScript
/*本示例使文本换行，以容纳在活动窗口中。*/
function test() {
    let view = ActiveDocument.ActiveWindow.View
    view.Type = wdNormalView
    view.WrapToWindow = true
}
```


```JavaScript
/*本示例显示第一个窗口的活动窗格中文字是否在右边缘换行。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    alert(view.WrapToWindow)
}
```
