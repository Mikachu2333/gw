# RepeatingSectionItem 对象

表示内容控件中的重复节项。

## 说明


若要获取 **RepeatingSectionItem** 对象，请使用 **RepeatingSectionItemColl** 集合的 **Item** 方法。

可以使用 **InsertItemBefore** 或 **InsertItemAfter** 方法在指定的重复节项之前或之后插入其他重复节项。若要删除指定的重复节项，请使用 **Delete** 方法。 若要获取指定的重复节项的范围，请使用 **Range** 属性。


## 示例


```JavaScript
/*本示例删除第一个文档上第一个（重复节）内容控件中除第一个重复节项外其他重复节项，然后在第一个重复节项后添加一个重复节项。*/
function test() {
    let rpsItemColl = Documents.Item(1).ContentControls.Item(1).RepeatingSectionItems
    for (let i = rpsItemColl.Count; i > 1; i--) {
        rpsItemColl.Item(i).Delete()
    }
    rpsItemColl.Item(1).InsertItemAfter()
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
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/RepeatingSectionItem/member/Delete) | 删除指定的重复节项。 |
| [InsertItemAfter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/RepeatingSectionItem/member/InsertItemAfter) | 在指定项后面添加一个重复节项，并返回新项。 |
| [InsertItemBefore](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/RepeatingSectionItem/member/InsertItemBefore) | 在指定项前面添加一个重复节项，并返回新项。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/RepeatingSectionItem/member/Range) | 返回指定重复节项的范围，不包括开始和结束标记。只读。 |