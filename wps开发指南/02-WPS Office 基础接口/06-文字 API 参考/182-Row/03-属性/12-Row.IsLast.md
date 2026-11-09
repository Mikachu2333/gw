# Row.IsLast

如果指定的行是表格中的末行，则该属性值为 **True** 。否则为 **False** 。只读 **Boolean** 。



## 语法

express.**IsLast**

express   一个代表 **Row** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动文档上第一个表格的第二行是否为表格中的末行*/
function test() {
    alert(Application.ActiveDocument.Tables.Item(1).Rows.Item(2).IsLast)
}
```


```JavaScript
/*本示例显示所选内容的第三行是否为表格中的末行*/
function test() {
    alert(Application.Selection.Rows.Item(3).IsLast)
}
```
