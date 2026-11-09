# Pane.VisibleRange

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，它代表显示在窗口或窗格中的单元格区域。如果列或行只显示了一部分，则说明它是包括在区域之内的。只读。



## 语法

express.**VisibleRange**

express   一个代表 **Pane** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*此示例显示第一个窗口中活动窗格的可见单元格的数目。*/
function test() {
    alert("There are " + Windows.Item(1).ActivePane.VisibleRange.Cells.Count + " cells visible")
}
```


```JavaScript
/*此示例将活动窗口中第二个窗格的可见范围的所有单元格的背景颜色设置为红色。*/
function test() {
    ActiveWindow.Panes.Item(2).VisibleRange.Interior.Color = RGB(255, 0, 0);
}
```
