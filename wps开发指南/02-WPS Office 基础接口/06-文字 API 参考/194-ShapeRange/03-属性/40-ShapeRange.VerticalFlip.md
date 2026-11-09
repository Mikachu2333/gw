# ShapeRange.VerticalFlip

如果指定形状围绕垂直轴进行翻转，则该属性值为 **msoTrue** 。 **MsoTriState** 类型，只读。



## 语法

express.**VerticalFlip**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例将活动文档中所有进行过水平翻转或垂直翻转的形状还原至初始状态。*/
function test() {
    let shapes = ActiveDocument.Shapes
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
/*本示例显示选中形状是否进行过垂直轴翻转。*/
function test() {
    alert(Selection.ShapeRange.VerticalFlip == msoTrue)
}
```
