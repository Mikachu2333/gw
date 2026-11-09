# FreeformBuilder.ConvertToShape

创建一个图形，该图形具有指定对象的几何图形特征。返回一个 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/obj)** 对象，该对象代表新图形。



## 语法

express.**ConvertToShape(Anchor)**

express   一个代表 **FreeformBuilder** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Anchor | 可选 | any | 一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，代表与图形绑定在一起的文本。如果指定了 _Anchor_，则锁定标记将出现在锁定区域第一段的开头。如果省略该参数，将自动选定锁定区域，而图形将相对于页面的上部和左侧边缘进行定位。 |

## 返回值

Shape

## 说明


使用 **ConvertToShape** 方法前，最少应该已经对 **FreeformBuilder** 对象用过一次 **[AddNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FreeformBuilder/member/AddNodes)** 方法。



## 示例


```JavaScript
/*本示例向活动文档中添加一个多边形。*/
function test() {
    let freeformBuilder = ActiveDocument.Shapes.BuildFreeform(msoEditingCorner, 100, 200)
    freeformBuilder.AddNodes(msoSegmentLine, msoEditingAuto, 380, 230, 400, 250, 450, 300)
    freeformBuilder.AddNodes(msoSegmentLine, msoEditingAuto, 480, 200, 100, 200, 400, 380)
    freeformBuilder.ConvertToShape().Line.Visible = true
}
```


```JavaScript
/*本示例在活动文档中创建一个具有三个顶点的蓝色任意多边形。*/
function test() {
    let freeformBuilder = ActiveDocument.Shapes.BuildFreeform(msoEditingSmooth, 370, 230)
    freeformBuilder.AddNodes(msoSegmentCurve, msoEditingAuto, 470, 260)
    freeformBuilder.AddNodes(msoSegmentCurve, msoEditingAuto, 490, 330)
    freeformBuilder.AddNodes(msoSegmentCurve, msoEditingAuto, 370, 230)
    freeformBuilder.ConvertToShape().Fill.ForeColor.RGB = RGB(0, 0, 255)
}
```
