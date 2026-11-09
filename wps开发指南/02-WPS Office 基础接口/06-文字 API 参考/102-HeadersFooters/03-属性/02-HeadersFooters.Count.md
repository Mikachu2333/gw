# HeadersFooters.Count

返回一个 **Long** 类型的值，该值代表集合中页眉和/或页脚的数目。只读。



## 语法

express.**Count**

express   一个代表 **HeadersFooters** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第一节中页脚的数量。*/
function test() {
    alert(ActiveDocument.Sections.Item(1).Footers.Count)
}
```
