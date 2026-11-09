# DropCap 对象

代表段落开始处的下沉的大写首字母。不存在 **DropCaps** 集合；每个 **[Paragraph](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/obj)** 对象只包含一个 **DropCap** 对象。

## 说明


用 **DropCap** 属性可返回 **DropCap** 对象。


## 示例


```JavaScript
/*本示例将活动文档中的第一段设置为首字下沉。*/
function test() {
    let dropCap = ActiveDocument.Paragraphs.Item(1).DropCap
    dropCap.Enable()
    dropCap.Position = wdDropNormal
}
```


```JavaScript
/*本示例显示所选内容的第一段的首字下沉的位置是否为wdDropNormal。*/
function test() {
    let dropcap = Selection.Paragraphs.Item(1).DropCap
    alert(dropcap.Position == wdDropNormal)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Clear](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DropCap/member/Clear) | 取消首字下沉格式。 |
| [Enable](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DropCap/member/Enable) | 将指定段落的第一个字母设置为首字下沉格式。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [DistanceFromText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DropCap/member/DistanceFromText) | 返回或设置一个 **Single** 类型的值，该值代表首字下沉的字母和段落正文之间的距离（以磅为单位）。可读写。 |
| [FontName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DropCap/member/FontName) | 返回或设置一个 **String** 类型的值，该值代表首字下沉字母的字体名称。可读写。 |
| [LinesToDrop](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DropCap/member/LinesToDrop) | 返回或设置指定首字下沉字母的高度，以行为单位。 **Long** 类型，可读写。 |
| [Position](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DropCap/member/Position) | 返回或设置首字下沉的位置。可读/写 **WdDropPosition** 类型。 |