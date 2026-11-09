# Rows.LeftIndent

返回或设置一个 **Single** 类型的值，该值代表指定表格行的左缩进值（以磅为单位）。可读写。



## 语法

express.**LeftIndent**

express   一个代表 **Rows** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动文档的第一个表格的各行左缩进设置为 1 英寸。*/
function test() {
    ActiveDocument.Tables.Item(1).Rows.LeftIndent = InchesToPoints(1)
}
```


```JavaScript
/*本示例显示所选表格行的左缩进值。*/
function test() {
    alert(`${Selection.Rows.LeftIndent} 磅`)
}
```
