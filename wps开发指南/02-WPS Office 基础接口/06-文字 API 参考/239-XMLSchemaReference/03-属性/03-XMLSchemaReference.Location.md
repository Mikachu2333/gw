# XMLSchemaReference.Location

返回一个 **String** 类型的值，该值代表 XML 架构的物理位置。只读。



## 语法

express.**Location**

express   一个代表 **XMLSchemaReference** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示附加到活动文档的第一个架构的物理位置。*/
function test() {
    let xmlSchemaReference = ActiveDocument.XMLSchemaReferences.Item(1)
    alert(xmlSchemaReference.Location)
}
```


```JavaScript
/*本示例将所选内容的文本替换为附加到第一个文档的第二个架构的物理位置。*/
function test() {
    let xmlSchemaReference = Documents.Item(1).XMLSchemaReferences.Item(2)
    Selection.Range.Text = xmlSchemaReference.Location
}
```
