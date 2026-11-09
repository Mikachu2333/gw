# Pane.VerticalPercentScrolled

返回或设置垂直滚动条的位置（以文档长度的百分比表示）。可读写 **Long** 类型。



## 语法

express.**VerticalPercentScrolled**

express   一个代表 **Pane** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例将 Document1 窗口的活动窗格垂直滚动至结尾。*/
function test() {
    let window = Windows.Item("Document1")
    window.Activate()
    window.ActivePane.VerticalPercentScrolled = 100
}
```


```JavaScript
/*本示例显示第一个窗格的垂直滚动位置。*/
function test() {
    alert(`${ActiveWindow.Panes.Item(1).VerticalPercentScrolled}%`)
}
```
