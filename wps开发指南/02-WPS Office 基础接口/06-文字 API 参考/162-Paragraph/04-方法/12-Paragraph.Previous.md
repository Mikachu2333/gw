# Paragraph.Previous

将上一段作为一个 **Paragraph** 对象返回。



## 语法

express.**Previous(Count)**

express   一个代表 **Paragraph** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Count | 可选 | any | 要后移的段落数。默认值为 1。 |

## 返回值

Paragraph

## 示例


```JavaScript
/*本示例显示第一个文档的第一个段落的左缩进值（以磅为单位）。*/
function test() {
    alert(Documents.Item(1).Paragraphs.Item(2).Previous().LeftIndent)
}
```


```JavaScript
/*本示例将选定内容中首段的上一段增加一个级别的缩进。*/
function test() {
    Selection.Paragraphs.Item(1).Previous().Indent()
}
```
