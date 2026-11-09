# Range.PageSetup

返回一个 **PageSetup** 对象，该对象与指定范围相关联。



## 语法

express.**PageSetup**

express   一个代表 **Range** 对象的变量。

## 类型

PageSetup

## 示例


```JavaScript
/*本示例将与所选区域关联的页面的上边距设置为2英寸。*/
function test() {
    Selection.Range.PageSetup.TopMargin = InchesToPoints(2)
}
```


```JavaScript
/*本示例将与活动文档的主文档文章关联的页面设置为两个文本栏。*/
function test() {
    ActiveDocument.Content.PageSetup.TextColumns.SetCount(2)
}
```
