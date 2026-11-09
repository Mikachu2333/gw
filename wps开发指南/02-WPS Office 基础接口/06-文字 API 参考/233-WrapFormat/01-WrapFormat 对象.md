# WrapFormat 对象

代表使文字环绕形状或形状范围的所有属性。

## 说明


使用 **WrapFormat** 属性可返回 **WrapFormat** 对象。


## 示例


```JavaScript
/*本示例向活动文档添加一个椭圆，并指定文档文字环绕在椭圆的外接方框的左右两边，然后设置文档文字与图形的方框的上、下、左、右四边之间都有 0.1 英寸的边距。*/
function test() {
    let wrapFormat = ActiveDocument.Shapes.AddShape(msoShapeOval, 36, 36, 100, 35).WrapFormat
    wrapFormat.Type = wdWrapSquare
    wrapFormat.Side = wdWrapBoth
    wrapFormat.DistanceTop = InchesToPoints(0.1)
    wrapFormat.DistanceBottom = InchesToPoints(0.1)
    wrapFormat.DistanceLeft = InchesToPoints(0.1)
    wrapFormat.DistanceRight = InchesToPoints(0.1)
}
```


```JavaScript
/*本示例指定活动文档中的第一个图形可与其他图形重叠。*/
function test() {
    ActiveDocument.Shapes.Item(1).WrapFormat.AllowOverlap = msoCTrue
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AllowOverlap](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/WrapFormat/member/AllowOverlap) | 返回或设置一个值，该值指定是否允许给定图形与其他图形重叠。 **Long** 类型，可读写。 |
| [DistanceBottom](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/WrapFormat/member/DistanceBottom) | 返回或设置文档文字与指定图形周围的非文本区底边之间的距离（以磅为单位）。 **Single** 类型，可读写。 |
| [DistanceLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/WrapFormat/member/DistanceLeft) | 返回或设置文档文字与指定图形周围的非文本区左边缘之间的距离（以磅为单位）。 **Single** 类型，可读写。 |
| [DistanceRight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/WrapFormat/member/DistanceRight) | 返回或设置文档文字与指定图形周围的非文本区右边缘之间的距离（以磅为单位）。 **Single** 类型，可读写。 |
| [DistanceTop](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/WrapFormat/member/DistanceTop) | 返回或设置文档文字与指定图形周围的非文本区顶边之间的距离（以磅为单位）。 **Single** 类型，可读写。 |
| [Side](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/WrapFormat/member/Side) | 返回或设置一个值，指示文档文字是环绕在指定形状的两侧，还是只环绕左侧或右侧，还是环绕形状距离页边距最远的一侧。 **WdWrapSideType** 类型，可读写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/WrapFormat/member/Type) | 返回指定形状的换行类型。可读/写 **[WdWrapType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdWrapType)** 类型。 |