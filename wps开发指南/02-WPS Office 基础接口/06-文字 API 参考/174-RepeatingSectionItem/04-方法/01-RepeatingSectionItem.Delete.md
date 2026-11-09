# RepeatingSectionItem.Delete

删除指定的重复节项。



## 语法

express.**Delete()**

express   一个代表 **RepeatingSectionItem** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动文档中第一个（重复节）内容控件的第一个重复节项。*/
function test() {
    let rpsItem = ActiveDocument.ContentControls.Item(1).RepeatingSectionItems.Item(1)
    rpsItem.Delete()
}
```


```JavaScript
/*本示例删除第一个文档中第一个（重复节）内容控件的所有重复节项。*/
function test() {
    let rpsItemColl = Documents.Item(1).ContentControls.Item(1).RepeatingSectionItems
    for (let i = rpsItemColl.Count; i >= 1; i--) {
        rpsItemColl.Item(i).Delete()
    }
}
```
