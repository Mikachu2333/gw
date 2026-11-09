# Axis.Width

以磅为单位返回对象的宽度。只读 **Double** 类型。



## 语法

express.**Width**

express   一个代表 **Axis** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中第一张图表的分类轴的宽度。*/
function test() {
    let axis = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlCategory)
    alert(`分类轴的宽度：${axis.Width} 磅`)
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第二个图表的数值轴的标题文本为“test”，则显示该数值轴的高度和宽度。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlValue)
    if (axis.AxisTitle.Caption == "test") {
        alert(`数值轴的宽度：${axis.Width} 磅\n数值轴的高度：${axis.Height} 磅`)
    }
}
```
