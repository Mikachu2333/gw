# Range.CharacterStyle

返回一个 **Variant** 类型的值，该值代表用于设置一个或多个字符格式的样式。只读。



## 语法

express.**CharacterStyle**

express   一个代表 **Range** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例显示所选内容的字符格式的样式。*/
function test() {
    alert(Selection.Range.CharacterStyle.toString())
}
```


```JavaScript
/*本示例在光标处插入活动文档的主文档文章的字符格式的样式。*/
function test() {
    Selection.TypeText(ActiveDocument.Content.CharacterStyle.toString())
}
```
