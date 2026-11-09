# TextEffectFormat.NormalizedHeight

如果指定艺术字中所有字符（不论大小写）的高度相同，则该属性值为 **msoTrue** 。 **MsoTriState** 类型，可读写。



## 语法

express.**NormalizedHeight**

express   一个代表 **TextEffectFormat** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例将包含文字“Test Effect”的“艺术字”添加至活动文档，并将新“艺术字”命名为“texteff1”。此代码然后将名为“texteff1”的图形中的所有字符的高度设为相同。*/
function test() {
    ActiveDocument.Shapes.AddTextEffect(msoTextEffect1, "Test Effect", "Courier New", 44, msoTrue, msoFalse, 10, 10).Name = "texteff1"
    ActiveDocument.Shapes("texteff1").TextEffect.NormalizedHeight = msoTrue
}
```


```JavaScript
/*本示例将选中的第一个形状（需要是艺术字对象）的所有字符的高度设为相同。*/
function test() {
    Selection.ShapeRange.Item(1).TextEffect.NormalizedHeight = msoTrue
}
```
