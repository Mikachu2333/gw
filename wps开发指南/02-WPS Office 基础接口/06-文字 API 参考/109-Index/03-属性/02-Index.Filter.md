# Index.Filter

返回或设置一个值，该值指定 WPS 对指定索引项的第一个字符进行分类的方式。 **wdIndexFilter** 类型，可读写。



## 语法

express.**Filter**

express   一个代表 **Index** 对象的变量。

## 类型

WdIndexFilter

## 示例


```JavaScript
/*本示例在活动文档的末尾插入索引项，并设置页码右对齐，然后将WPS对该索引项的第一个字符进行分类的方式设置为wdIndexFilterAkasatana。*/
function test() {
    let range = ActiveDocument.Range(ActiveDocument.Content.End - 1, ActiveDocument.Content.End - 1)
    ActiveDocument.Indexes.Add(range, null, true, wdIndexIndent).Filter = wdIndexFilterAkasatana
}
```


```JavaScript
/*本示例显示WPS对第一个文档上第二个索引的第一个字符进行分类的方式是否为wdIndexFilterAiueo。*/
function test() {
    let index = Documents.Item(1).Indexes.Item(2)
    alert(index.Filter == wdIndexFilterAiueo)
}
```
