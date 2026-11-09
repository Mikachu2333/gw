# TextEffectFormat.Tracking

该属性返回或设置指定的艺术字中分配给每个字符的水平间距与字符宽度之比。 **Single** 类型，可读写。



## 语法

express.**Tracking**

express   一个代表 **TextEffectFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


该属性的值可为从 0（零）到 5 的数字。（为该属性指定的值越大，字符间的空间越大；小于 1 的值会产生字符重叠）。下表给出了与用户界面中可用设置相对应的 **Tracking** 属性的值。

| 用户界面设置 | 相应的 Tracking 属性值 |
| ------ | ---------------- |
| 很紧     | 0.8              |
| 紧密     | 0.9              |
| 一般     | 1.0              |
| 稀疏     | 1.2              |
| 很松     | 1.5              |



## 示例


```JavaScript
/*本示例将包含文本“Test”的艺术字添至活动文档中，然后将字符间距设置为很紧。*/
function test() {
    let newWordArt = ActiveDocument.Shapes.AddTextEffect(msoTextEffect1, "Test", "Arial Black", 36, msoFalse, msoFalse, 100, 100)
    newWordArt.TextEffect.Tracking = 0.8
}
```


```JavaScript
/*本示例将选中的艺术字对象字符间距设置为稀疏*/
function test() {
    Selection.ShapeRange.TextEffect.Tracking = 1.2
}
```
