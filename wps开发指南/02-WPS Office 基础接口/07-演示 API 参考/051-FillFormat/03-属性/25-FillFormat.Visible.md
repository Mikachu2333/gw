# FillFormat.Visible

返回或设置指定对象或应用于指定对象的格式的可见性。可读/写。



## 语法

express.**Visible**

express   一个代表 **FillFormat** 对象的变量。

## 类型

MsoTriState

## 说明


 **Visible** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量           | 说明             |
| ------------ | -------------- |
| **msoFalse** | 指定的对象或对象格式不可见。 |
| **msoTrue**  | 指定的对象或对象格式可见。  |



## 示例


```JavaScript
/*本示例为当前演示文稿中第一张幻灯片的第三个形状设置填充的水平偏移量和垂直偏移量，使其向右偏移 5 磅并向上偏移 3 磅。如果该形状原来没有填充，本例将会为其添上填充。*/
function test() {
    let fillFormat = ActivePresentation.Slides.Item(1).Shapes.Item(3).Fill
    fillFormat.Visible = msoTrue
    fillFormat.TextureOffsetX = 5
    fillFormat.TextureOffsetY = -3
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状的填充格式是否可见。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.Fill.Visible === msoTrue)
}
```
