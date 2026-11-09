# ErrorBars.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **ErrorBars** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*此示例将活动文档上第一个形状中图表的第一个系列的误差线删除。*/
function test() {
    let errorBars = Application.ActiveDocument.Shapes.Item(1).Chart.SeriesCollection(1).ErrorBars
    errorBars.Delete()
}
```


```JavaScript
/*本示例将活动文档中第一张图表的第二个系列的误差线删除。*/
function test() {
    let errorBars = Application.ActiveDocument.InlineShapes(1).Chart.SeriesCollection(2).ErrorBars
    errorBars.Delete()
}
```
