# Shape.Visible

返回或设置指定对象的可见性或应用于指定对象的格式。可读/写。 **MsoTriState** 类型。



## 语法

express.**Visible**

express   一个代表 **Shape** 对象的变量。

## 类型

MsoTriState

## 说明


 **Visible** 属性的值可以是其中一个 **MsoTriState** 常量。

| 常量           | 说明            |
| ------------ | ------------- |
| **msoFalse** | 指定的对象或对象格式不可见。 |
| **msoTrue**  | 指定的对象或对象格式可见。  |



## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中的第一个形状是否可见。*/
function test() {
    alert(ActivePresentation.Slides.Item(1).Shapes.Item(1).Visible === msoTrue)
}
```


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中的第二个形状设置为不可见。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(2)
    shape.Visible = msoFalse
}
```
