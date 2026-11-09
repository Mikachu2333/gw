# PivotTable.CompactLayoutRowHeader

指定透视数据表在压缩行布局表单中时行标题中显示的标题。可读写 **String** 。



## 语法

express.**CompactLayoutRowHeader**

express   一个代表 **PivotTable** 对象的变量。

## 类型

string

## 说明


用户在网格中自定义这些标题时，这些标题也会反映到这些属性中。



## 示例


```JavaScript
/*本示例将活动工作表中第一张数据透视表压缩行布局显示的行标题设置为 KingSoft*/
function test() {
    ActiveSheet.PivotTables(1).CompactLayoutRowHeader = "KingSoft"
}
```


```JavaScript
/*本示例显示工作表 Sheet1 中数据透视表1压缩行布局显示的行标题*/
function test() {
    alert(Worksheets.Item("Sheet1").PivotTables("数据透视表1").CompactLayoutRowHeader)
}
```
