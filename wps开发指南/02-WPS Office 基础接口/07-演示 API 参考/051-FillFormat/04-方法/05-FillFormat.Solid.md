# FillFormat.Solid

将指定的填充格式设置为均匀的颜色。可用本方法将带有渐变、纹理、图案或背景的填充格式转换为单色的填充格式。



## 语法

express.**Solid()**

express   一个代表 **FillFormat** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片上的所有填充转换为统一的红色填充。*/
function test() {
    let slide = Application.ActivePresentation.Slides.Item(1)
    for (let i = 1; i <= slide.Shapes.Count; i++) {
        slide.Shapes.Item(i).Fill.Solid()
        slide.Shapes.Item(i).Fill.ForeColor.RGB = RGB(255, 0, 0)
    }
}
```


```JavaScript
/*本示例将活动窗口选定的第一个形状填充格式设置为均匀的颜色。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    shape.Fill.Solid()
}
```
