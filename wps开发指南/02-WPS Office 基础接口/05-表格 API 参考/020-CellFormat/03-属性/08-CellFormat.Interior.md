# CellFormat.Interior

返回一个 **[Interior](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Interior/obj)** 对象，该对象允许用户根据单元格内部格式设置或返回搜索条件。



## 语法

express.**Interior**

express   一个代表 **CellFormat** 对象的变量。

## 类型

Interior

## 示例


```JavaScript
/*此示例设置搜索条件以识别内部为纯黄色的单元格，创建满足该条件的单元格，找到该单元格，并通知给用户。*/
function test() {
    // Set the search criteria for the interior of the cell format.
    let interior = Application.FindFormat.Interior
    interior.ColorIndex = 6
    interior.Pattern = xlSolid
    interior.PatternColorIndex = xlAutomatic

    // Create a yellow interior for cell A5.
    Application.Range("A5").Select()
    Application.Selection.Interior.ColorIndex = 6
    Application.Selection.Interior.Pattern = xlSolid
    Application.Selection.Interior.PatternColorIndex = xlAutomatic
    Range("A1").Select()
    alert("Cell A5 has a yellow interior.")

    // Find the cells based on the search criteria.
    Application.Cells.Find("", ActiveCell, xlFormulas, xlPart, xlByRows, xlNext, false, null, true).Activate()
    alert("ET has found this cell matching the search criteria.")
}
```


```JavaScript
/*此示例显示查找条件中单元格的内部颜色是否为黄色。*/
function test() {
    alert(Application.FindFormat.Interior.Color == RGB(255, 255, 0))
}
```
