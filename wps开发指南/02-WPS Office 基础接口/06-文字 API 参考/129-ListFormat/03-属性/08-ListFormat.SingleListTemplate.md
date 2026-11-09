# ListFormat.SingleListTemplate

如果整个 **ListFormat** 对象都使用同一列表模板，则该属性值为 **True** 。只读 **Boolean** 类型。



## 语法

express.**SingleListTemplate**

express   一个代表 **ListFormat** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例判断如果所选内容的列表格式中使用相同的列表模板，则将第二个编号列表模板应用于所选内容。*/
function test() {
    let listFormat = Selection.Range.ListFormat
    if (listFormat.SingleListTemplate) {
        listFormat.ApplyListTemplate(ListGalleries(wdNumberGallery).ListTemplates(2))
    }
}
```


```JavaScript
/*本示例显示活动文档的主文档文章的列表格式中是否使用相同的列表模板。*/
function test() {
    alert(ActiveDocument.Content.ListFormat.SingleListTemplate)
}
```
