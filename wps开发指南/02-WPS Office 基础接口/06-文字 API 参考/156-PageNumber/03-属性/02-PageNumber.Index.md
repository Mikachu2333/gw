# PageNumber.Index

返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。



## 语法

express.**Index**

express   一个代表 **PageNumber** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第一节的主页眉的最后一个页码的索引。*/
function test() {
    let pageNumbers = ActiveDocument.Sections.Item(1).Headers.Item(wdHeaderFooterPrimary).PageNumbers
    alert(pageNumbers.Item(pageNumbers.Count).Index)
}
```


```JavaScript
/*本示例显示所选页脚的第一个页码的索引。*/
function test() {
    let pageNumber = Selection.HeaderFooter.PageNumbers.Item(1)
    alert(pageNumber.Index)
}
```
