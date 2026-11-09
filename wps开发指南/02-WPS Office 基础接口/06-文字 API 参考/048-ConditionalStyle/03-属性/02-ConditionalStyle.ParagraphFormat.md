# ConditionalStyle.ParagraphFormat

返回或设置代表指定条件样式的段落设置的 **[ParagraphFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ParagraphFormat/obj)** 对象。可读/写。



## 语法

express.**ParagraphFormat**

express   一个代表 **ConditionalStyle** 对象的变量。

## 类型

ParagraphFormat

## 示例


```JavaScript
/*本示例修改活动文档上名为“普通表格”的表格样式。应用该样式的表格的最后一行表格中的段落将根据第一个制表位缩进，并且采用 2 倍行距。*/
function test() {
    let conditionalStyle = ActiveDocument.Styles.Item("普通表格").Table.Condition(wdLastRow)
    conditionalStyle.ParagraphFormat.TabIndent(1)
    conditionalStyle.ParagraphFormat.Space2()
}
```


```JavaScript
/*本示例显示第一个文档上名为“普通表格”的表格样式的最后一行表格中的段落的段后间距。*/
function test() {
    let tableStyle = Documents.Item(1).Styles.Item("普通表格").Table
    alert(tableStyle.Condition(wdLastRow).ParagraphFormat.SpaceAfter)
}
```
