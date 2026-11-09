# ContentControlListEntries.Item

返回集合中的单个 **ContentControlListEntries** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **ContentControlListEntries** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 指定对象在集合中的序号位置。 |

## 返回值

ContentControlListEntry

## 示例


```JavaScript
/*本示例将活动文档的第一个内容控件中的第二项下移一项。*/
function test() {
    let listEntry = ActiveDocument.ContentControls.Item(1).DropdownListEntries.Item(2)
    listEntry.MoveDown()
}
```


```JavaScript
/*本示例将所选内容的文本替换为第一个文档上第一个内容控件中所有项的文本和值。*/
function test() {
    let str = ""
    let listEntries = Documents.Item(1).ContentControls.Item(1).DropdownListEntries
    for (let i = 1; i <= listEntries.Count; i++) {
        str += listEntries.Item(i).Text + "\t" + listEntries.Item(i).Value + "\n"
    }
    Selection.Range.Text = str
}
```
