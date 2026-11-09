# SortField.SortOn

返回或设置要排序的单元格属性。可读/写 **[XlSortOn](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlSortOn)** 类型。



## 语法

express.**SortOn**

express   一个代表 **SortField** 对象的变量。

## 类型

XlSortOn

## 说明


| XlSortOn 可以是下列 **XlSortOn** 常量之一： |
| --------------------------------- |
| **SortOnCellColor**               |
| **SortOnFontColor**               |
| **SortOnIcon**                    |
| **SortOnValues**                  |



## 示例


```JavaScript
/*本示例在第一张工作表新建排序字段，并显示该排序字段是否按字体颜色对数据进行排序。*/
function test() {
    let sortfield = Application.Sheets.Item(1).Sort.SortFields.Add(Range("B1:B10"), xlSortOnFontColor)
    alert(sortfield.SortOn == xlSortOnFontColor)
}
```


```JavaScript
/*本示例在活动工作表新建排序字段，并设置该排序字段根据单元格颜色进行排序。*/
function test() {
    let sortfield = Application.Sheets.Item(1).Sort.SortFields.Add(Range("B1:B10"))
    sortfield.SortON = xlSortOnCellColor
}
```
