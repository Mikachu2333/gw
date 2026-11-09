# Sections.Count

返回一个 **Long** 类型的值，该值代表集合中的节数。只读。



## 语法

express.**Count**

express   一个代表 **Sections** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档中节的数量。*/
function test() {
    alert(Application.ActiveDocument.Sections.Count)
}
```
