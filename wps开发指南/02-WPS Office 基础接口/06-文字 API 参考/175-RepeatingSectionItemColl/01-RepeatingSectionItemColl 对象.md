# RepeatingSectionItemColl 对象

表示 **RepeatingSectionItem** 对象的集合。


## 示例


```JavaScript
/*本示例在活动文档中第一个（重复节）内容控件的最后一个重复节项后添加一个重复节项，并选中该重复节项的范围。*/
function test() {
    let rpsItemColl = ActiveDocument.ContentControls.Item(1).RepeatingSectionItems
    rpsItemColl.Item(rpsItemColl.Count).InsertItemAfter().Range.Select()
}
```


```JavaScript
/*本示例设置第一个文档中第一个（重复节）内容控件的所有重复节项的范围中文本的下划线类型。*/
function test() {
    let rpsItemColl = Documents.Item(1).ContentControls.Item(1).RepeatingSectionItems
    for (let i = 1; i <= rpsItemColl.Count; i++) {
        rpsItemColl.Item(i).Range.Underline = wdUnderlineDouble
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/RepeatingSectionItemColl/member/Item) | 返回一个单独的重复节项。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/RepeatingSectionItemColl/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中的重复节项数。只读。 |