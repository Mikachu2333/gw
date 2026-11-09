# Workbook.ActiveSlicer

返回一个对象，该对象代表活动工作簿或指定工作簿中的活动切片器。如果没有切片器处于活动状态，则返回 **null** 。只读。



## 语法

express.**ActiveSlicer**

express   一个代表 **Workbook** 对象的变量。

## 类型

Slicer

## 说明


如果没有指定 **Workbook** 对象，则此属性将返回活动工作簿中的活动切片器。



## 示例


```JavaScript
/*本示例设置活动工作簿上活动切片器的标题。*/
function test() {
    ActiveWorkbook.ActiveSlicer.Caption = "nameid"
}
```


```JavaScript
/*本示例设置第一张工作簿上活动切片器内的列数。*/
function test() {
    Workbooks.Item(1).ActiveSlicer.NumberOfColumns = 2
}
```
