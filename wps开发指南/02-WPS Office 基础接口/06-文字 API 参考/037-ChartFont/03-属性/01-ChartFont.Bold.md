# ChartFont.Bold

如果字体格式为加粗，则该属性值为 **True** 。可读/写 **Variant** 类型。



## 语法

express.**Bold**

express   一个代表 **ChartFont** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例将活动文档中第一个图表的所有图表标题的字体设置为粗体。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.ChartTitle.Font.Bold = true
    }
}
```


```JavaScript
/*本示例显示活动文档上第一个形状中图表的图表标题的字体格式是否设置为粗体。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(1)
    if (shape.HasChart) {
        alert(shape.Chart.ChartTitle.Font.Bold)
    }
}
```
