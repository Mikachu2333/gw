# Range.Information

返回有关指定范围的信息。只读 **Variant** 类型。



## 语法

express.**Information(Type)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 必选 | WdInformation | 消息类型。 |

## 返回值

any

## 示例


```JavaScript
/*如果第十个单词位于某个表格中，则本示例选定该表格。*/
function test() {
    if (ActiveDocument.Words.Item(10).Information(wdWithInTable)) {
        ActiveDocument.Words.Item(10).Tables.Item(1).Select()
    }
}
```


```JavaScript
/*本示例显示活动文档上第一个表格的最大行数。*/
function test() {
    alert(ActiveDocument.Tables.Item(1).Range.Information(wdMaximumNumberOfRows))
}
```
