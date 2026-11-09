# RectangularGradient 对象

 **RectangularGradient** 对象沿特定角度以线性方式在一系列颜色间转换。

## 说明


| 使用 RectangularGradient 对象时，请考虑以下几点： |
| ----------------------------------- |

* 试图访问不具有现有渐变填充的 **Interior** 对象的 Gradient 属性会引起运行时错误。访问 Gradient 属性之前请注意 `Interior.Pattern` 属性。
* 如果将 Interior.Pattern从渐变类型更改为非渐变类型，Gradient 对象将采用默认值进行填充。


## 示例


```JavaScript
/*本示例设置活动工作表上单元格区域 A1:A6 中渐变填充第一个ColorStop的颜色。*/
function test() {
    let gradient = ActiveSheet.Range("A1:A6").Interior.Gradient
    gradient.ColorStops.Item(1).Color = RGB(0, 0, 255)
}
```


```JavaScript
/*本示例显示活动工作表上单元格区域 A1:A8 中渐变填充的 RectangleRight 属性值。*/
function test() {
    let gradient = ActiveSheet.Range("A1:A8").Interior.Gradient
    alert(gradient.RectangleRight)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/RectangularGradient/member/Application) | 如果不与对象识别符一起使用，则此属性返回代表 ET 应用程序的 **Application** 对象。如果与对象识别符一起使用，则此属性返回代表指定对象的创建者的 **Application** 对象。只读。 |
| [ColorStops](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/RectangularGradient/member/ColorStops) | 返回 **RectangularGradient** 对象的 **ColorStops** 集合。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/RectangularGradient/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/RectangularGradient/member/Parent) | 返回指定对象的父对象。只读。 |
| [RectangleBottom](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/RectangularGradient/member/RectangleBottom) | 代表渐变填充收敛到的点或矢量。可读/写。 |
| [RectangleLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/RectangularGradient/member/RectangleLeft) | 代表渐变填充收敛到的点或矢量。可读/写。 |
| [RectangleRight](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/RectangularGradient/member/RectangleRight) | 代表渐变填充收敛到的点或矢量。可读/写。 |
| [RectangleTop](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/RectangularGradient/member/RectangleTop) | 代表渐变填充收敛到的点或矢量。可读/写。 |