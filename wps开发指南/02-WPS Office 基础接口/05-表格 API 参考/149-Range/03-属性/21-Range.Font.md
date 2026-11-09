# Range.Font

返回一个 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/obj)** 对象，它代表指定对象的字体。



## 语法

express.**Font**

express   一个代表 **Range** 对象的变量。

## 类型

Font

## 示例


```JavaScript
/*此示例判断单元格 A1 的字体名称是否为 Arial，并通知用户。*/
function test() {
    Application.Range("A1").Select()
    // Determine if the font name for selected cell is Arial.
    if (Application.Range("A1").Font.Name == "Arial") {
        MsgBox("The font name for this cell is 'Arial'")
    } else {
        MsgBox("The font name for this cell is not 'Arial'")
    }
}
```


```JavaScript
/*此示例将A1单元格字体加粗*/
function test() {
    Range("A1").Font.Bold = true
}
```
