# PivotTable.LayoutRowDefault

此属性指定初次将透视字段添加到数据透视表中时它们的布局设置。可读/写 **xlLayoutRowType** 类型。



## 语法

express.**LayoutRowDefault**

express   一个代表 **PivotTable** 对象的变量。

## 类型

XlLayoutRowType

## 说明


 **xlLayoutRowType** 可以是 **xlCompactRow** 、 **xlTabularRow** 或 **xlOutlineRow** 。



## 示例


```JavaScript
/*本示例将活动工作表中第一张数据透视表初次将透视字段添加时的布局设置为表格行*/
function test() {
    ActiveSheet.PivotTables(1).LayoutRowDefault = xlTabularRow
}
```


```JavaScript
/*本示例检查如果初次将透视字段添加到数据透视表中时它们的布局为大纲行，则修改为压缩行*/
function test() {
    if (ActiveSheet.PivotTables(1).LayoutRowDefault == xlOutlineRow) {
        alert("初次将透视字段添加到数据透视表中时它们的布局为大纲行，弹框关闭后修改为压缩行")
        ActiveSheet.PivotTables(1).LayoutRowDefault = xlCompactRow
    }
}
```
