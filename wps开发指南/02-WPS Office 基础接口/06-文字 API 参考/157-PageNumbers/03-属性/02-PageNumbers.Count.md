# PageNumbers.Count

返回一个 **Long** 类型的值，该值代表集合中的页码数。只读。



## 语法

express.**Count**

express   一个代表 **PageNumbers** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档的第一节的主页眉的页码的数量。*/
function test() {
    let pageNumbers = ActiveDocument.Sections.Item(1).Headers.Item(wdHeaderFooterPrimary).PageNumbers
    alert(pageNumbers.Count)
}
```
