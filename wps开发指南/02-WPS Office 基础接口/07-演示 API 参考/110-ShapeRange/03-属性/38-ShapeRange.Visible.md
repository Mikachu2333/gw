# ShapeRange.Visible

返回或设置指定对象的可见性或应用于指定对象的格式。可读/写。 **MsoTriState** 类型。



## 语法

express.**Visible**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

MsoTriState

## 说明


 **Visible** 属性的值可以是下列 **MsoTriState** 常量之一。

| 常量           | 说明                     |
| ------------ | ------------------------- |
| **msoFalse** | 指定的对象或对象格式不可见。 |
| **msoTrue**  | 指定的对象或对象格式可见。 |



## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片中第一个和第二个形状设置为可见。*/
function test() {
    let shapeRange = ActivePresentation.Slides.Item(1).Shapes.Range([1, 2])
    shapeRange.Visible = msoTrue
}
```


```JavaScript
/*本示例将活动窗口上选中形状设置为不可见。*/
function test() {
    ActiveWindow.Selection.ShapeRange.Visible = msoFalse
}
```
