# Selection.StoryType

返回指定选定内容的文章类型。 **WdStoryType** 类型，只读。



## 语法

express.**StoryType**

express   一个代表 **Selection** 对象的变量。

## 类型

WdStoryType

## 示例


```JavaScript
/*本示例返回选定内容的文章类型。*/
function test() {
    let storyType = Selection.StoryType
}
```


```JavaScript
/*本示例判断如果当选定内容位于文档脚注的文章时，关闭脚注窗格。*/
function test() {
    ActiveDocument.ActiveWindow.View.Type = wdNormalView
    if (Selection.StoryType == wdFootnotesStory) {
        ActiveDocument.ActiveWindow.ActivePane.Close()
    }
}
```
