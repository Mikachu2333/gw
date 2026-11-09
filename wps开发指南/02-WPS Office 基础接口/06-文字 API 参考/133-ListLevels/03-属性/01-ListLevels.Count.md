# ListLevels.Count

返回一个 **Long** 类型的值，该值代表集合中列表级别的数目。只读。



## 语法

express.**Count**

express   一个代表 **ListLevels** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第一个列表模板的列表级别的数量。*/
function test() {
    alert(ActiveDocument.ListTemplates.Item(1).ListLevels.Count)
}
```
