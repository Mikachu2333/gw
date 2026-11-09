# PivotCell.PivotColumnLine

在列上返回特定 **PivotCell** 对象的 **PivotLine** 。只读 **PivotLine** 类型。



## 语法

express.**PivotColumnLine**

express   一个代表 **PivotCell** 对象的变量。

## 类型

PivotLine

## 说明


如果 PivotCell 在行上，则 **PivotColumnLine** 属性返回一个运行时错误。  

如果 PivotCell 在列上，则 **PivotColumnLine** 属性返回列 **PivotLine** 对象。

如果 PivotCell 在数据区域中，则 **PivotColumnLine** 属性返回对应的列 **PivotLine** 对象。



## 示例


```JavaScript
/*本示例显示包含活动单元格的数据透视项列轴上数据透视线的类型是否为“xlPivotLineRegular”。*/
function test() {
    alert(ActiveCell.PivotCell.PivotColumnLine.LineType == xlPivotLineRegular)
}
```


```JavaScript
/*本示例显示包含单元格 M3 的数据透视项列轴上的位置。*/
function test() {
    let pvtLine = Range("M3").PivotCell.PivotColumnLine
    alert(pvtLine.Position)
}
```
