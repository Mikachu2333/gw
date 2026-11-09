# ColorFormat.TintAndShade

返回一个 **Single** 类型的值，该值代表使指定形状的颜色是变亮，还是变暗。可读/写。



## 语法

express.**TintAndShade**

express   一个代表 **ColorFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


 **TintAndShade** 属性值的输入范围介于 -1（最暗）到 1（最亮）之间，0（零）为适中。



## 示例


```JavaScript
/*本示例在活动演示文稿中新建一个形状，并使该形状的颜色变亮。*/
function test() {
    let shape = Application.ActivePresentation.Slides.Item(1).Shapes.AddShape(msoShapeHeart, 150, 150, 250, 250)
    let colorFormat = shape.Fill.ForeColor
    colorFormat.TintAndShade = 0.3
}
```


```JavaScript
/*本示例显示第一篇演示文稿第一张幻灯片中第一个形状阴影格式的前景色亮度值。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    let colorFormat = shape.Shadow.ForeColor
    alert(colorFormat.TintAndShade)
}
```
