# Footnote.Range

返回一个 **Range** 对象，该对象代表脚注中包含的文档部分。



## 语法

express.**Range**

express   一个代表 **Footnote** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例显示选中区域的最后一个脚注中包含的文档部分的内容。*/
function test() {
    alert(Application.Selection.Footnotes.Item(Application.Selection.Footnotes.Count).Range.Text)
}
```


```JavaScript
/*本示例将活动文档第二个脚注中包含的文档部分字体加粗。*/
function test() {
    ActiveDocument.Footnotes.Item(2).Range.Bold = true
}
```
