# MediaFormat.StartPoint

获取或设置剪裁区域的起点。可读/写。



## 语法

express.**StartPoint**

express   一个代表 **MediaFormat** 对象的变量。

## 类型

number（int4 精度）

## 说明


起点必须在终点之前。



## 示例


```JavaScript
/*本示例显示活动窗口选定的第一个媒体的剪裁区域的起点。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.MediaFormat.StartPoint)
}
```


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片的第一个媒体的剪裁区域的起点。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    shape.MediaFormat.StartPoint = 15
}
```
