# ListFormat.RemoveNumbers

删除指定列表中的编号或项目符号。



## 语法

express.**RemoveNumbers(NumberType)**

express   一个代表 **ListFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| NumberType | 可选 | any | 要删除的编号类型。 |

## 返回值

void

## 示例


```JavaScript
/*本示例删除所选内容中所有已编号段落的项目符号或编号。*/
function test() {
    Selection.Range.ListFormat.RemoveNumbers()
}
```


```JavaScript
/*本示例删除所选内容中所有已编号段落的项目符号或编号，但不包括 LISTNUM 域。*/
function test() {
    Selection.Range.ListFormat.RemoveNumbers(wdNumberParagraph)
}
```
