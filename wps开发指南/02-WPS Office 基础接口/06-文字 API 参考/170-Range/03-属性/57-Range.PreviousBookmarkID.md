# Range.PreviousBookmarkID

返回最后一个书签的编号，该书签从指定范围的前面或与指定范围相同的位置开始。只读 **Long** 类型。



## 语法

express.**PreviousBookmarkID**

express   一个代表 **Range** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果没有相应的书签，则该属性返回 0（零）。



## 示例


```JavaScript
/*本示例显示第二段前面的书签的名称。*/
function test() {
    let num = ActiveDocument.Paragraphs.Item(2).Range.PreviousBookmarkID
    if (num !== 0) {
        alert(ActiveDocument.Content.Bookmarks.Item(num).Name)
    }
}
```


```JavaScript
/*本示例显示插入点前面的书签关联的文档部分的文本。*/
function test() {
    let num = Selection.Range.PreviousBookmarkID
    if (num !== 0) {
        alert(ActiveDocument.Bookmarks.Item(num).Range.Text)
    }
}
```
