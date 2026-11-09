# ShapeRange.Flip

将指定形状范围绕其水平或垂直轴翻转。



## 语法

express.**Flip(FlipCmd)**

express   一个代表 **ShapeRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FlipCmd | 必选 | MsoFlipCmd | 指定形状是水平翻转还是垂直翻转 |

## 返回值

void

## 说明


FlipCmd 参数值可以是下列 MsoFlipCmd 常量之一。
msoFlipHorizontal
msoFlipVertical



## 示例


```JavaScript
/*本示例将活动演示文稿上第一张幻灯片中第二个形状垂直翻转并将其前景色设为红色。*/
function test() {
    let shapeRange = ActivePresentation.Slides.Item(1).Shapes.Range(2)
    shapeRange.Flip(msoFlipVertical)
    shapeRange.Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例将第一篇演示文稿上第二张幻灯片中所有的形状水平翻转。*/
function test() {
    Presentations.Item(1).Slides.Item(2).Shapes.SelectAll()
    ActiveWindow.Selection.ShapeRange.Flip(msoFlipHorizontal)
}
```
