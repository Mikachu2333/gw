# Shape.Flip

绕水平或垂直轴翻转指定形状。



## 语法

express.**Flip(FlipCmd)**

express   一个代表 **Shape** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FlipCmd | 必选 | MsoFlipCmd | 指定形状是水平翻转还是垂直翻转。 |

## 返回值

void

## 说明


| MsoFlipCmd 可以是下列 MsoFlipCmd 常量之一。 |
| --------------------------------- |
| **msoFlipHorizontal**             |
| **msoFlipVertical**               |



## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中所有进行过水平翻转或垂直翻转的形状还原至初始状态。*/
function test() {
    let shapes = ActivePresentation.Slides(1).Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        if (shapes.Item(i).HorizontalFlip == msoTrue) {
            shapes.Item(i).Flip(msoFlipHorizontal)
        }
        if (shapes.Item(i).VerticalFlip == msoTrue) {
            shapes.Item(i).Flip(msoFlipVertical)
        }
    }
}
```


```JavaScript
/*本示例首先向活动演示文稿的第一张幻灯片添加一个三角形，然后垂直翻转该三角形并将其设为红色。*/
function test() {
    let shape = ActivePresentation.Slides(1).Shapes.AddShape(msoShapeRightTriangle, 150, 150, 50, 50)
    shape.Fill.ForeColor.RGB = RGB(255, 0, 0)
    shape.Flip(msoFlipVertical)
}
```
