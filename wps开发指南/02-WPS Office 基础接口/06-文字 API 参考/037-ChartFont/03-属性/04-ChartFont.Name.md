# ChartFont.Name

返回或设置对象的名称。可读/写 **String** 类型。



## 语法

express.**Name**

express   一个代表 **ChartFont** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例显示活动文档中第一个图表的第一个图例项字体名称。*/
function test() {
    let shape = ActiveDocument.InlineShapes(1)
    if (shape.HasChart) {
        alert(shape.Chart.Legend.LegendEntries(1).Font.Name)
    }
}
```


```JavaScript
/*本示例设置活动文档上第一个形状中图表的第二个图例项字体名称。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(1)
    shape.Chart.Legend.LegendEntries(2).Font.Name = "黑体"
}
```
