# ShapeRange.TextEffect

该属性返回一个 **TextEffectFormat** 对象，它包含指定形状的文本效果格式属性。



## 语法

express.**TextEffect**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

TextEffectFormat

## 示例


```JavaScript
/*此示例中，在第一张工作表中创建shpRange对象，将对象的文本效果的字体设置为斜体。*/
function test() {
    let shpRange = Application.Worksheets.Item(1).Shapes.Range([1,3])
    shpRange.TextEffect.FontItalic = msoTrue
}
```


```JavaScript
/*此示例中，在活动工作表中创建shpRange对象，将对象的文本效果的字号设置为16。*/
function test() {
    let shpRange = ActiveSheet.Shapes.Range([1])
    shpRange.TextEffect.FontSize = 16
}
```
