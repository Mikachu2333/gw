# Shape.ThreeD

返回一个 **[ThreeDFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/obj)** 对象，它包含指定形状的三维效果格式属性。只读。



## 语法

express.**ThreeD**

express   一个代表 **Shape** 对象的变量。

## 类型

ThreeDFormat

## 示例


```JavaScript
/*本示例设置应用于活动工作表中第一个形状的3D效果的深度、延伸颜色、延伸方向以及照明方向。*/
function test() {
    let threeD = ActiveSheet.Shapes.Item(1).ThreeD
    threeD.Visible = msoTrue
    threeD.Depth = 50
    threeD.ExtrusionColor.RGB = RGB(255, 100, 255)
    //RGB value for purple
    threeD.SetExtrusionDirection(msoExtrusionTop)
    threeD.PresetLightingDirection = msoLightingLeft
}
```


```JavaScript
/*本示例将第一张工作表中第二个形状的3D效果的顶部棱台类型设置为msoBevelRelaxedInset。*/
function test() {
    let threeD = Worksheets.Item(1).Shapes.Item(2).ThreeD
    threeD.Visible = msoTrue
    threeD.BevelTopType = msoBevelRelaxedInset
    threeD.BevelTopDepth = 10
}
```
