# FillFormat.Background

指定形状的填充与幻灯片背景相匹配。如果将此方法应用于填充后又更改了幻灯片背景色，该填充会随之改变。



## 语法

express.**Background()**

express   一个代表 **FillFormat** 对象的变量。

## 返回值

void

## 说明


请注意，将 **Background** 方法应用于形状的填充与设置该形状的透明填充不完全相同，也不完全等同于将形状填充设为与背景相同。



## 示例


```JavaScript
/*本示例将当前演示文稿中第一张幻灯片第一个形状的填充设为与幻灯片背景相匹配。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Item(1).Fill.Background()
}
```


```JavaScript
/*本示例将当前演示文稿第一张幻灯片的背景设为一个预设的渐变填充，在幻灯片中添加一个矩形，然后在该矩形前面放置三个椭圆。第一个椭圆的填充与幻灯片背景相匹配，第二个的填充为透明，而第三个使用的填充方式与背景相同。请注意三个椭圆外观的不同。*/
function test() {
    let slide = Application.ActivePresentation.Slides.Item(1)
    slide.FollowMasterBackground = msoFalse
    slide.Background.Fill.PresetGradient(msoGradientHorizontal, 1, msoGradientDaybreak)
    let shapes = slide.Shapes
    shapes.AddShape(msoShapeRectangle, 50, 200, 600, 100)
    shapes.AddShape(msoShapeOval, 75, 150, 150, 100).Fill.Background()
    shapes.AddShape(msoShapeOval, 275, 150, 150, 100).Fill.Transparency = 1
    shapes.AddShape(msoShapeOval, 475, 150, 150, 100).Fill.PresetGradient(msoGradientHorizontal, 1, msoGradientDaybreak)
}
```
