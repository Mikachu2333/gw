# Application.ReplaceFormat

设置替换条件以用于替换单元格格式。然后，在对 Range 对象的 **Replace** 方法的后续调用中使用替换条件。



## 语法

express.**ReplaceFormat**

express   一个代表 **Application** 对象的变量。

## 类型

CellFormat

## 示例


```JavaScript
/*本示例设置搜索条件以查找包含 Arial、Regular、Size 10 字体的单元格，将其格式替换为 Arial、Bold、Size 8 字体，然后调用Replace方法，并将SearchFormat和ReplaceFormat的可选参数设置为True以实际进行更改。*/
function test() {
    // Establish search criteria.
    let font = Application.FindFormat.Font
    font.Name = "Arial"
    font.FontStyle = "Regular"
    font.Size = 10

    // Establish replacement criteria.
    let font1 = Application.ReplaceFormat.Font
    font1.Name = "Arial"
    font1.FontStyle = "Bold"
    font1.Size = 8

    // Notify user.
    let font2 = Application.ReplaceFormat.Font
    alert(`${font2.Name} - ${font2.FontStyle} - ${font2.Size} font is what the search criteria will replace cell formats with.`)

    // Make the replacements on the worksheet.
    Application.Cells.Replace("", "", null, null, null, true, true)
}
```


```JavaScript
/*本示例设置替换条件以用于替换单元格格式。*/
function test() {
    Application.ReplaceFormat.Interior.ColorIndex = 3
}
```
