# XMLNodes.Count

返回一个 **Long** 类型的值，该值代表集合中 XML 元素的数量。只读。



## 语法

express.**Count**

express   一个代表 **XMLNodes** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档中XML元素的数量。*/
function test() {
    alert(ActiveDocument.XMLNodes.Count)
}
```
