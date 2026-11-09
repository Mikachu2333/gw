# Series.Name

返回或设置对象的名称。可读/写 **String** 类型。



## 语法

express.**Name**

express   一个代表 **Series** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动演示文稿上第一张幻灯片中第一个图表的第一个系列的名称。须先点击“编辑数据”打开WPS表格，再执行本示例。*/
function test() {
    let Shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (Shape.HasChart) {
        alert(Shape.Chart.SeriesCollection(1).Name)
    }
}
```


```JavaScript
/*本示例显示第一篇演示文稿上第一张幻灯片中第一个图表的第三个系列的名称。须先点击“编辑数据”打开WPS表格，再执行本示例。*/
function test() {
    let Shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    if (Shape.HasChart) {
        alert(Shape.Chart.SeriesCollection(3).Name)
    }
}
```
