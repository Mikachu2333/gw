# Row.LeftIndent

返回或设置一个 **Single** 类型的值，该值代表指定表格行的左缩进值（以磅为单位）。可读写。



## 语法

express.**LeftIndent**

express   一个代表 **Row** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例设置活动文档中第一个表格的第一行的左缩进。*/
function test() {
    ActiveDocument.Tables.Item(1).Rows.Item(1).LeftIndent = InchesToPoints(1)
}
```


```JavaScript
/*本示例显示所选内容第二行的左缩进。*/
function test() {
    alert(Selection.Rows.Item(2).LeftIndent)
}
```
