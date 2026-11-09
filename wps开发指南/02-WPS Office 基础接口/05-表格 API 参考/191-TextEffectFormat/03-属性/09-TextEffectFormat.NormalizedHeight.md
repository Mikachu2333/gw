# TextEffectFormat.NormalizedHeight

如果指定艺术字中所有字符（无论大小写）均为同一高度，则该属性值为 **msoTrue** 。 **MsoTriState** 类型，可读写。



## 语法

express.**NormalizedHeight**

express   一个代表 **TextEffectFormat** 对象的变量。

## 类型

MsoTriState

## 说明


| **MsoTriState** 可以是下列 **MsoTriState** 常量之一。 |
| ------------------------------------------ |
| **msoCTrue**                               |
| **msoFalse**                               |
| **msoTriStateMixed**                       |
| **msoTriStateToggle**                      |
| **msoTrue** 指定艺术字中的所有字符（无论大小写）均为同一高度。       |



## 示例


```JavaScript
/*本示例将包含文本“Test Effect”的艺术字添加到第一张工作表，并为新的艺术字命名为 texteff1。然后，该代码使名为 texteff1 的形状中的所有字符的高度相同。*/
function test() {
    let worksheet = Application.Worksheets.Item(1)
    worksheet.Shapes.AddTextEffect(msoTextEffect1, "Test Effect", "Courier New", 44, true, false, 10, 10).Name = "texteff1"
    worksheet.Shapes.Item("texteff1").TextEffect.NormalizedHeight = msoTrue
}
```


```JavaScript
/*此示例显示活动工作表的第二个艺术字的所有字符是否为同一高度。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    alert(shape.TextEffect.NormalizedHeight == msoTrue)
}
```
