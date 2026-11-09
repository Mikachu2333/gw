# Revisions.Item

返回集合中的单个 **Revision** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Revisions** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。 |

## 返回值

Revision

## 示例


```JavaScript
/*本示例在活动文档上插入主文档的所有修订的日期和时间。*/
function test() {
    let revisions = ActiveDocument.Content.Revisions
    for (let i = 1; i <= revisions.Count; i++) {
        Selection.TypeText(revisions.Item(i).Date + "\n")
    }
}
```


```JavaScript
/*本示例显示所选第一节中第四处修订的所作格式更改的说明。*/
function test() {
    alert(Selection.Sections.Item(1).Range.Revisions.Item(4).FormatDescription)
}
```
