# Range.Style

返回或设置指定对象的样式。可读写 **Variant** 类型。



## 语法

express.**Style**

express   一个代表 **Range** 对象的变量。

## 类型

any

## 说明


要设置该属性，请指定样式的本地名称、一个整数、一个 **[WdBuiltinStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdBuiltinStyle)** 常量或一个代表样式的对象。如果一个范围包含多个样式，则只返回第一个字符样式或段落样式。

 **Characters** 集合的每个元素都是一个 **Range** 对象。



## 示例


```JavaScript
/*本示例显示所选内容中每个字符的样式。*/
function test() {
    for (let i = 1; i <= Selection.Characters.Count; i++) {
        alert(Selection.Characters.Item(i).Style.toString())
    }
}
```


```JavaScript
/*本示例设置活动文档的第一个段落的样式。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Range.Style = wdStyleHeading1
}
```
