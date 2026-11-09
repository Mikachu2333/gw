# Selection.FootnoteOptions

返回一个 **[FootnoteOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FootnoteOptions/obj)** 对象，该对象代表选定内容中的脚注。



## 语法

express.**FootnoteOptions**

express   一个代表 **Selection** 对象的变量。

## 类型

FootnoteOptions

## 示例


```JavaScript
/*本示例设置选定内容中脚注的编号规则以便在新节开始时重新编号。*/
function test() {
    Selection.FootnoteOptions.NumberingRule = wdRestartContinuous
}
```


```JavaScript
/*本示例在选定区域添加一个脚注，并设置脚注的显示位置在文本下方。*/
function test() {
    Selection.Footnotes.Add(Selection.Range, null, "NewFootNote")
    Selection.FootnoteOptions.Location = wdBeneathText
}
```
