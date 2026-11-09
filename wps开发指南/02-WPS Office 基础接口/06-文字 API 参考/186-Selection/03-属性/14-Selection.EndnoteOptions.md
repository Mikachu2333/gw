# Selection.EndnoteOptions

返回一个 **[EndnoteOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/EndnoteOptions/obj)** 对象，该对象代表选定内容中的尾注。



## 语法

express.**EndnoteOptions**

express   一个代表 **Selection** 对象的变量。

## 类型

EndnoteOptions

## 示例


```JavaScript
/*本示例判断如果所选内容中尾注的编号规则不为wdRestartSection，则将尾注的起始编号设置为2。*/
function test() {
    let endnoteOptions = Selection.EndnoteOptions
    if (endnoteOptions.NumberingRule != wdRestartSection) {
        endnoteOptions.StartingNumber = 2
    }
}
```


```JavaScript
/*本示例修改所选文本尾注编号的样式。*/
function test() {
    Selection.EndnoteOptions.NumberStyle = wdNoteNumberStyleUppercaseLetter
}
```
