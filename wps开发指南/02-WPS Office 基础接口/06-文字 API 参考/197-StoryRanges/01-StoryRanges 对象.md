# StoryRanges 对象

 **Range** 对象的集合，这些对象代表文档中的文章。

## 说明


使用 **StoryRanges** 属性返回 **StoryRanges** 集合。

使用 **NextStoryRange** 属性循环访问文档中的所有文章。


## 示例


```JavaScript
/*本示例从活动文档中删除数组 arr 中除正文文章之外的所有文章的文本中手动字符格式。*/
function test() {
    let arr = [wdMainTextStory, wdPrimaryFooterStory, wdPrimaryHeaderStory]
    let ranges = ActiveDocument.StoryRanges
    for (let i = 0; i < arr.length; i++) {
        if (ranges.Item(arr[i]).StoryType !== wdMainTextStory) {
            ranges.Item(arr[i]).Font.Reset()
        }
    }
}
```
不可用 **StoryRanges** 集合的 Add 方法。 **StoryRanges** 集合中的情景数是有限的。

使用 **StoryRanges** (Index)（其中 Index 是 **WdStoryType** 常量）将单个文章作为 **Range** 对象返回。



```JavaScript
/*本示例将文本添加到主页眉部分，然后显示文本。*/
function test() {
    ActiveDocument.Sections.Item(1).Headers.Item(wdHeaderFooterPrimary).Range.Text = "Header text"
    alert(ActiveDocument.StoryRanges.Item(wdPrimaryHeaderStory).Text)
}
```


```JavaScript
/*本示例将活动文档中的脚注文本复制到一个新文档中。*/
function test() {
    if (ActiveDocument.Footnotes.Count >= 1) {
        ActiveDocument.StoryRanges.Item(wdFootnotesStory).Copy()
        Documents.Add().Content.Paste()
    }
}
```


```JavaScript
/*本示例确定脚注部分在活动文档中是否可用。试图返回在指定文档中不可用的文章时会出错。*/
function test() {
    try {
        let range = ActiveDocument.StoryRanges.Item(wdFootnotesStory)
    } catch (error) {
        alert("The footnotes story is not available.")
    }
}
```


```JavaScript
/*本示例从活动文档上数组 arr 中所有文章搜索文本“WPS”，如果找到文本，则将其格式设置为斜体。*/
function test() {
    let arr = [wdMainTextStory, wdPrimaryFooterStory, wdPrimaryHeaderStory]
    for (let i = 0; i < arr.length; i++) {
        let range = ActiveDocument.StoryRanges.Item(arr[i])
        let bl = range.Find.Execute("WPS", null, null, null, null, null, true)
        if (bl) {
            range.Italic = true
        }
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/StoryRanges/member/Item) | 将区域或选定内容的单个文字部分作为 **Range** 对象返回。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/StoryRanges/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/StoryRanges/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中存储区域的数量。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/StoryRanges/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/StoryRanges/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **StoryRanges** 对象的父对象。 |