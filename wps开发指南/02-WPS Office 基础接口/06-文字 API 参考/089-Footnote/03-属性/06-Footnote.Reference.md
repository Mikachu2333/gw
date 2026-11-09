# Footnote.Reference

返回一个 **Range** 对象，该对象代表脚注引用标记。



## 语法

express.**Reference**

express   一个代表 **Footnote** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例复制活动文档上第一个脚注的引用标记。*/
function test() {
    let range = ActiveDocument.Footnotes.Item(1).Reference
    range.Copy()
}
```


```JavaScript
/*本示例将所选内容中最后一个脚注的引用标记的字体颜色设置为红色。*/
function test() {
    let range = Selection.Footnotes.Item(Selection.Footnotes.Count).Reference
    range.Font.ColorIndex = wdRed
}
```
