# Shape.Flip

绕指定形状的水平或垂直对称轴翻转该形状。



## 语法

express.**Flip(FlipCmd)**

express   一个代表 **Shape** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FlipCmd | 必选 | MsoFlipCmd | 指定形状是水平翻转还是垂直翻转。 |

## 返回值

void

## 示例


```JavaScript
/*本示例首先向活动工作表添加一个三角形，然后设置为红色并垂直翻转。*/
function test() {
    let shape = Application.ActiveSheet.Shapes.AddShape(msoShapeRightTriangle, 10, 10, 50, 50)
    shape.Fill.ForeColor.RGB = RGB(255, 0, 0)
    shape.Flip(msoFlipVertical)
}
```


```JavaScript
/*本示例将第一张工作表中的第一个形状水平翻转。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(1)
    shape.Flip(msoFlipHorizontal)
}
```
