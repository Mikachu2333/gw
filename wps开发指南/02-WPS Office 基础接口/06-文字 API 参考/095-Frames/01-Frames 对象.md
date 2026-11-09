# Frames 对象

 **[Frame](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frame/obj)** 对象的集合。


## 示例


```JavaScript
/*本示例在选定内容周围添加一个框架。*/
function test() {
    Documents.Item(1).Frames.Add(Selection.Range)
}
```


```JavaScript
/*本示例将活动文档上第一个框架的宽度设置为 3 英寸。*/
function test() {
    ActiveDocument.Frames.Item(1).WidthRule = wdFrameExact
    ActiveDocument.Frames.Item(1).Width = InchesToPoints(3)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frames/member/Add) | 返回一个 Frame 对象，该对象代表添加到区域、选定内容或文档中的新框架。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frames/member/Delete) | 删除指定的 Frames 集合。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frames/member/Item) | 返回集合中的单个 **Frame** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frames/member/Count) | 返回一个 Long 类型的值，该值代表集合中框架的数目。只读。 |