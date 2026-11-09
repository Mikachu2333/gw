# PivotCache.CommandText

返回或设置指定数据源的命令串。 **Variant** 型，可读写。



## 语法

express.**CommandText**

express   一个代表 **PivotCache** 对象的变量。

## 类型

any

## 说明


对于 OLE DB 数据源， **CommandType** 属性描述了 **CommandText** 属性的值。

对于 ODBC 源，设置 **CommandText** 将导致刷新数据。



## 示例


```JavaScript
/*本示例显示工作表 Sheet1 上的第一个数据透视表缓存的数据源的命令串。*/
function test() {
    let pvtCache = Worksheets.Item("Sheet1").PivotTables(1).PivotCache()
    alert(pvtCache.CommandText)
}
```


```JavaScript
/*本示例设置活动工作簿上数据透视缓存的数据源的命令串，并刷新该数据透视缓存。*/
function test() {
    let pvtCache = ActiveWorkbook.PivotCaches().Item(1)
    pvtCache.CommandText = "SELECT * FROM `student` WHERE `nameid` < 4"
    pvtCache.Refresh()
}
```
