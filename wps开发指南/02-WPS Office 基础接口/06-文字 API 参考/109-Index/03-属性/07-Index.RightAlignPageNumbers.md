# Index.RightAlignPageNumbers

如果页码与索引中的右边距对齐，则该属性值为 **True** 。可读写 **Boolean** 类型。



## 语法

express.**RightAlignPageNumbers**

express   一个代表 **Index** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动文档上第一个索引中的页码是否与右边距对齐。*/
function test() {
    alert(ActiveDocument.Indexes.Item(1).RightAlignPageNumbers)
}
```


```JavaScript
/*本示例设置第一个文档上第二个索引中的页码与右边距对齐。*/
function test() {
    let index = Documents.Item(1).Indexes.Item(2)
    index.RightAlignPageNumbers = true
}
```
