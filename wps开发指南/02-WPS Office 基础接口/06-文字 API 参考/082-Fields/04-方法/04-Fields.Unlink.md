# Fields.Unlink

将 **Fields** 集合中的所有域替换为它们的最新结果。



## 语法

express.**Unlink()**

express   一个代表 **Fields** 对象的变量。

## 返回值

void

## 说明


如果断开一个域的链接，则当前结果会转换为文字或图形，并且无法再自动更新。注意，某些域（例如，XE（索引项）域和 SEQ（序列）域）不能断开链接。



## 示例


```JavaScript
/*本示例更新并断开活动文档第一节中的所有域的链接。*/
function test() {
    ActiveDocument.Sections.Item(1).Range.Fields.Update()
    ActiveDocument.Sections.Item(1).Range.Fields.Unlink()
}
```


```JavaScript
/*本示例断开所选内容中的所有域的链接。*/
function test() {
    Selection.Fields.Unlink()
}
```
