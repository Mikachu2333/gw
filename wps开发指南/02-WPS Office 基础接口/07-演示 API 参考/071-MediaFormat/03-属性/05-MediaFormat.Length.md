# MediaFormat.Length

返回媒体的总长度（以毫秒为单位）。只读。



## 语法

express.**Length**

express   一个代表 **MediaFormat** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片的第一个媒体的总长度（以毫秒为单位）。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    alert(shape.MediaFormat.Length)
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个媒体的总长度（以毫秒为单位）。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.MediaFormat.Length)
}
```
