# FootnoteOptions.LayoutColumns

返回或设置当包含引用标记的节具有多个列时脚注的列布局方式。可读写， **Long** 类型。



## 语法

express.**LayoutColumns**

express   一个代表 **FootnoteOptions** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示所选内容中所有脚注的 LayoutColumns 属性值。*/
function test() {
    alert(Selection.FootnoteOptions.LayoutColumns)
}
```


```JavaScript
/*本示例将活动文档上第一节中所有脚注的 LayoutColumns 属性值设置为3。*/
function test() {
    let range = ActiveDocument.Sections.Item(1).Range
    range.FootnoteOptions.LayoutColumns = 3
}
```
