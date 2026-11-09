# Range.FootnoteOptions

返回 **FootnoteOptions** 对象，该对象代表指定区域中的脚注。



## 语法

express.**FootnoteOptions**

express   一个代表 **Range** 对象的变量。

## 类型

FootnoteOptions

## 示例


```JavaScript
/*本示例设置活动文档的第二节中的脚注的编号规则以便在新节开始时重新编号。*/
function test() {
    ActiveDocument.Sections.Item(2).Range.FootnoteOptions.NumberingRule = wdRestartSection
}
```


```JavaScript
/*本示例显示所选内容中脚注的位置是否为wdBottomOfPage。*/
function test() {
    alert(Selection.Range.FootnoteOptions.Location == wdBottomOfPage)
}
```
