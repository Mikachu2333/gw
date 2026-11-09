# Application.Range

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，它代表一个单元格或单元格区域。



## 语法

express.**Range(Cell1, Cell2)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Cell1 | 必选 | any | 区域名称。必须为采用宏语言的 A1 样式引用。可包括区域操作符（冒号）、相交区域操作符（空格）或合并区域操作符（逗号）。也可包括货币符号，但它们会被忽略掉。您可以在区域中任一部分使用局部定义名称。如果使用名称，则假定该名称使用的是宏语言。 |
| Cell2 | 可选 | any | 区域左上角和右下角的单元格。可以是一个包含单个单元格、整列或整行的 **Range** 对象，或者也可以是一个用宏语言为单个单元格命名的字符串。 |

## 返回值

Range

## 说明


如果在没有对象识别符时使用，则该属性是 `ActiveSheet.Range` 的快捷方式（它返回活动表的一个区域，如果活动表不是一张工作表，则该属性无效）。

当应用于 **Range** 对象时，该属性与 **Range** 对象相关。例如，如果选中单元格 C3，那么 `Selection.Range("B1")` 返回单元格 D3，因为它同 **Selection** 属性返回的 **Range** 对象相关。此外，代码 `ActiveSheet.Range("B1")` 总是返回单元格 B1。



## 示例


```JavaScript
/*本示例将A1单元格的值设置为3.14159。*/
function test() {
    Application.Range("A1").Value2 = 3.14159
}
```


```JavaScript
/*本示例在A1单元格中创建一个公式。*/
function test() {
    Application.Range("A1").Formula = "=10*RAND()"
}
```


```JavaScript
/*此示例在单元格区域 A1:D10 中进行循环。如果某个单元格的值小于 0.001，则此代码将用 0（零）来取代该值。*/
function test() {
    let range = Application.Range("A1:D10")
    for (let i = range.Row; i <= range.Row + range.Rows.Count - 1; i++) {
        for (let j = range.Column; j <= range.Column + range.Columns.Count - 1; j++) {
            if (range.Cells.Item(i, j).Value2 < 0.001) {
                range.Cells.Item(i, j).Value2 = 0
            }
        }
    }
}
```


```JavaScript
/*此示例循环访问名区域 A1:D10，并显示区域中空单元格的数目。*/
function test() {
    let numBlanks = 0
    let range = Application.Range("A1:D10")
    for (let i = range.Row; i <= range.Row + range.Rows.Count - 1; i++) {
        for (let j = range.Column; j <= range.Column + range.Columns.Count - 1; j++) {
            if (range.Cells.Item(i, j).Value2 == null) {
                numBlanks = numBlanks + 1
            }
        }
    } alert(`There are ${numBlanks} empty cells in this range`)
}
```


```JavaScript
/*本示例将单元格区域 A1:C5 上的字体样式设置为斜体。*/
function test() {
    Application.Range(Cells(1, 1), Cells(5, 3)).Font.Italic = true
}
```
