# ShadowFormat.OffsetY

返回或设置阴影相对指定形状的垂直偏移量（以磅为单位）。 **Single** 类型，可读写。



## 语法

express.**OffsetY**

express   一个代表 **ShadowFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


正值代表阴影向图形下偏移，负值代表向上偏移。如果不指明绝对位置又要从当前位置水平或垂直地微移阴影，请使用 **[IncrementOffsetX](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShadowFormat/member/IncrementOffsetX)** 或 **[IncrementOffsetY](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShadowFormat/member/IncrementOffsetY)** 方法。



## 示例


```JavaScript
/*本示例设置活动文档中第一个形状的阴影的水平和垂直偏移量。阴影相对形状向右偏移 5 磅，向上偏移 3 磅。*/
function test() {
    let shadowFormat = ActiveDocument.Shapes.Item(1).Shadow
    shadowFormat.Visible = msoTrue
    shadowFormat.OffsetX = 5
    shadowFormat.OffsetY = -3
}
```


```JavaScript
/*本示例在活动文档上新建一个矩形，并设置该矩形的阴影格式。*/
function test() {
    let shadowFormat = ActiveDocument.Shapes.AddShape(msoShapeRectangle, 50, 50, 100, 200).Shadow
    shadowFormat.Type = msoShadow4
    shadowFormat.ForeColor.RGB = RGB(127, 0, 0)
    shadowFormat.OffsetX = 10
    shadowFormat.OffsetY = 10
    shadowFormat.Size = 100
    shadowFormat.Transparency = 0.5
    shadowFormat.Visible = msoTrue
}
```
