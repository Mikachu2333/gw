# Chart.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **Chart** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例判断如果活动文档上第一个内嵌形状为图表，则删除该图表。*/
function test() {
    if (ActiveDocument.InlineShapes(1).HasChart) {
        ActiveDocument.InlineShapes(1).Chart.Delete()
    }
}
```


```JavaScript
/*本示例遍历活动文档内所有图表，判断如果图表标题为成绩表，则删除该图表。*/
function test() {
    let inlineShapes = ActiveDocument.InlineShapes
    for (let i = 1; i <= inlineShapes.Count; i++) {
        if (inlineShapes.Item(i).HasChart) {
            let chart = inlineShapes.Item(i).Chart
            if (chart.HasTitle && chart.ChartTitle.Text == "成绩表") {
                chart.Delete()
            }
        }
    }
}
```
