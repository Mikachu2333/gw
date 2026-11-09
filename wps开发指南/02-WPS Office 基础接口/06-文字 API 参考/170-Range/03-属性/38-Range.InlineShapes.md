# Range.InlineShapes

返回一个 **InlineShape** 集合，该集合代表范围中的所有 **InlineShapes** 对象。只读。



## 语法

express.**InlineShapes**

express   一个代表 **Range** 对象的变量。

## 类型

InlineShapes

## 示例


```JavaScript
/*本示例显示活动文档的主文档文章中内嵌形状的数目和活动文档中形状的数目。*/
function test() {
    let range = ActiveDocument.Content
    alert(`InlineShape = ${range.InlineShapes.Count}\nShape = ${ActiveDocument.Shapes.Count}`)
}
```


```JavaScript
/*本示例判断如果所选内容中第一个内嵌形状为图表，则将该图表的图例的字体颜色设为蓝色。*/
function test() {
    let inlineShape = Selection.Range.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        let chart = inlineShape.Chart
        chart.HasLegend = true
        chart.Legend.Font.Color = RGB(0, 0, 255)
    }
}
```
