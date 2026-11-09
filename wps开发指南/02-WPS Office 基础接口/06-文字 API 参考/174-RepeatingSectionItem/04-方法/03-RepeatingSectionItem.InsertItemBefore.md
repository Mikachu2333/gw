# RepeatingSectionItem.InsertItemBefore

在指定项前面添加一个重复节项，并返回新项。



## 语法

express.**InsertItemBefore()**

express   一个代表 **RepeatingSectionItem** 对象的变量。

## 返回值

RepeatingSectionItem

## 说明


只能对重复节项内容控件调用此方法。

如果 **ContentControl.AllowInsertDeleteSection** 属性设置为 **False** ，此方法将返回错误。



## 示例


```JavaScript
/*本示例在活动文档中第一个（重复节）内容控件的第三个重复节项前添加一个重复节项。*/
function test() {
    let rpsItem = ActiveDocument.ContentControls.Item(1).RepeatingSectionItems.Item(3)
    rpsItem.InsertItemBefore()
}
```


```JavaScript
/*本示例在第一个文档中第一个（重复节）内容控件的最后一个重复节项前添加一个重复节项，并显示该重复节项的范围中的文本。*/
function test() {
    let rpsItemColl = Documents.Item(1).ContentControls.Item(1).RepeatingSectionItems
    alert(rpsItemColl.Item(rpsItemColl.Count).InsertItemBefore().Range.Text)
}
```
