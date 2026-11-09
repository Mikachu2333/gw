# MediaFormat.IsLinked

返回是否链接媒体文件。只读。



## 语法

express.**IsLinked**

express   一个代表 **MediaFormat** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动窗口选定的第一个媒体是否链接媒体文件。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.MediaFormat.IsLinked)
}
```


```JavaScript
/*本示例判断活动演示文稿第一张幻灯片的第一个媒体是否链接媒体文件，并通知用户。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.MediaFormat.IsLinked) {
        alert("指定媒体已链接媒体文件。")
    } else {
        alert("指定媒体未链接媒体文件。")
    }
}
```
