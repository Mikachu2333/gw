# List.SingleListTemplate

如果整个列表都使用同一列表模板，则该属性值为 **True** 。只读 **Boolean** 类型。



## 语法

express.**SingleListTemplate**

express   一个代表 **List** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动文档的第一个列表是否使用相同的列表模板。*/
function test() {
    alert(ActiveDocument.Lists.Item(1).SingleListTemplate)
}
```


```JavaScript
/*本示例显示活动文档的第一个带有格式的列表是否使用相同的列表模板。*/
function test() {
    let list = ActiveDocument.Range().ListFormat.List
    alert(list.SingleListTemplate)
}
```
