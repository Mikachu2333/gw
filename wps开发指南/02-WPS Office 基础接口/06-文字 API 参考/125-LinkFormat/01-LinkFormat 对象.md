# LinkFormat 对象

代表 OLE 对象或图片的链接特征。

## 说明


使用形状、内嵌形状或域的 **LinkFormat** 属性可返回 **LinkFormat** 对象。

并非所有类型的形状、内嵌形状和域都可以链接到源。使用 **Shape** 和 **InlineShape** 对象的 **Type** 属性可确定某特定形状是否可以链接。 **Field** 对象的 **Type** 属性返回域的类型。

可使用 **Update** 方法和 **AutoUpdate** 属性来更新链接。要返回或设置特定链接的源文件的完整路径，请使用 **SourceFullName** 属性。


## 示例


```JavaScript
/*本示例断开活动文档中第一个形状的链接。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(1)
    shape.LinkFormat.BreakLink()
}
```


```JavaScript
/*本示例显示活动文档中第一个嵌入式形状的链接源名称。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    alert(inlineShape.LinkFormat.SourceName)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [BreakLink](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LinkFormat/member/BreakLink) | 断开源文件与指定 OLE 对象、图片或链接域之间的链接。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [SavePictureWithDocument](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LinkFormat/member/SavePictureWithDocument) | 如果指定的图片与文档一起保存，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [SourceFullName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LinkFormat/member/SourceFullName) | 返回或设置指定的链接 OLE 对象、图片或域的源文件的路径和名称。 **String** 类型，可读写。 |
| [SourceName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LinkFormat/member/SourceName) | 返回指定的链接 OLE 对象、图片或域的源文件的名称。 **String** 类型，只读。 |
| [SourcePath](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LinkFormat/member/SourcePath) | 返回指定的链接 OLE 对象、图片或域的源文件的路径。 **String** 类型，只读。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LinkFormat/member/Type) | 返回链接的类型。只读 **[WdLinkType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdLinkType)** 类型。 |