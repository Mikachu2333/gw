# Shape.LockAspectRatio

 如果指定的形状在调整大小时其原始比例保持不变，则此属性为 **True** 。如果调整大小时可以分别更改形状的高度和宽度，则此属性为 **False** 。 **[MsoTriState](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTriState)** 类型，可读写。



## 语法

express.**LockAspectRatio**

express   一个代表 **Shape** 对象的变量。

## 类型

MsoTriState

## 说明


| **MsoTriState** 可为以下 **MsoTriState** 常量之一。 |
| ------------------------------------------ |
| **msoCTrue**                               |
| **msoFalse** 。调整大小时可以分别更改形状的高度和宽度。          |
| **msoTriStateMixed**                       |
| **msoTriStateToggle**                      |
| **msoTrue** 。指定的形状在调整大小时其原始比例保持不变。          |



## 示例


```JavaScript
/*本示例向第一张工作表添加一个立方体。可以移动此立方体并调整其大小，但不能重新设置其比例。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    shapes.AddShape(msoShapeCube, 50, 50, 100, 200).LockAspectRatio = msoTrue
}
```


```JavaScript
/*本示例向活动工作表添加一个矩形。可以移动此矩形并可调整其大小比例。*/
function test() {
    let shapes = ActiveSheet.Shapes
    shapes.AddShape(msoShapeRectangle, 100, 100, 100, 100).LockAspectRatio = msoFalse
}
```
