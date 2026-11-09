# TextEffectFormat.KernedPairs

代表经过字距调整的艺术字对象中的字符对。 **MsoTriState** 类型，可读写。



## 语法

express.**KernedPairs**

express   一个代表 **TextEffectFormat** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例为活动文档中的艺术字对象启用字符对字距调整。*/
function test() {
    let shapeRange = ActiveDocument.Range(1, ActiveDocument.Shapes.Count).ShapeRange
    if (shapeRange.Type == msoTextEffect) {
        shapeRange.TextEffect.KernedPairs = msoTrue
    }
}
```


```JavaScript
/*此示例显示活动文档的第二个艺术字是否启用字符对字距调整。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(2)
    alert(shape.TextEffect.KernedPairs == msoTrue)
}
```
