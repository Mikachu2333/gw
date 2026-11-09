# Range.HighlightColorIndex

返回或设置指定区域的突出显示颜色。 **WdColorIndex** 类型，可读写。



## 语法

express.**HighlightColorIndex**

express   一个代表 **Range** 对象的变量。

## 类型

WdColorIndex

## 示例


```JavaScript
/*本示例删除选定内容中的突出显示格式。*/
function test() {
    Selection.Range.HighlightColorIndex = wdNoHighlight
}
```


```JavaScript
/*本示例用黄色来突出显示活动文档中的每个书签。*/
function test() {
    let bookmarks = ActiveDocument.Bookmarks
    for (let i = 1; i <= bookmarks.Count; i++) {
        bookmarks.Item(i).Range.HighlightColorIndex = wdYellow
    }
}
```
