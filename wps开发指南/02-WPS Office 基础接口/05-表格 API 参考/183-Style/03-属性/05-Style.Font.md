# Style.Font

返回一个[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/obj) 对象，它代表指定对象的字体。



## 语法

express.**Font**

express   一个代表 **Style** 对象的变量。

## 类型

Font

## 示例


```JavaScript
/*本示例将第一张工作表中A1单元格字体的字号设为12磅。*/
function test() {
    let range = Application.Worksheets.Item(1).Range("A1")
    range.Value2 = "这是示例文本"
    range.Style.Font.Size = 12
}
```


```JavaScript
/*本示例将活动工作表中B1单元格的字体设置为绿色。*/
function test() {
    let range = ActiveSheet.Range("B1")
    range.Value2 = "这是示例文本"
    range.Style.Font.Color = RGB(0, 255, 0)
}
```
