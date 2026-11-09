# SoftEdgeFormat.Radius

返回或设置 **Single** 类型值，该值代表形状的柔化边缘效果的大小。可读/写。



## 语法

express.**Radius**

express   一个代表 **SoftEdgeFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例运行于演示组件，设置活动演示文稿的第一张幻灯片的第一个形状的柔化边缘效果的大小。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    shape.SoftEdge.Radius = 5
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口所选的第一张幻灯片的第一个形状的柔化边缘效果的大小。*/
function test() {
    let shape = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1)
    alert(shape.SoftEdge.Radius + " 磅")
}
```
