# MediaFormat.FadeOutDuration

获取或设置媒体的淡出持续时间（毫秒）。可读/写。



## 语法

express.**FadeOutDuration**

express   一个代表 **MediaFormat** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片第一个媒体的淡出持续时间（毫秒）。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    alert(shape.MediaFormat.FadeOutDuration)
}
```


```JavaScript
/*本示例设置活动窗口选定的第一个媒体的淡出持续时间（毫秒）。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    shape.MediaFormat.FadeOutDuration = 100
}
```
