# ErrorBars.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **ErrorBars** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例判断如果活动文档上第一个形状中图表的第一个系列的误差线名称为“S1E”，则选中该误差线。*/
function test() {
    let errorBars = Application.ActiveDocument.Shapes.Item(1).Chart.SeriesCollection(1).ErrorBars
    if (errorBars.Name == "S1E") {
        errorBars.Select()
    }
}
```


```JavaScript
/*本示例选中活动文档中第一张图表的第二个系列的误差线。*/
function test() {
    let errorBars = Application.ActiveDocument.InlineShapes(1).Chart.SeriesCollection(2).ErrorBars
    errorBars.Select()
}
```
