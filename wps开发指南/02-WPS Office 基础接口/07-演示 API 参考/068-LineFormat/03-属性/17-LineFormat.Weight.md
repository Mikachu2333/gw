# LineFormat.Weight

以磅为单位返回或设置指定线条的粗细。可读/写 **Single** 类型。



## 语法

express.**Weight**

express   一个代表 **LineFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加一条两磅粗的绿色虚线。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let lineFormat = slide.Shapes.AddLine(10, 10, 250, 250).Line
    lineFormat.DashStyle = msoLineDashDotDot
    lineFormat.ForeColor.RGB = RGB(0, 255, 255)
    lineFormat.Weight = 2
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个线条的粗细。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.Line.Weight)
}
```
