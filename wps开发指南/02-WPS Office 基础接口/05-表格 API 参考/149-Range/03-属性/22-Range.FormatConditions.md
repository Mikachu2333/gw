# Range.FormatConditions

返回一个 **[FormatConditions](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatConditions/obj)** 集合，该集合表示指定区域的所有条件格式。只读。



## 语法

express.**FormatConditions**

express   一个代表 **Range** 对象的变量。

## 类型

FormatConditions

## 示例


```JavaScript
/*本示例更改单元格区域 E1:E10 的现有条件格式。*/
function test() {
    Range("E1:E10").FormatConditions.Item(1).Modify(xlCellValue, xlLess, "=$A$1")
}
```


```JavaScript
/*本示例为 A1:C3 单元格区域添加条件格式，并显示 B2 单元格的条件格式数量，然后将 A1:C3 单元格区域条件格式删除，再显示 B2 单元格的条件格式数量*/
function test() {
    Range("A1:C3").FormatConditions.Add(xlUniqueValues, xlGreater, 6)
    alert(Range("B2").FormatConditions.Count)
    Range("A1:C3").FormatConditions.Delete()
    alert(Range("B2").FormatConditions.Count)
}
```
