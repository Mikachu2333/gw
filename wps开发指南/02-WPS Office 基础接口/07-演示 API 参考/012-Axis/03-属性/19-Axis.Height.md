# Axis.Height

以磅为单位返回对象的高度。只读 **Double** 类型。



## 语法

express.**Height**

express   一个代表 **Axis** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中第一张图表的数值坐标轴的高度。*/
function test() {
    let axis = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlValue)
    alert(axis.Height)
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片中第二张图表的分类坐标轴的高度。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlCategory)
    alert(axis.Height)
}
```
