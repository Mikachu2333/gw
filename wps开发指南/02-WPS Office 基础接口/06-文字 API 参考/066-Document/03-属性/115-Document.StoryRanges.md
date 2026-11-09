# Document.StoryRanges

返回一个 **[StoryRanges](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/StoryRanges/obj)** 集合，该集合代表指定文档中的所有的内容。只读。



## 语法

express.**StoryRanges**

express   一个代表 **Document** 对象的变量。

## 类型

StoryRanges

## 示例


```JavaScript
/*本示例判断如果活动文档包含偶数页页脚，则通知用户。*/
function test() {
    let range = null
    try {
        range = ActiveDocument.StoryRanges.Item(wdEvenPagesFooterStory)
    } catch (e) {
        console.log(e.toString())
    }
    if (range) {
        alert("Document includes an even page footer")
    }
}
```


```JavaScript
/*本示例将文字添至文档页眉部分，然后显示该文字。*/
function test() {
    ActiveDocument.Sections.Item(1).Headers.Item(wdHeaderFooterPrimary).Range.Text = "Header text"
    alert(ActiveDocument.StoryRanges.Item(wdPrimaryHeaderStory).Text)
}
```
