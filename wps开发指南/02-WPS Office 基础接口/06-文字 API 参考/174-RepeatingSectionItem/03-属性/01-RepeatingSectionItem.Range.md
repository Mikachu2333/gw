# RepeatingSectionItem.Range

返回指定重复节项的范围，不包括开始和结束标记。只读。



## 语法

express.**Range**

express   一个代表 **RepeatingSectionItem** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例在活动文档中第一个（重复节）内容控件的最后一个重复节项后添加一个重复节项，并选中该重复节项的范围。*/
function test() {
    let rpsItemColl = ActiveDocument.ContentControls.Item(1).RepeatingSectionItems
    rpsItemColl.Item(rpsItemColl.Count).InsertItemAfter().Range.Select()
}
```


```JavaScript
/*本示例设置第一个文档中第一个（重复节）内容控件的所有重复节项的范围中文本的字体格式。*/
function test() {
    let rpsItemColl = Documents.Item(1).ContentControls.Item(1).RepeatingSectionItems
    for (let i = 1; i <= rpsItemColl.Count; i++) {
        rpsItemColl.Item(i).Range.Italic = true
    }
}
```
