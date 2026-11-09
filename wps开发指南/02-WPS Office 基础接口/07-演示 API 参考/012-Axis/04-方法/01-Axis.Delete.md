# Axis.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **Axis** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例删除活动演示文稿的第一张幻灯片中第一张图表的数值坐标轴。*/
function test() {
    let axis = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlValue)
    axis.Delete()
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第二个图表的分类轴的类别名称的数量大于 3，则删除该分类轴。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlCategory)
    if (axis.CategoryNames.length > 3) {
        axis.Delete()
    }
}
```
