# PivotTable.RowAxisLayout

此方法用于同时为所有现有的透视字段设置版式选项。



## 语法

express.**RowAxisLayout(RowLayout)**

express   一个代表 **PivotTable** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| RowLayout | 必选 | XlLayoutRowType | 可以是 **xlCompactRow** 、 **xlTabularRow** 或 **xlOutlineRow** 。 |

## 返回值

void

## 说明


此方法是基本的，因此，它确保了如果不能在任何透视字段上设置版式选项，则这些字段中没有一个的版式选项将会改变，而且不会对数据透视表进行任何更改。



## 示例


```JavaScript
/*本示例将第一张数据透视表的版式行类型设置为表格行*/
function test() {
    Worksheets.Item(1).PivotTables(1).RowAxisLayout(xlTabularRow)
}
```


```JavaScript
/*本示例将第一张数据透视表的版式行类型设置为压缩行，并弹窗提示*/
function test() {
    ActiveSheet.PivotTables(1).RowAxisLayout(xlCompactRow)
    alert("数据透视表的版式行类型为压缩行")
}
```
