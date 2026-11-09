# ParagraphFormat.CollapsedByDefault

返回或设置指定的段落格式是否默认折叠。可读/写 **Long** 类型。



## 语法

express.**CollapsedByDefault**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档上所有段落的格式是否默认折叠。*/
function test() {
    alert(ActiveDocument.Paragraphs.Format.CollapsedByDefault === msoTrue)
}
```


```JavaScript
/*本示例设置所选内容的段落格式为默认折叠。*/
function test() {
    Selection.ParagraphFormat.CollapsedByDefault = msoTrue
}
```
