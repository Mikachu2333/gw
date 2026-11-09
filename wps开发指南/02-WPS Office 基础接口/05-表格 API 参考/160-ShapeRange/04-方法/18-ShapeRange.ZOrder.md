# ShapeRange.ZOrder

将指定的形状移到集合中其他形状的前面或后面（即更改该形状在 z-次序中的位置）。



## 语法

express.**ZOrder(ZOrderCmd)**

express   一个代表 **ShapeRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ZOrderCmd | 必选 | MsoZOrderCmd | 指定根据其他形状将指定的形状移到什么位置。 |

## 返回值

void

## 说明


| **MsoZOrderCmd** 可为以下 [ **MsoZOrderCmd** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoZOrderCmd) 常量之一。 |
| ------------------------------------------------------------------ |
| **msoBringForward**                                                |
| **msoBringInFrontOfText** 。仅用于 WPS。                                 |
| **msoBringToFront**                                                |
| **msoSendBackward**                                                |
| **msoSendBehindText** 。仅用于 WPS。                                     |
| **msoSendToBack**                                                  |

使用 **[ZOrderPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/ZOrderPosition)** 属性可确定形状在 z-次序中的当前位置。



## 示例


```JavaScript
/*本示例先在第一张工作表中创建shpRange对象，并将该对象置于底层。*/
function test() {
    let shpRange = Application.Worksheets.Item(1).Shapes.Range([3, 2])
    shpRange.ZOrder(msoSendToBack)
}
```


```JavaScript
/*本示例先在活动工作表中创建shpRange对象，并将该对象置于顶层。*/
function test() {
    let shpRange = ActiveSheet.Shapes.Range([1, 2])
    shpRange.ZOrder(msoBringToFront)
}
```
