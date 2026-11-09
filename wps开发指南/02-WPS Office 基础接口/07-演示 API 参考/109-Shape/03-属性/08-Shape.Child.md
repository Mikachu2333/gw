# Shape.Child

如果该形状是子形状，则属性值为 **msoTrue** 。只读。 **MsoTriState** 类型。



## 语法

express.**Child**

express   一个代表 **Shape** 对象的变量。

## 类型

MsoTriState

## 说明


 **Child** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| ---  | ---- |
| **msoFalse** | 形状不是子形状。 |
| **msoTrue** | 形状是子形状。 |



## 示例


```JavaScript
/*本示例判断如果活动演示文稿的第一张幻灯片的第一个组合形状的第一个形状是子形状，则用指定的颜色填充该形状。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1).GroupItems.Item(1)
    if (shape.Child == msoTrue) {
        shape.Fill.ForeColor.RGB = RGB(100, 0, 200)
    } else {
        alert("This shape is not a child shape.")
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片的第二个组合形状的第二个形状是否为子形状。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).GroupItems.Item(2)
    alert(shape.Child == msoTrue)
}
```
