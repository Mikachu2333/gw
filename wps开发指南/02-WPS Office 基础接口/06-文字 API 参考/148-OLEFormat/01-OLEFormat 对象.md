# OLEFormat 对象

代表 OLE 对象、ActiveX 控件或域的 OLE（而不是链接）特性。

## 说明


使用形状、内嵌形状或域的 **OLEFormat** 属性可返回 **OLEFormat** 对象。


## 示例


```JavaScript
/*本示例显示活动文档上的第一个形状中的 OLE 对象的类型。*/
function test() {
    alert(ActiveDocument.Shapes.Item(1).OLEFormat.ClassType)
}
```


```JavaScript
/*本示例打开第一个文档中第一个内嵌形状中的 OLE 对象。*/
function test() {
    let inlineShape = Documents.Item(1).InlineShapes.Item(1)
    inlineShape.OLEFormat.Open()
}
```
并非所有类型的形状、内嵌形状和域都具有 OLE 功能。使用 **Shape** 和 **InlineShape** 对象的 **Type** 属性可确定指定形状或内嵌形状的类别。 **Field** 对象的 **Type** 属性返回域的类型。

您可以使用 **Activate** 、 **Edit** 、 **Open** 和 **DoVerb** 方法自动处理 OLE 对象。

使用 **Object** 属性可返回一个代表 ActiveX 控件或 OLE 对象的对象。借助于该对象，您可以使用容器应用程序或 ActiveX 控件的属性和方法。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Activate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OLEFormat/member/Activate) | 激活指定的 **OLEFormat** 对象。 |
| [DoVerb](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OLEFormat/member/DoVerb) | 请求 OLE 对象执行其可用谓词之一，即 OLE 对象为激活其内容而执行的操作。 |
| [Edit](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OLEFormat/member/Edit) | 在创建指定 OLE 对象的应用程序中打开该对象，以便进行编辑。 |
| [Open](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OLEFormat/member/Open) | 打开指定的 **OLEFormat** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OLEFormat/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [ClassType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OLEFormat/member/ClassType) | 返回或设置指定的 OLE 对象、图片或域的类型。 **String** 类型，可读写。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OLEFormat/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OLEFormat/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **OLEFormat** 对象的父对象。 |
| [ProgID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OLEFormat/member/ProgID) | 返回指定 OLE 对象的程序标识符（ProgID）（程序标识符：窗体 OLEServerName.ObjectName 中的标识符（例如，Excel.Sheet 或 PowerPoint.Slide），由 Windows 注册表用来唯一标识一个对象。）。只读 **String** 类型。 |