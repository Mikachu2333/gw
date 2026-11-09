# Footnote.Index

返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。



## 语法

express.**Index**

express   一个代表 **Footnote** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档上最后一个脚注的索引。*/
function test() {
    let footnotes = ActiveDocument.Footnotes
    alert(footnotes.Item(footnotes.Count).Index)
}
```


```JavaScript
/*本示例显示所选内容中第一个脚注的索引。*/
function test() {
    alert(Selection.Footnotes.Item(1).Index)
}
```
