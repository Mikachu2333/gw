# InlineShape.TextEffect

返回一个 **TextEffectFormat** 对象，该对象包含指定内嵌形状的文本效果格式属性。只读。



## 语法

express.**TextEffect**

express   一个代表 **InlineShape** 对象的变量。

## 类型

TextEffectFormat

## 示例


```JavaScript
/*本示例在活动文档上新建一个艺术字形状，并判断如果该形状的类型为msoTextEffect，则将该形状转换为嵌入式形状，然后将该艺术字形状中的字体设置为粗体。*/
function test() {
    let shape = ActiveDocument.Shapes.AddTextEffect(msoTextEffect1, "Test", "Arial Black", 36, msoFalse, msoFalse, 30, 80)
    if (shape.Type == msoTextEffect) {
        shape.ConvertToInlineShape().TextEffect.FontBold = msoTrue
    }
}
```


```JavaScript
/*本示例将所选内容中第一个艺术字形状中的字体设置为不倾斜，并设置该艺术字中的文本。*/
function test() {
    let textEffectFormat = Selection.InlineShapes.Item(1).TextEffect
    textEffectFormat.FontItalic = msoFalse
    textEffectFormat.Text = "example_2"
}
```
