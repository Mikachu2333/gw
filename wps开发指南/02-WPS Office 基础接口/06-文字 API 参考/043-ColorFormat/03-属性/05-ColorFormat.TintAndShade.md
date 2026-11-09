# ColorFormat.TintAndShade

返回一个 **Single** 类型的值，该值代表指定图形颜色的明暗。可读写。



## 语法

express.**TintAndShade**

express   一个代表 **ColorFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


可以为 TintAndShade 属性输入 -1（最暗）到 1（最亮）之间的数字，0 为中间值。



## 示例


```JavaScript
/*本示例在活动文档中新建一个形状，设置填充颜色，并且增加彩色底纹的亮度。*/
function test() {
    let shape = ActiveDocument.Shapes.AddShape(msoShapeHeart, 150, 150, 250, 250)
    let colorFormat = shape.Fill.ForeColor
    colorFormat.RGB = RGB(255, 28, 0)
    colorFormat.TintAndShade = 0.3
}
```


```JavaScript
/*本示例显示第一个文档上第二个形状背景色的TintAndShade属性值。*/
function test() {
    let colorFormat = Documents.Item(1).Shapes.Item(2).Fill.BackColor
    alert(colorFormat.TintAndShade)
}
```
