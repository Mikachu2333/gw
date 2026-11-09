# ErrorBars.Name

返回对象的名称。只读 **String** 类型。



## 语法

express.**Name**

express   一个代表 **ErrorBars** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片中第一个图表的第一个系列的误差线的名称为“S1E”，则删除该误差线。*/
function test() {
    let errorBars = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).ErrorBars
    if (errorBars.Name == "S1E") {
        errorBars.Delete()
    }
}
```


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中第一个图表的第二个系列的误差线的名称。*/
function test() {
    let errorBars = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).ErrorBars
    alert(errorBars.Name)
}
```
