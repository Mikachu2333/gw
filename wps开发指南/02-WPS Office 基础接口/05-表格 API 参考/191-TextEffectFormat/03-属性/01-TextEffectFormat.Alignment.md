# TextEffectFormat.Alignment

返回或设置一个 **MsoTextEffectAlignment** 值，它代表艺术字的对齐方式。



## 语法

express.**Alignment**

express   一个代表 **TextEffectFormat** 对象的变量。

## 类型

MsoTextEffectAlignment

## 示例


```JavaScript
/*此示例向第一张工作表中添加艺术字对象，然后将该对象设置右对齐。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    let shape = shapes.AddTextEffect(msoTextEffect1, "Test Text", "Palatino", 54, true, false, 100, 50)
    shape.TextEffect.Alignment = msoTextEffectAlignmentRight
}
```


```JavaScript
/*此示例显示活动工作表的第一个艺术字的对齐方式是否为居中对齐。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(1)
    alert(shape.TextEffect.Alignment == msoTextEffectAlignmentCentered)
}
```
