# Slicer.NumberOfColumns

返回或设置指定切片器内的列数。可读/写。



## 语法

express.**NumberOfColumns**

express   一个代表 **Slicer** 对象的变量。

## 类型

number（int4 精度）

## 说明


默认值为 1。



## 示例


```JavaScript
/*本示例显示工作表 Sheet1 上第一张数据透视表的第二个切片器内的列数。*/
function test() {
    alert(Worksheets.Item("Sheet1").PivotTables(1).Slicers.Item(2).NumberOfColumns)
}
```


```JavaScript
/*本示例将活动工作表上数据透视表的第一个切片器内的列数设置为 3。*/
function test() {
    let slicer = ActiveSheet.Range("I1").PivotTable.Slicers.Item(1)
    slicer.NumberOfColumns = 3
}
```
