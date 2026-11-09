# Font.ThemeFont

返回或设置与指定对象关联的应用字体方案中的主题字体。可读/写 **[XlThemeFont](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlThemeFont)** 类型。



## 语法

express.**ThemeFont**

express   一个代表 **Font** 对象的变量。

## 类型

XlThemeFont

## 示例


```JavaScript
/*本示例将Sheet1中活动单元格的字体的主题字体设置为主题正文*/
function test() {
    Application.Worksheets.Item("Sheet1").Activate()
    Application.ActiveCell.Font.ThemeFont = xlThemeFontMinor
}
```


```JavaScript
/*本示例判断工作表Sheet1中单元格A5的字体的主题字体是否为主题标题，不是则设置其字体大小为16磅*/
function test() {
    let font = Application.Worksheets("Sheet1").Range("A5").Font
    if (font.ThemeFont == xlThemeFontMajor) {
        alert("字体的主题字体是主题标题")
    } else {
        font.Size = 16
    }
}
```
