# CaptionLabels 对象

代表可用题注标签的 **[CaptionLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CaptionLabel/obj)** 对象的集合。 **CaptionLabels** 集合中的项目列在 **“题注”** 对话框的 **“标签”** 框中。

## 说明


用 **CaptionLabels** 属性可返回 **CaptionLabels** 集合。在默认情况下， **CaptionLabels** 集合包含四种题注标签：图、图表、表格和公式。

使用 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CaptionLabels/member/Add)** 方法添加自定义题注标签。


## 示例


```JavaScript
/*本示例添加名为“Photo”的题注标签。*/
function test() {
    Application.CaptionLabels.Add("Photo")
}
```
使用 **CaptionLabels** (_index_) 返回单个 **CaptionLabel** 对象，其中 _index_ 是题注标签的名称或索引编号。



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

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CaptionLabels/member/Add) | 返回一个 **CaptionLabel** 对象，该对象代表画布自定义题注标签。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CaptionLabels/member/Item) | 返回集合中的单个 **CaptionLabel** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CaptionLabels/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中题注标签的数目。只读。 |