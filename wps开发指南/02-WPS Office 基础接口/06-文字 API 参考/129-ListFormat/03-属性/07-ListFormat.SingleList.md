# ListFormat.SingleList

如果指定的 **ListFormat** 对象只包含一个列表，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**SingleList**

express   一个代表 **ListFormat** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例判断如果所选内容的列表格式中只包含一个列表，则清除其中已有的编号和格式。*/
function test() {
    let listFormat = Selection.Range.ListFormat
    if (listFormat.SingleList) {
        listFormat.ApplyNumberDefault()
    }
}
```


```JavaScript
/*本示例显示活动文档的主文档文章的列表格式中是否只包含一个列表。*/
function test() {
    alert(ActiveDocument.Content.ListFormat.SingleList)
}
```
