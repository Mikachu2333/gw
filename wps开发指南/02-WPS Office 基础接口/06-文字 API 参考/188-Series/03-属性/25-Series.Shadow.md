# Series.Shadow

返回或设置一个表示对象是否有阴影的值。可读/写 **Boolean** 类型。



## 语法

express.**Shadow**

express   一个代表 **Series** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置活动文档中第一个图表的第一个系列的阴影*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.SeriesCollection(1).Shadow = true
    }
}
```


```JavaScript
/*本示例显示选中的第一个图表的第二个系列是否具有阴影。*/
function test() {
    let series = Selection.InlineShapes.Item(1).Chart.SeriesCollection(2)
    alert(series.Shadow)
}
```
