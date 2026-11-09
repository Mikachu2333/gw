# Gridlines.Name

返回的对象的名称。只读 **String** 。



## 语法

express.**Name**

express   一个代表 **Gridlines** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例判断如果活动演示文稿的第一张幻灯片中第一张图表的数值轴拥有主要网格线，则显示该网格线的名称。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let axis = shape.Chart.Axes(xlValue)
        if (axis.HasMajorGridlines) {
            alert(axis.MajorGridlines.Name)
        }
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的类别轴的次要网格线的名称。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.Axes(xlCategory)
    alert(axis.MinorGridlines.Name)
}
```
