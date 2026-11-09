# ContentControlListEntries.Add

将新的列表项添加到下拉列表或组合框内容控件中，并返回 **ContentControlListEntry** 对象。



## 语法

express.**Add(Text, Value, Index)**

express   一个代表 **ContentControlListEntries** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Text | 必选 | string | 指定列表项的显示文本。对应于 **ContentControlListEntry** 对象的 **Text** 属性。 |
| Value | 可选 | string | 指定列表项的值。对应于 **ContentControlListEntry** 对象的 **Value** 属性。如果省略它，则 **Value** 属性等于 **Text** 属性。 |
| Index | 可选 | number（int4 精度） | 指定新项在列表中的序号位置。 如果在指定的位置已有某项，则该现有项将在列表中下移。如果省略它，则新项将添加到列表的末尾。 |

## 返回值

ContentControlListEntry

## 说明


列表中的项必须具有唯一的显示名称。试图添加已存在的列表项会引发运行时错误。



## 示例


```JavaScript
/*本示例创建新的下拉列表内容控件，然后向它添加几个项。*/
function test() {
    let contentControl = ActiveDocument.ContentControls.Add(wdContentControlDropdownList)

    // List items
    contentControl.DropdownListEntries.Add("Cat")
    contentControl.DropdownListEntries.Add("Dog")
    contentControl.DropdownListEntries.Add("Equine")
    contentControl.DropdownListEntries.Add("Monkey")
    contentControl.DropdownListEntries.Add("Snake")
    contentControl.DropdownListEntries.Add("Other")
}
```


```JavaScript
/*本示例判断如果活动文档上第一个内容控件的类型为wdContentControlComboBox，则向该内容控件中添加项。*/
function test() {
    let contentControl = ActiveDocument.ContentControls.Item(1)
    if (contentControl.Type == wdContentControlComboBox) {
        contentControl.DropdownListEntries.Add("吴八", "89", 4)
    }
}
```
