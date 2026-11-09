# SoftEdgeFormat.Type

获取或设置 **SoftEdgeFormat** 对象的类型。可读写。



## 语法

express.**Type**

express   一个代表 **SoftEdgeFormat** 对象的变量。

## 类型

MsoSoftEdgeType

## 示例


```JavaScript
/*本示例运行于演示组件，显示活动演示文稿的第一张幻灯片的第一个形状的柔化边缘效果的类型是否为msoSoftEdgeType2。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    alert(shape.SoftEdge.Type == msoSoftEdgeType2)
}
```


```JavaScript
/*本示例运行于演示组件，设置活动窗口所选的第一张幻灯片的第一个形状的柔化边缘效果的类型和大小。*/
function test() {
    let shape = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1)
    shape.SoftEdge.Type = msoSoftEdgeType5
    shape.SoftEdge.Radius = 7.5
}
```
