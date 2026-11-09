# ErrorBars.Name

返回对象的名称。只读 **String** 类型。



## 语法

express.**Name**

express   一个代表 **ErrorBars** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例判断如果活动文档上第一个形状中图表的第一个系列的误差线名称为“S1E”，则删除该误差线。*/
function test() {
    let errorBars = Application.ActiveDocument.Shapes.Item(1).Chart.SeriesCollection(1).ErrorBars
    if (errorBars.Name == "S1E") {
        errorBars.Delete()
    }
}
```


```JavaScript
/*本示例显示活动文档上第一张图表中第一个系列的误差线名称。*/
function test() {
    let errorBars = Application.ActiveDocument.InlineShapes(1).Chart.SeriesCollection(1).ErrorBars
    alert(errorBars.Name)
}
```
