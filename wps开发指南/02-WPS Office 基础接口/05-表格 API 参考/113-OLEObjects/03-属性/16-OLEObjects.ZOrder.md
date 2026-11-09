# OLEObjects.ZOrder

返回指定对象的 z-次序位置。 **Long** 型，只读。



## 语法

express.**ZOrder**

express   一个代表 **OLEObjects** 对象的变量。

## 类型

number（int4 精度）

## 说明


在任何对象集合中，z-次序尾端的对象为 *collection*(1)，z-次序前端的对象为 *collection*(*collection*. **Count** )。例如，如果活动工作表中有嵌入图表，z-次序尾端的图表为 `ActiveSheet.ChartObjects(1)`，z-次序前端的图表为 `ActiveSheet.ChartObjects(ActiveSheet.ChartObjects.Count)`。



## 示例


```JavaScript
/*此示例在工作表 Sheet1 中新建一个文档 OLE 对象，并显示其z-次序位置*/
function test() {
    let sheet = Application.Worksheets.Item("Sheet1")
    sheet.OLEObjects().Add("Word.Document.12")
    alert(`OLE 对象集合的z-次序位置为${sheet.OLEObjects().ZOrder}`)
}
```


```JavaScript
/*此示例在第一张工作表中由文件创建一个 OLE 对象，并显示其z-次序位置*/
function test() {
    let sheet = Application.Worksheets.Item(1)
    sheet.OLEObjects().Add("", "D:/data.xlsx", true, false, null, null, "data.xlsx")
    alert(`OLE 对象集合的z-次序位置为${sheet.OLEObjects().ZOrder}`)
}
```
