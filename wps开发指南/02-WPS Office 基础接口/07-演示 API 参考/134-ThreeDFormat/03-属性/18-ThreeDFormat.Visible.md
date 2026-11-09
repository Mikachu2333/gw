# ThreeDFormat.Visible

返回或设置指定对象或应用于指定对象的格式的可见性。可读/写。



## 语法

express.**Visible**

express   一个代表 **ThreeDFormat** 对象的变量。

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
/*本示例显示活动演示文稿的第一张幻灯片中第一个形状的三维格式是否可见。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let threeDFormat = slide.Shapes.Item(1).ThreeD
    alert(threeDFormat.Visible === msoTrue)
}
```


```JavaScript
/*本示例将第一篇演示文稿的第一张幻灯片中第一个形状的三维格式设置为不可见。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    shape.ThreeD.Visible = msoFalse
}
```
