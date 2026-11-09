# ListRow.Index

返回一个 **Long** 值，它代表 **ListRow** 对象在 **ListRows** 集合中的索引号。



## 语法

express.**Index**

express   一个代表 **ListRow** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示第一张工作表的第一个 ListObject 对象中第二行的索引号。*/
function test() {
    let listObj = Worksheets.Item(1).ListObjects.Item(1)
    alert(listObj.ListRows.Item(2).Index)
}
```


```JavaScript
/*本示例显示活动工作表的第一个 ListObject 对象各行的索引。*/
function test() {
    let listObj = ActiveSheet.ListObjects.Item(1)
    for (let i = 1; i <= listObj.ListRows.Count; i++) {
        alert(listObj.ListRows.Item(i).Index)
    }
}
```
