# PivotTable.CompactRowIndent

当启用压缩行布局表单时，返回或设置透视项目的缩进增量。可读写。



## 语法

express.**CompactRowIndent**

express   一个代表 **PivotTable** 对象的变量。

## 类型

number（int4 精度）

## 说明


默认值为 1。此设置的有效值为 0 到 ET 中指定的最大缩进。



## 示例


```JavaScript
/*本示例将活动工作表中第一张数据透视表的缩进增量设置为 20，并显示*/
function test() {
    ActiveSheet.PivotTables(1).CompactRowIndent = 20
    alert(ActiveSheet.PivotTables(1).CompactRowIndent)
}
```


```JavaScript
/*本示例判断工作表 Sheet1 中第一张数据透视表的缩减增量是否小于30，如小于则将其设置为 30*/
function test() {
    if (Worksheets.Item("Sheet1").PivotTables(1).CompactRowIndent < 30) {
        Worksheets.Item("Sheet1").PivotTables(1).CompactRowIndent = 30
    }
}
```
