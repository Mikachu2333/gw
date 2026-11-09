# ShapeRange.ThreeD

返回一个 **ThreeDFormat** 对象，它包含指定形状的三维效果格式属性。只读。



## 语法

express.**ThreeD**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

ThreeDFormat

## 示例


```JavaScript
/*本示例先在第一张工作表中创建shpRange对象，然后设置对象的3D效果的深度、延伸颜色、延伸方向以及照明方向。*/
function test() {
    let shpRange = Application.Worksheets.Item(1).Shapes.Range([1, 2])
    let threeD = shpRange.ThreeD
    threeD.Visible = true
    threeD.Depth = 50
    threeD.ExtrusionColor.RGB = RGB(255, 100, 255)
    //RGB value for purple
    threeD.SetExtrusionDirection(msoExtrusionTop)
    threeD.PresetLightingDirection = msoLightingLeft
}
```


```JavaScript
/*本示例将活动工作表的所有形状的3D效果的顶部棱台类型设置为msoBevelRelaxedInset。*/
function test() {
    let shapes = ActiveSheet.Shapes
    shapes.SelectAll()
    Selection.ShapeRange.ThreeD.Visible = msoTrue
    Selection.ShapeRange.ThreeD.BevelTopType = msoBevelRelaxedInset
    Selection.ShapeRange.ThreeD.BevelTopDepth = 10
}
```
