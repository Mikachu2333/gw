# Field.Index

返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。



## 语法

express.**Index**

express   一个代表 **Field** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示所选内容中第一个域在Fields集合中的位置。*/
function test() {
    alert(Selection.Fields.Item(1).Index)
}
```


```JavaScript
/*本示例在光标处插入活动文档中最后一个域的索引。*/
function test() {
    let fields = ActiveDocument.Fields
    Selection.TypeText(fields.Item(fields.Count).Index)
}
```
