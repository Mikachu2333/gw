# RepeatingSectionItemColl.Item

返回一个单独的重复节项。



## 语法

express.**Item(Index)**

express   一个代表 **RepeatingSectionItemColl** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 集合中项的索引号。 |

## 返回值

RepeatingSectionItem

## 示例


```JavaScript
/*本示例删除第一个文档中第一个（重复节）内容控件的所有重复节项。*/
function test() {
    let rpsItemColl = Documents.Item(1).ContentControls.Item(1).RepeatingSectionItems
    for (let i = rpsItemColl.Count; i >= 1; i--) {
        rpsItemColl.Item(i).Delete()
    }
}
```


```JavaScript
/*本示例在活动文档中第一个（重复节）内容控件的第二个重复节项后添加一个重复节项。*/
function test() {
    let rpsItem = ActiveDocument.ContentControls.Item(1).RepeatingSectionItems.Item(2)
    rpsItem.InsertItemAfter()
}
```
