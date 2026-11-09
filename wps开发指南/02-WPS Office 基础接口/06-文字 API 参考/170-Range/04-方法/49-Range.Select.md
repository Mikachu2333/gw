# Range.Select

选择指定的范围。



## 语法

express.**Select()**

express   一个代表 **Range** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例选择活动文档中的第一个段落，并为所选内容的字体设置加粗格式。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Range.Select()
    Selection.Font.Bold = msoTrue
}
```


```JavaScript
/*本示例选中活动文档的主文档文章，然后启用所选内容的边框。*/
function test() {
    ActiveDocument.Content.Select()
    Selection.Borders.Enable = msoTrue
}
```
