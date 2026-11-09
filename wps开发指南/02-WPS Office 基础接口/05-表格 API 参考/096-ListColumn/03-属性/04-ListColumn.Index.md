# ListColumn.Index

返回一个 **Long** 值，它代表 **ListColumn** 对象在 **ListColumns** 集合中的索引号。



## 语法

express.**Index**

express   一个代表 **ListColumn** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示第一张工作表的第一个 ListObject 对象中第二列的索引号。*/
function test() {
    let listObj = Worksheets.Item(1).ListObjects.Item(1)
    alert(listObj.ListColumns.Item(2).Index)
}
```


```JavaScript
/*本示例显示第一张工作表的第一个 ListObject 对象的第三列索引。*/
function test() {
    let listObj = Worksheets.Item(1).ListObjects.Item(1)
    alert(listObj.ListColumns.Item(3).Index)
}
```
