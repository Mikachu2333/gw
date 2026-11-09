# CaptionLabel 对象

代表单个题注标签。 **CaptionLabel** 对象是 **[CaptionLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CaptionLabels/obj)** 集合的成员。 **CaptionLabels** 集合中的项目列在 **“题注”** 对话框的 **“标签”** 框中。

## 说明


使用 **[CaptionLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/CaptionLabels)** (_index_) 返回单个 **CaptionLabel** 对象，其中 _index_ 是题注标签的名称或索引编号。


## 示例


```JavaScript
/*本示例设置名为“example”的题注标签的编号样式。*/
function test() {
    let captionLabel = Application.CaptionLabels.Item("example")
    captionLabel.NumberStyle = wdCaptionNumberStyleLowercaseLetter
}
```
索引编号代表题注标签在 **CaptionLabels** 集合中的位置。



```JavaScript
/*本示例显示第一个题注标签的名称。*/
function test() {
    let captionLabel = Application.CaptionLabels.Item(1)
    alert(captionLabel.Name)
}
```
使用 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CaptionLabels/member/Add)** 方法添加自定义题注标签。



```JavaScript
/*本示例添加名为“Photo”的题注标签，并设置该标签的文本位置。*/
function test() {
    let captionLabel = Application.CaptionLabels.Add("Photo")
    captionLabel.Position = wdCaptionPositionAbove
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CaptionLabel/member/Delete) | 删除指定的题注标签。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [BuiltIn](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CaptionLabel/member/BuiltIn) | 如果指定的题注标签是 WPS 的内置题注标签之一，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [ChapterStyleLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CaptionLabel/member/ChapterStyleLevel) | 当指定题注标签包含章节号时，返回或设置用来标记新章节的标题样式。 **Long** 类型，可读写。 |
| [ID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CaptionLabel/member/ID) | 如果 **CaptionLabel** 对象的 **BuiltIn** 属性为 **True** ，则返回代表指定题注标签类型的 **WdCaptionLabelID** 常量。只读。 |
| [IncludeChapterNumber](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CaptionLabel/member/IncludeChapterNumber) | 如果页码或题注标签中包含章节号，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CaptionLabel/member/Name) | 返回指定对象的名称。 **String** 类型，只读。 |
| [NumberStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CaptionLabel/member/NumberStyle) | 返回或设置 **CaptionLabel** 对象的编号样式。 **WdCaptionNumberStyle** 类型，可读写。 |
| [Position](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CaptionLabel/member/Position) | 返回或设置题注标签文本的位置。可读/写 **WdCaptionPosition** 类型。 |
| [Separator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CaptionLabel/member/Separator) | 返回或设置章节编号和序号间的字符。可读/写 **WdSeparatorType** 类型。 |