# Workbook.IconSets

此属性用于基于 **IconSet** 集合中的单元格图标对工作簿中的数据进行筛选。只读。



## 语法

express.**IconSets**

express   一个代表 **Workbook** 对象的变量。

## 类型

IconSets

## 示例


```JavaScript
/*以下示例按单元格图标筛选数据。*/
function test() {
    Selection.AutoFilter(1, ActiveWorkbook.IconSets(xl3Arrows).Item(1), xlFilterIcon)
}
```


```JavaScript
/*本示例显示第一张工作簿上图标集的数目。*/
function test() {
    alert(Workbooks.Item(1).IconSets.Count)
}
```
