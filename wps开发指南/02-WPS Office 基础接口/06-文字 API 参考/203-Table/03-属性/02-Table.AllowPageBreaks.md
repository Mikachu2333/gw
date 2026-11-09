# Table.AllowPageBreaks

允许 WPS 对指定表格进行跨页断行。 **Boolean** 类型，可读写。




## 语法

express.**AllowPageBreaks**

express   一个代表 **Table** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置活动文档的第二个表格跨页断行。*/
function test(){
    ActiveDocument.Tables.Item(2).AllowPageBreaks = true
}
```
