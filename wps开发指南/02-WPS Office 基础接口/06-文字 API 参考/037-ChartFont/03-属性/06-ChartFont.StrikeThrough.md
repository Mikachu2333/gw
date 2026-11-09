# ChartFont.StrikeThrough

如果文字中间有一条水平删除线，则该属性值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**StrikeThrough**

express   一个代表 **ChartFont** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例显示活动文档中第一个图表的第一个图例项文字中间是否有一条水平删除线。*/
function test() {
    let shape = ActiveDocument.InlineShapes(1)
    if (shape.HasChart) {
        alert(shape.Chart.Legend.LegendEntries(1).Font.StrikeThrough)
    }
}
```


```JavaScript
/*本示例判断活动文档上第一个形状中图表的第二个图例项文字中间是否有一条水平删除线，并通知用户。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(1)
    if (shape.Chart.Legend.LegendEntries(2).Font.StrikeThrough) {
        alert("文字中间有一条水平删除线")
    } else {
        alert("文字中间没有一条水平删除线")
    }
}
```
