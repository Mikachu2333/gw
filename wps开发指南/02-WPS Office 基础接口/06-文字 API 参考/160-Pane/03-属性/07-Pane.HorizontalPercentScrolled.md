# Pane.HorizontalPercentScrolled

返回或设置水平滚动条位置（以文档宽度的百分比表示）。 **Long** 类型，可读写。



## 语法

express.**HorizontalPercentScrolled**

express   一个代表 **Pane** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例将 Document1 窗口的活动窗格水平滚动至最左边。*/
function test() {
    Windows.Item("Document1").Activate()
    Windows.Item("Document1").ActivePane.HorizontalPercentScrolled = 0
}
```


```JavaScript
/*本示例显示活动窗格的水平滚动位置。*/
function test() {
    alert(`${ActiveWindow.ActivePane.HorizontalPercentScrolled}%`)
}
```
