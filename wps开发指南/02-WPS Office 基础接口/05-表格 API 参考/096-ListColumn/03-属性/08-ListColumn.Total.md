# ListColumn.Total

返回 **ListColumn** 对象的总计行。只读。



## 语法

express.**Total**

express   一个代表 **ListColumn** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例显示活动工作表的第一个 ListObject 对象的第二列总计行的值是否大于15。*/
function test() {
    let listObj = ActiveSheet.ListObjects.Item(1)
    alert(listObj.ListColumns.Item(2).Total.Value2 > 15)
}
```


```JavaScript
/*本示例显示第一张工作表的第一个 ListObject 对象中第一列的总计行的地址。*/
function test() {
    let listObj = Worksheets.Item(1).ListObjects.Item(1)
    alert(listObj.ListColumns.Item(1).Total.Address())
}
```
