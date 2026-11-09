# PrintRanges 对象

指定的演示文稿中所有 **[PrintRange](#TODO)** 对象的集合。每个 **PrintRange** 对象代表一个要打印的连续幻灯片或页的范围。

## 说明


使用 **[Ranges](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintOptions/member/Ranges)** 属性可返回 **PrintRanges** 集合。


## 示例


```JavaScript
/*本示例从当前演示文稿的集合中清除所有以前定义的打印范围。*/
function test() {
    ActivePresentation.PrintOptions.Ranges.ClearAll()
}
```
使用 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintRanges/member/Add)** 方法创建 **PrintRange** 对象并将其添加到 **PrintRanges** 集合。



```JavaScript
/*本示例清除当前演示文稿中所有以前定义的打印范围；创建新的打印范围，其中包含第一张，第三张到第五张，第八张和第九张幻灯片；然后打印新定义的幻灯片范围。*/
function test() {
    let printOptions = ActivePresentation.PrintOptions
    printOptions.RangeType = ppPrintSlideRange
    let printRanges = printOptions.Ranges
    printRanges.ClearAll()
    printRanges.Add(1, 1)
    printRanges.Add(3, 5)
    printRanges.Add(8, 9)
    ActivePresentation.PrintOut()
}
```
使用 **Ranges** (*index*)（其中 *index* 是打印范围索引号）可返回单个 **PrintRange** 对象。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintRanges/member/Add) | 返回一个 **[PrintRange](#TODO)** 对象，该对象代表要添加到 **PrintRanges** 集合的新打印区域。 |
| [ClearAll](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintRanges/member/ClearAll) | 从 **[PrintRanges](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintRanges/obj)** 集合中清除所有打印范围。使用 **PrintRanges** 集合的 **Add** 方法可向该集合中添加打印范围。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintRanges/member/Application) | 返回一个 **Application** 对象，该对象表示指定对象的创建者 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintRanges/member/Count) | 返回指定集合中的对象数目。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintRanges/member/Parent) | 返回指定对象的父对象。 |