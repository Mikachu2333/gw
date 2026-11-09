# DocumentField.StoryType

返回一个 **WdStoryType** 类型值，该值代表此公文域的类型。只读。



## 语法

express.**StoryType**

express   一个代表 **DocumentField** 对象的变量。

## 类型

WdStoryType

## 示例


```JavaScript
/*本示例显示第一个文档上第一个公文域的类型是否为wdMainTextStory。*/
function test() {
    let documentField = Documents.Item(1).DocumentFields.Item(1)
    alert(documentField.StoryType == wdMainTextStory)
}
```


```JavaScript
/*本示例显示所选内容中名为“example2”的公文域的类型是否为wdCommentsStory。*/
function test() {
    let documentField = Selection.DocumentFields.Item("example2")
    alert(documentField.StoryType == wdCommentsStory)
}
```
