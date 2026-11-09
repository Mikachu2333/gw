# Range.EndnoteOptions

返回一个 **EndnoteOptions** 对象，该对象代表区域中的尾注。



## 语法

express.**EndnoteOptions**

express   一个代表 **Range** 对象的变量。

## 类型

EndnoteOptions

## 示例


```JavaScript
/*如果活动文档第二节中尾注的起始号码不是 1，则本示例将其设为 1。*/
function test() {
    let endnoteOptions = ActiveDocument.Sections.Item(2).Range.EndnoteOptions
    if (endnoteOptions.StartingNumber !== 1) {
        endnoteOptions.StartingNumber = 1
    }
}
```


```JavaScript
/*本示例设置所选内容中的尾注的编号样式。*/
function test() {
    Selection.Range.EndnoteOptions.NumberStyle = wdNoteNumberStyleLowercaseLetter
}
```
