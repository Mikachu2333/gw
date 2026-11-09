# CellFormat.Font

返回一个 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/obj)** 对象，该对象允许用户根据单元格的字体格式设置或返回搜索条件。



## 语法

express.**Font**

express   一个代表 **CellFormat** 对象的变量。

## 类型

Font

## 示例


```JavaScript
/*此示例设置搜索条件以识别包含红色字体的单元格，应用该条件创建一个单元格，找到该单元格，并通知用户。*/
function test() {
    // Set the search criteria for the font of the cell format.
    Application.FindFormat.Font.ColorIndex = 3

    // Set the color index of the font for cell A5 to red.
    Application.Range("A5").Font.ColorIndex = 3
    Application.Range("A5").Formula = "Red font"
    Application.Range("A1").Select()
    alert("Cell A5 has red font")

    // Find the cells based on the search criteria.
    Application.Cells.Find("", ActiveCell, xlFormulas, xlPart, xlByRows, xlNext, false, null, true).Activate()
    alert("ET has found this cell matching the search criteria.")
}
```


```JavaScript
/*此示例显示查找条件中单元格的字体和字号。*/
function test() {
    let font = Application.FindFormat.Font
    alert(`字体为${font.Name}，字号为${font.Size}`)
}
```
