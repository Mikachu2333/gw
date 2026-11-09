# Section.Index

返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。



## 语法

express.**Index**

express   一个代表 **Section** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档中第一节的索引。*/
function test() {
    alert(Application.ActiveDocument.Sections.Item(1).Index)
}
```


```JavaScript
/*本示例显示活动文档中最后一节的索引。*/
function test() {
    let sections = Application.ActiveDocument.Sections
    alert(sections.Item(sections.Count).Index)
}
```
