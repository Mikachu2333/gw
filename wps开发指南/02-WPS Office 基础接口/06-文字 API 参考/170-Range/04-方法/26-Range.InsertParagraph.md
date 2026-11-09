# Range.InsertParagraph

用新段落替换指定范围。



## 语法

express.**InsertParagraph()**

express   一个代表 **Range** 对象的变量。

## 返回值

void

## 说明


使用此方法后，该范围将成为一个新段落。

如果您不希望替换该范围，可在使用此方法之前先使用 **Collapse** 方法。 **InsertParagraphAfter** 方法可在 **Range** 对象后插入一个新段落。



## 示例


```JavaScript
/*本示例在活动文档的开头插入一个新段落。*/
function test() {
    let range = ActiveDocument.Range(0, 0)
    range.InsertParagraph()
    range.InsertBefore("Dear Sirs,")
}
```


```JavaScript
/*本示例用新段落替换所选区域。*/
function test() {
    Selection.Range.InsertParagraph()
}
```
