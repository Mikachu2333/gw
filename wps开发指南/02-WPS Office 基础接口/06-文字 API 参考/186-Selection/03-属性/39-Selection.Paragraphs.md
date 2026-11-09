# Selection.Paragraphs

返回一个 **[Paragraphs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/obj)** 集合，该集合代表指定选定内容中的所有段落。只读。



## 语法

express.**Paragraphs**

express   一个代表 **Selection** 对象的变量。

## 类型

Paragraphs

## 示例


```JavaScript
/*本示例将选定内容的首段的行距设置为 2 倍行距。*/
function test() {
    Selection.Paragraphs.Item(1).LineSpacingRule = wdLineSpaceDouble
}
```


```JavaScript
/*本示例设置所选区域的所有段落居中对齐。*/
function test() {
    Selection.Paragraphs.Alignment = wdAlignParagraphCenter
}
```
