# ThreeDFormat.BevelTopType

返回或设置 **ThreeDFormat** 对象的顶部凹凸效果类型。可读/写 **[MsoBevelType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoBevelType)** 类型。



## 语法

express.**BevelTopType**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

MsoBevelType

## 说明


| MsoBevelType 可以是下列 **MsoBevelType** 常量之一。 |
| ----------------------------------------- |
| **msoBevelAngle**                         |
| **msoBevelArtDeco**                       |
| **msoBevelCircle**                        |
| **msoBevelConvex**                        |
| **msoBevelCoolSlant**                     |
| **msoBevelCross**                         |
| **msoBevelDivot**                         |
| **msoBevelHardEdge**                      |
| **msoBevelNone**                          |
| **msoBevelRelaxedInset**                  |
| **msoBevelRiblet**                        |
| **msoBevelSlope**                         |
| **msoBevelSoftRound**                     |
| **msoBevelTypeMixed**                     |



## 示例


```JavaScript
/*此示例将第一张工作表的第三个形状顶部凹凸效果类型设置为msoBevelCircle。*/
function test() {
    let shape = Worksheets.Item(1).Shapes.Item(3)
    shape.ThreeD.Visible = msoTrue
    shape.ThreeD.BevelTopType = msoBevelCircle
}
```


```JavaScript
/*本示例显示活动工作表中第二个形状顶部凹凸效果类型是否为msoBevelRelaxedInset。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    alert(shape.ThreeD.BevelTopType == msoBevelRelaxedInset)
}
```
