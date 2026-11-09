# ShapeRange.Child

如果形状是子形状，或者如果形状区域内的所有形状都是同一个父形状的子形状，则属性值为 **msoTrue** 。只读。



## 语法

express.**Child**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

MsoTriState

## 说明


 **Child** 属性的值可以是下列 **MsoTriState** 常量之一。

| 常量           | 说明                                |
| ------------ | --------------------------------- |
| **msoFalse** | 形状不是子形状，或者形状区域内并非所有的子形状都属于同一个父形状。 |
| **msoTrue**  | 形状是子形状，或者形状区域内所有的子形状都属于同一个父形状。    |



## 示例


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片上第一个形状组中第二个形状是否为子形状。*/
function test() {
    let shapeRange = ActivePresentation.Slides.Item(1).Shapes.Item(1).GroupItems.Range(2)
    alert(shapeRange.Child == msoTrue)
}
```


```JavaScript
/*本示例显示活动窗口中选中的形状是否为子形状。*/
function test() {
    alert(ActiveWindow.Selection.ShapeRange.Child == msoTrue)
}
```
