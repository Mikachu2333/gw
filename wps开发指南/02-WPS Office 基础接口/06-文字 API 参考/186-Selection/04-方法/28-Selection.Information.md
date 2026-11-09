# Selection.Information

返回有关指定的选定内容的信息。 **Variant** 类型，只读。



## 语法

express.**Information(Type)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 必选 | WdInformation | 信息类型。 |

## 返回值

any

## 示例


```JavaScript
/*本示例显示当前页码和活动文档的总页数。*/
function test() {
    alert(`The selection is on page ${Selection.Information(wdActiveEndPageNumber)} of page ${Selection.Information(wdNumberOfPagesInDocument)}`)
}
```


```JavaScript
/*如果选定内容位于一个表格中，则本示例选定该表格。*/
function test() {
    if (Selection.Information(wdWithInTable)) {
        Selection.Tables.Item(1).Select()
    }
}
```


```JavaScript
/*本示例显示一条消息，表明当前的节号。*/
function test() {
    Selection.Collapse(wdCollapseStart)
    alert("The insertion point is in section " + Selection.Information(wdActiveEndSectionNumber))
}
```
