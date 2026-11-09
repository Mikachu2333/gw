# Table.Spacing

返回或设置表格中单元格的间距（以磅为单位）。可读写 **Single** 类型。



## 语法

express.**Spacing**

express   一个代表 **Table** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动文档的第一个表格中的单元格的间距设置为 9 磅。*/
function test() {
    ActiveDocument.Tables.Item(1).Spacing = 9
}
```


```JavaScript
/*本示例显示选中的第一个表格的单元格的间距。*/
function test() {
    alert(Selection.Tables.Item(1).Spacing + "磅")
}
```
