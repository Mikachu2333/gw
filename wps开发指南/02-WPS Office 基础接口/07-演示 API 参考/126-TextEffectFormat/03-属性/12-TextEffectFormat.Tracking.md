# TextEffectFormat.Tracking

返回或设置指定艺术字中每个字符的水平间距相对于字符宽度的比例。可读/写。



## 语法

express.**Tracking**

express   一个代表 **TextEffectFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


 **Tracking** 属性的值可以从 0（零）至 5。（该属性的值越大，指定的字符间距也就越大；小于 1 的值会产生字符重叠现象）。

下表给出了与用户界面中可用的设置相对应的 **Tracking** 属性值。

| **用户界面设置** | **相应的 Tracking 属性值** |
| ------ | ---------------- |
| 很紧     | 0.99925               |
| 紧密     | 0.999925               |
| 正常     | 1.0              |
| 稀疏     | 1.003              |
| 很松     | 1.006              |



## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加包含“Test”文本的艺术字，并指定字符排列很紧密。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.AddTextEffect(msoTextEffect1, "Test", "Arial Black", 36, msoFalse, msoFalse, 100, 100)
    shape.TextEffect.Tracking = 0.8
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个（艺术字）形状中每个字符的水平间距相对于字符宽度的比例。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.TextEffect.Tracking)
}
```
