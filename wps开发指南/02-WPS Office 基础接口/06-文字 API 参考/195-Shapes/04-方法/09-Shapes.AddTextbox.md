# Shapes.AddTextbox

在文档中添加一个文本框。



## 语法

express.**AddTextbox(Orientation, Left, Top, Width, Height, Anchor)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Orientation | 必选 | MsoTextOrientation | 文本的方向。由于选择或安装的语言支持（例如美国英语）不同，有些常量可能无法使用。 |
| Left | 必选 | number（float 精度） | 文本框左边缘的位置（以磅为单位）。 |
| Top | 必选 | number（float 精度） | 文本框上边缘的位置（以磅为单位）。 |
| Width | 必选 | number（float 精度） | 文本框的宽度（以磅为单位）。 |
| Height | 必选 | number（float 精度） | 文本框的高度（以磅为单位）。 |
| Anchor | 可选 | any | 一个代表文本框所绑定的文本的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象。如果指定 Anchor，则定位标记将出现在定位区域第一段的开头。如果省略该参数，将自动选定定位区域，并且相对于页面的上边缘和左边缘放置文本框。 |

## 返回值

Shape

## 示例


```JavaScript
/*本示例在新文档中添加一个文本框。*/
function test() {
    //Add a text box to the document
    Documents.Add().Shapes.AddTextbox(msoTextOrientationHorizontal, 1, 1, 100, 100)
}
```


```JavaScript
/*本示例将文本框添加到活动文档上所选区域，并向该文本框中添加文本，然后设置该文本框中文本的字号。*/
function test() {
    let range = ActiveDocument.Shapes.AddTextbox(msoTextOrientationVertical, 50, 50, 100, 100, Selection.Range).TextFrame.TextRange
    range.Text = "example"
    range.Font.Size = 15
}
```
