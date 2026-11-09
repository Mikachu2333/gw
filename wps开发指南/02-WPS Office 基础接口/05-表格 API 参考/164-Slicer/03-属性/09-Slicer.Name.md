# Slicer.Name

返回或设置指定切片器的名称。可读/写。



## 语法

express.**Name**

express   一个代表 **Slicer** 对象的变量。

## 类型

string

## 说明


该名称在工作簿内的所有切片器中必须是唯一的。默认名称使用切片器所基于的 PivotField 的字段名称中的文本，如有必要，追加一个空格和数字使名称唯一。



## 示例


```JavaScript
/*本示例显示工作表 Sheet1 上第一个数据透视表的第四个切片器的名称。*/
function test() {
    alert(Worksheets.Item("Sheet1").PivotTables(1).Slicers.Item(4).Name)
}
```


```JavaScript
/*本示例将活动工作簿上名为“切片器_id”的切片器缓存中第一个切片器的名称设置为“sudent_id”。*/
function test() {
    let slicer = ActiveWorkbook.SlicerCaches("切片器_id").Slicers.Item(1)
    slicer.Name = "sudent_id"
}
```
