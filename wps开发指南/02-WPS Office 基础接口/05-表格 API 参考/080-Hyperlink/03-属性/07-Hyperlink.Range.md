# Hyperlink.Range

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，它代表附加的指定超链接的区域。



## 语法

express.**Range**

express   一个代表 **Hyperlink** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*此示例显示工作表Sheet1中第二个超链接所在单元格区域的地址*/
function test() {
    alert(Application.Worksheets.Item("Sheet1").Hyperlinks.Item(2).Range.Address())
}
```


```JavaScript
/*此示例滚动工作簿窗口，直至超链接区域位于活动窗口的左上角*/
function test() {
    Application.Workbooks.Item(1).Activate()
    let range = Application.ActiveSheet.Hyperlinks.Item(1).Range
    Application.ActiveWindow.ScrollRow = range.Row
    Application.ActiveWindow.ScrollColumn = range.Column
}
```
