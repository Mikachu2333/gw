# MediaFormat.EndPoint

获取或设置媒体的剪裁区域终点的时间。可读/写。



## 语法

express.**EndPoint**

express   一个代表 **MediaFormat** 对象的变量。

## 类型

number（int4 精度）

## 说明


终点必须在起点之后。



## 示例


```JavaScript
/*本示例显示活动窗口选定的第一个媒体的剪裁区域终点的时间。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.MediaFormat.EndPoint)
}
```


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片的第一个媒体的剪裁区域终点的时间。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    shape.MediaFormat.EndPoint = 600
}
```
