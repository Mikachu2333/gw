# LinearGradient 对象

 **LinearGradient** 对象沿特定角度以线性方式在一系列颜色间转换。

## 说明


当使用 **LinearGradient** 对象时，应考虑以下几点：

* 试图访问不具有现有渐变填充的 **Interior** 对象的 Gradient 属性会引起运行时错误。访问 Gradient 属性之前请注意 `Interior.Pattern` 属性。
* 如果将 Interior.Pattern从渐变类型更改为非渐变类型，Gradient 对象将采用默认值。


## 示例


```JavaScript
/*下例将活动工作表上区域 B1:B10 中线性渐变的填充角度设置为100。*/
function test() {
    let linearGradient = ActiveSheet.Range("B1:B10").Interior.Gradient
    linearGradient.Degree = 100
}
```


```JavaScript
/*下例显示第一张工作表上区域 B1:B10 中线性渐变的颜色停止点数量。*/
function test() {
    let linearGradient = Worksheets.Item(1).Range("B1:B10").Interior.Gradient
    alert(linearGradient.ColorStops.Count)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LinearGradient/member/Application) | 如果不与对象识别符一起使用，则此属性返回代表 ET 应用程序的 **Application** 对象。如果与对象识别符一起使用，则此属性返回代表指定对象的创建者的 **Application** 对象。只读。 |
| [ColorStops](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LinearGradient/member/ColorStops) | 返回 **LinearGradient** 对象的 **ColorStops** 。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LinearGradient/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Degree](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LinearGradient/member/Degree) | 选定区域中线性渐变填充的角度。可读/写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LinearGradient/member/Parent) | 返回指定对象的父对象。只读。 |