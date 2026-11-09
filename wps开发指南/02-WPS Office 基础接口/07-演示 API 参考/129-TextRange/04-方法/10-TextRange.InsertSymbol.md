# TextRange.InsertSymbol

返回一个 **[TextRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/obj)** 对象，该对象代表一个插入到指定文本范围的符号。



## 语法

express.**InsertSymbol(FontName, CharNumber, Unicode)**

express   一个代表 **TextRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FontName | 必选 | string | 字体名称。 |
| CharNumber | 必选 | number（int 精度） | Unicode 或 ASCII 字符编号。 |
| Unicode | 可选 | MsoTriState | 指定 CharNumber 参数代表 ASCII 字符还是 Unicode 字符。 |

## 返回值

TextRange

## 说明


*CharNumber* 参数值可以是下列 **MsoTriState** 常量之一。

| 常量 | 说明 |
| -------------------|------------------------------- |
| **msoFalse** | 默认值。CharNumber 参数代表一个 ASCII 字符编号。 |
| **msoTrue** | CharNumber 参数代表一个 Unicode 字符。 |



## 示例


```JavaScript
/*本示例在活动演示文稿第一张幻灯片上的新文本框的第一段第一句后插入注册商标符号。*/
function test() {
    //Add text box
    let shape = ActivePresentation.Slides.Item(1).Shapes.AddTextbox(msoTextOrientationHorizontal, 100, 100, 100, 100)

    //Add symbol to text box
    shape.TextFrame.TextRange.InsertSymbol("Symbol", 226)
}
```


```JavaScript
/*本示例在活动演示文稿第一张幻灯片的标题插入符号，并将颜色改为绿色。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Title
    let textRange = shape.TextFrame.TextRange.InsertSymbol("Arial", 200, msoTrue)
    textRange.Font.Color.RGB = RGB(0, 255, 0)
}
```
