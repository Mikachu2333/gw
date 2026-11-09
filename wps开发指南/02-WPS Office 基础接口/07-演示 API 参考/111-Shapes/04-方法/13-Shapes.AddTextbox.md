# Shapes.AddTextbox

创建一个文本框。返回一个代表新文本框的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象。



## 语法

express.**AddTextbox(Orientation, Left, Top, Width, Height)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Orientation | 必选 | MsoTextOrientation | 文本方向。这些常量中的某些可能不可用，这取决于选择或安装的语言支持（例如，中国中文）。 |
| Left | 必选 | number（float 精度） | 文本框左边缘相对于幻灯片左边缘的位置（以磅为单位）。 |
| Top | 必选 | number（float 精度） | 文本框上边缘相对于幻灯片上边缘的位置（以磅为单位）。 |
| Width | 必选 | number（float 精度） | 文本框的宽度（以磅为单位）。 |
| Height | 必选 | number（float 精度） | 文本框的高度（以磅为单位）。 |

## 返回值

Shape

## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片中添加包含文本“Test Box”的文本框。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.AddTextbox(msoTextOrientationHorizontal, 100, 100, 200, 50).TextFrame.TextRange.Text = "Test Box"
}
```


```JavaScript
/*本示例向第一个演示文稿的第一张幻灯片中添加包含文本“example”的文本框，并显示其文本的长度。*/
function test() {
    let slide = Presentations.Item(1).Slides.Item(1)
    let textRange2 = slide.Shapes.AddTextbox(msoTextOrientationVertical, 200, 200, 300, 100).TextFrame2.TextRange
    textRange2.Text = "example"
    alert(textRange2.Length)
}
```
