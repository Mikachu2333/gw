# Style.Borders

返回一个 **Borders** 集合，它代表样式或单元格区域（包括定义为条件格式一部分的区域）的边框。



## 语法

express.**Borders**

express   一个代表 **Style** 对象的变量。

## 类型

Borders

## 示例


```JavaScript
/*此示例将 Sheet1 中单元格 B2 的底部边框颜色设置为红色细边框。*/
function test() {
    let border = Application.Worksheets.Item("Sheet1").Range("B2").Style.Borders.Item(xlEdgeBottom)
    border.LineStyle = xlContinuous
    border.Weight = xlThin
    border.ColorIndex = 3
}
```


```JavaScript
/*本示例显示活动工作表中单元格区域左边框粗细是否为薄。*/
function test() {
    let range = ActiveSheet.Range("C3:D5")
    alert(range.Style.Borders.Item(xlEdgeLeft).Weight == xlThin)
}
```
