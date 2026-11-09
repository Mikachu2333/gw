# ShapeRange.VerticalFlip

确定指定的形状是否绕垂直轴翻转。只读。



## 语法

express.**VerticalFlip**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

MsoTriState

## 说明


 **VerticalFlip** 属性的值可以是下列 **MsoTriState** 常量之一。

| 常量           | 说明            |
| ------------ | ------------- |
| **msoFalse** | 指定的形状不绕垂直轴翻转。 |
| **msoTrue**  | 指定的形状绕垂直轴翻转。  |



## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片中所有进行过水平翻转或垂直翻转的形状还原至初始状态。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        let shapeRange = shapes.Range(i)
        if (shapeRange.HorizontalFlip) {
            shapeRange.Flip(msoFlipHorizontal)
        }
        if (shapeRange.VerticalFlip) {
            shapeRange.Flip(msoFlipVertical)
        }
    }
}
```


```JavaScript
/*本示例显示活动窗口上选中形状是否进行过垂直翻转。*/
function test() {
    alert(ActiveWindow.Selection.ShapeRange.VerticalFlip == msoTrue)
}
```
