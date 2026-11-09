# Frame.Select

选择指定的对象。



## 语法

express.**Select()**

express   一个代表 **Frame** 对象的变量。

## 返回值

void

## 说明


使用此方法后，可使用 **[Selection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/obj)** 对象处理所选项目。有关详细信息，请参阅处理 **Selection** 对象。



## 示例


```JavaScript
/*本示例选中活动文档的第二个框架，并设置所选内容的外边框颜色。*/
function test() {
    let frame = ActiveDocument.Frames.Item(2)
    frame.Select()
    Selection.Borders.OutsideColor = wdColorRed
}
```


```JavaScript
/*本示例选中第一个文档的第三个框架，并为所选内容中字体设置斜体格式。*/
function test() {
    let frame = Documents.Item(1).Frames.Item(3)
    frame.Select()
    Selection.Font.Italic = msoTrue
}
```
