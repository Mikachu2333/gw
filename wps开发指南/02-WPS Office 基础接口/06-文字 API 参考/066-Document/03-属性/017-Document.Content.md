# Document.Content

返回一个 **Range** 对象，该对象代表主文档文章。只读。



## 语法

express.**Content**

express   一个代表 **Document** 对象的变量。

## 类型

Range

## 说明


以下两个语句是等价的：`ActiveDocument.Content` 和 `ActiveDocument.StoryRanges(wdMainTextStory)`。



## 示例


```JavaScript
/*本示例将活动文档中的字体和字号分别改为 Arial 和 10 磅。*/
function test() {
    let range = ActiveDocument.Content
    range.Font.Name = "Arial"
    range.Font.Size = 10
}
```


```JavaScript
/*本示例遍历所有已打开的文档，在名为“Changes.doc”的文档末尾插入文本。*/
function test() {
    for (let i = 1; i <= Documents.Count; i++) {
        if (Documents.Item(i).Name.toLowerCase() == "changes.doc") {
            let range = Documents.Item("Changes.doc").Content
            range.InsertAfter("the end.")
        }
    }
}
```
