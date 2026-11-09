# CustomProperties.Count

返回一个 **Long** 类型的值，该值代表集合中的项目数。只读。



## 语法

express.**Count**

express   一个代表 **CustomProperties** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示第一个文档中第一个智能标记的自定义属性的数量。*/
function test() {
    alert(Documents.Item(1).SmartTags.Item(1).Properties.Count)
}
```
