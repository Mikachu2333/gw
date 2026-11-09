# Rows.Last

将 **Rows** 集合中的最后一项作为 **Row** 对象返回。



## 语法

express.**Last**

express   一个代表 **Rows** 对象的变量。

## 类型

Row

## 示例


```JavaScript
/*本示例删除活动文档上第一个表格中的最后一行。*/
function test() {
    ActiveDocument.Tables.Item(1).Rows.Last.Cells.Delete()
}
```


```JavaScript
/*本示例显示所选表格行的最后一行的行高。*/
function test() {
    alert(`${Selection.Rows.Last.Height} 磅`)
}
```
