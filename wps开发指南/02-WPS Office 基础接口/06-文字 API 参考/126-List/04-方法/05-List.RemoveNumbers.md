# List.RemoveNumbers

删除指定列表中的编号或项目符号。



## 语法

express.**RemoveNumbers(NumberType)**

express   一个代表 **List** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| NumberType | 可选 | any | 要删除的编号类型。 |

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动文档的第一个列表的编号或项目符号。*/
function test() {
    ActiveDocument.Lists.Item(1).RemoveNumbers()
}
```


```JavaScript
/*本示例删除活动文档的主文档文章中第一个带有格式的列表中的编号或项目符号，但不影响 LISTNUM 域。*/
function test() {
    let list = ActiveDocument.Content.ListFormat.List
    list.RemoveNumbers(wdNumberParagraph)
}
```
