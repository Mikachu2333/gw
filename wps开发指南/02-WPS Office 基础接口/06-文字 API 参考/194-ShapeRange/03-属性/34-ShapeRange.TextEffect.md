# ShapeRange.TextEffect

返回一个 **TextEffectFormat** 对象，该对象包含指定形状的文本效果格式属性。只读。



## 语法

express.**TextEffect**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

TextEffectFormat

## 说明


适用于代表艺术字的 **ShapeRange** 对象。



## 示例


```JavaScript
/*本示例设置活动文档中第二个和第三个艺术字形状的字体为粗体。*/
function test() {
    let shapeRange = ActiveDocument.Shapes.Range([2, 3])
    shapeRange.TextEffect.FontBold = msoTrue
}
```


```JavaScript
/*本示例显示选中艺术字形状的字体大小。*/
function test() {
    alert(Selection.ShapeRange.TextEffect.FontSize)
}
```
