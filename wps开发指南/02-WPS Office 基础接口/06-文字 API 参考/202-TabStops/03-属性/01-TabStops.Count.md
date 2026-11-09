# TabStops.Count

返回一个 **Long** 类型的值，该值代表集合中制表位的数目。只读。



## 语法

express.**Count**

express   一个代表 **TabStops** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档中第一段的自定义制表位个数。*/
function test() {
    alert(ActiveDocument.Paragraphs.Item(1).TabStops.Count)
}
```
