# ChartFont.Size

返回或设置字号。可读/写 **Variant** 类型。



## 语法

express.**Size**

express   一个代表 **ChartFont** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例将活动文档中第一个图表的标题字号设置为 12 磅。*/
function test() {
    let shape = ActiveDocument.InlineShapes(1)
    if (shape.HasChart) {
        shape.Chart.ChartTitle.Font.Size = 12
    }
}
```


```JavaScript
/*本示例显示活动文档上第一个形状中图表的标题字号大小。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(1)
    if (shape.HasChart) {
        alert(shape.Chart.ChartTitle.Font.Size)
    }
}
```
