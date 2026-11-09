# ShapeRange.Flip

绕指定形状的水平或垂直对称轴翻转该形状。



## 语法

express.**Flip(FlipCmd)**

express   一个代表 **ShapeRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FlipCmd | 必选 | MsoFlipCmd | 指定形状是水平翻转还是垂直翻转。 |

## 返回值

void

## 示例


```JavaScript
/*本示例首先向第一张工作表添加一个三角形，然后通过新建的ShapeRange对象设置成红色并垂直翻转。*/
function test() {
    Application.Worksheets.Item(1).Shapes.AddShape(msoShapeRightTriangle, 10, 10, 50, 50).Name = "三角形"
    let shpRange = Application.Worksheets.Item(1).Shapes.Range(["三角形"])
    shpRange.Fill.ForeColor.RGB = RGB(255, 0, 0)
    shpRange.Flip(msoFlipVertical)
}
```


```JavaScript
/*本示例将活动工作表的所有形状水平翻转。*/
function test() {
    let shapes = ActiveSheet.Shapes
    shapes.SelectAll()
    Selection.ShapeRange.Flip(msoFlipHorizontal)
}
```
