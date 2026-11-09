# Range.StoryType

返回指定范围、所选内容或书签的文字部分类型。只读 **[WdStoryType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdStoryType)** 类型。



## 语法

express.**StoryType**

express   一个代表 **Range** 对象的变量。

## 类型

WdStoryType

## 示例


```JavaScript
/*本示例显示活动文档的第一个段落的文字部分的类型是否为正文。*/
function test() {
    let range = ActiveDocument.Paragraphs.Item(1).Range
    alert(range.StoryType == wdMainTextStory)
}
```


```JavaScript
/*本示例判断如果所选区域的文字部分类型为wdPrimaryHeaderStory，则替换所选区域的文本。*/
function test() {
    if (Selection.Range.StoryType == wdPrimaryHeaderStory) {
        Selection.Range.Text = "example"
    }
}
```
