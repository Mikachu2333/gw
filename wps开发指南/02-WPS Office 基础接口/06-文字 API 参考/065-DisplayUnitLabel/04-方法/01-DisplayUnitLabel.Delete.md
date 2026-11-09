# DisplayUnitLabel.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例删除活动文档上第一个内嵌图表的数值轴的单位标签。*/
function test() {
    let displayUnitLabel = ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.Delete()
}
```


```JavaScript
/*本示例判断如果第一个文档上第一个形状中图表的数值轴的单位标签的标题为“千”，则删除该单位标签。*/
function test() {
    let displayUnitLabel = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    if (displayUnitLabel.Caption == "千") {
        displayUnitLabel.Delete()
    }
}
```
