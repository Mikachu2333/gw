# Selection.Style

该属性返回或设置用于指定对象的样式。若要设置该属性，请指定样式的本地名称、一个整数值、一个 **WdBuiltinStyle** 常量或一个代表该样式的对象。 **Variant** 类型，可读写。



## 语法

express.**Style**

express   一个代表 **Selection** 对象的变量。

## 类型

any

## 说明


如果返回包含多个样式的选定内容的样式，则只返回第一个字符样式或段落样式。



## 示例


```JavaScript
/*本示例显示当前选定内容的样式名称（由用户语言表示）。*/
function test() {
    alert(Selection.Style.NameLocal)
}
```


```JavaScript
/*本示例设置活动文档第一个单词的样式。*/
function test() {
    ActiveDocument.Words.Item(1).Select()
    Selection.Style = wdStyleHeading1
}
```
