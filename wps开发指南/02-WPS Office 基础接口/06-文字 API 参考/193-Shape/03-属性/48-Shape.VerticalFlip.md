# Shape.VerticalFlip

如果指定形状围绕垂直轴进行翻转，则该属性值为 **msoTrue** 。 **MsoTriState** 类型，只读。



## 语法

express.**VerticalFlip**

express   一个代表 **Shape** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例将活动文档中所有进行过水平翻转或垂直翻转的形状还原至初始状态。*/
function test() {
    for (let i = 1; i <= ActiveDocument.Shapes.Count; i++) {
        if (ActiveDocument.Shapes.Item(i).HorizontalFlip == msoTrue) {
            ActiveDocument.Shapes.Item(i).Flip(msoFlipHorizontal)
        }
        if (ActiveDocument.Shapes.Item(i).VerticalFlip == msoTrue) {
            ActiveDocument.Shapes.Item(i).Flip(msoFlipVertical)
        }
    }
}
```


```JavaScript
/*本示例判断活动文档中第一个形状是否围绕垂直轴进行翻转，并显示结果。*/
function test() {
    let shapes = ActiveDocument.Shapes
    if (shapes.Item(1).VerticalFlip == msoTrue) {
        alert("已围绕垂直轴进行翻转")
    } else {
        alert("未围绕垂直轴进行翻转")
    }
}
```
