# PivotTable.ShowValuesRow

返回或设置是否显示值行。可读/写



## 语法

express.**ShowValuesRow**

express   一个代表 **PivotTable** 对象的变量。

## 类型

boolean

## 说明


此属性对应于 **“数据透视表选项”** 对话框的 **“显示”** 选项卡上的 **“显示值行”** 复选框的设置。



## 示例


```JavaScript
/*本示例显示数据透视表的值行*/
function test() {
    Worksheets.Item(1).PivotTables(1).ShowValuesRow = true
}
```


```JavaScript
/*本示例显示数据透视表 ShowValuesRow 属性的数据类型，并设置为 false*/
function test() {
    alert(typeof ActiveSheet.PivotTables(1).ShowValuesRow)
    ActiveSheet.PivotTables(1).ShowValuesRow = false
}
```
