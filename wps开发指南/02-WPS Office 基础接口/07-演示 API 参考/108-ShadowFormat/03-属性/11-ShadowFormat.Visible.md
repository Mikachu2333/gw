# ShadowFormat.Visible

返回或设置指定对象或应用于指定对象的格式的可见性。可读/写。



## 语法

express.**Visible**

express   一个代表 **ShadowFormat** 对象的变量。

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
/*本示例为活动演示文稿第一张幻灯片上第三个形状的阴影设置水平和垂直偏移。阴影相对形状向右偏移 5 磅，向上偏移 3 磅。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shadowFormat = slide.Shapes.Item(3).Shadow
    shadowFormat.Visible = msoTrue
    shadowFormat.OffsetX = 5
    shadowFormat.OffsetY = -3
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状的阴影是否可见。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.Shadow.Visible === msoTrue)
}
```
