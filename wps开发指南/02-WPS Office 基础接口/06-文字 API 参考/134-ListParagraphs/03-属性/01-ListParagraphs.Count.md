# ListParagraphs.Count

返回一个 **Long** 类型的值，该值代表集合中列表段落的数目。只读。



## 语法

express.**Count**

express   一个代表 **ListParagraphs** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档中具有列表格式的段落的数量。*/
function test() {
    alert(ActiveDocument.ListParagraphs.Count)
}
```
