# LineFormat.Pattern

设置或返回一个值，该值代表应用于指定线条的图案。 **MsoPatternType** 类型，可读写。



## 语法

express.**Pattern**

express   一个代表 **LineFormat** 对象的变量。

## 类型

**[MsoPatternType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoPatternType)** 

## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片添加一条带图案的线条。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let lineFormat = slide.Shapes.AddLine(10, 100, 250, 0).Line
    lineFormat.Weight = 6
    lineFormat.ForeColor.RGB = RGB(0, 0, 255)
    lineFormat.BackColor.RGB = RGB(128, 0, 0)
    lineFormat.Pattern = msoPatternDarkDownwardDiagonal
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个线条的图案是否为msoPatternSmallCheckerBoard。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.Line.Pattern == msoPatternSmallCheckerBoard)
}
```
