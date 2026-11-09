# PageNumber.Select

选择指定的页码。



## 语法

express.**Select()**

express   一个代表 **PageNumber** 对象的变量。

## 返回值

void

## 说明


使用此方法之后，可用 **Selection** 属性处理所选项目。有关详细信息，请参阅处理 Selection 对象。



## 示例


```JavaScript
/*本示例选中活动文档上第一节的主页眉的第一个页码，并将选中区域的格式设置为加粗格式。*/
function test() {
    let pageNumber = ActiveDocument.Sections.Item(1).Headers.Item(wdHeaderFooterPrimary).PageNumbers.Item(1)
    pageNumber.Select()
    Selection.Range.Bold = true
}
```


```JavaScript
/*本示例选中第一个文档上第一节的主页脚的第一个页码，并将选中区域的字体设置为红色。*/
function test() {
    let pageNumber = Documents.Item(1).Sections.Item(1).Footers.Item(wdHeaderFooterPrimary).PageNumbers.Item(1)
    pageNumber.Select()
    Selection.Font.ColorIndex = wdRed
}
```
