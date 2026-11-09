# Range.Cells

返回一个 Range 对象，该对象代表指定区域中的单元格。



## 语法

express.**Cells**

express   一个代表 **Range** 对象的变量。

## 类型

Range

## 说明


因为 **[Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Item)** 属性是 **Range** 对象的默认属性，所以可以在 **Cells** 关键字后面紧接着指定行和列索引。有关详细信息，请参阅 **Item** 属性和本主题的示例。

 在不使用对象识别符的情况下，使用此属性将返回一个 **Range** 对象，它代表活动工作表中所有的单元格。



## 示例


```JavaScript
/*本示例将 Sheet1 上单元格区域 A1: C5 的字体样式设置为斜体。*/
function test() {
    Application.Worksheets.Item("Sheet1").Activate()
    Application.Worksheets.Item("Sheet1").Range(Cells.Item(1, 1), Cells.Item(5, 3)).Font.Italic = true
}
```


```JavaScript
/*本示例搜索 A1:A3 中的数据。如果发现某单元格的值与上面的一个单元格的值相等，则本示例将显示这个包含重复数据的单元格的地址。*/
function test() {
    let r = Range("A1:A3")
    for (let n = 2; n <= r.Rows.Count; n++) {
        if (r.Cells.Item(n, 1).Value2 == r.Cells.Item(n - 1, 1).Value2) {
            MsgBox("Duplicate data in " + r.Cells.Item(n, 1).Address())
        }
    }
}
```
