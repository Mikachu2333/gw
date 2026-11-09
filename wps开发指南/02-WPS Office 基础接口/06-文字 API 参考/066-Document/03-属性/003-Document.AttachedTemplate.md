# Document.AttachedTemplate

返回一个 **[Template](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Template/obj)** 对象，该对象代表与指定文档相关联的模板。可读/写 **Variant** 类型。



## 语法

express.**AttachedTemplate**

express   一个代表 **Document** 对象的变量。

## 类型

any

## 说明


若要设置该属性，请指定模板名称或返回 **Template** 对象的表达式。



## 示例


```JavaScript
/*本示例显示与活动文档相关联的模板名称和路径。*/
function test() {
    let template = ActiveDocument.AttachedTemplate
    alert(template.Path + Application.PathSeparator + template.Name)
}
```


```JavaScript
/*本示例在第一个文档的开始处插入附加到该文档的模板中第一个构建基块的值。*/
function test() {
    let rang = Documents.Item(1).Range(0, 0)
    Documents.Item(1).AttachedTemplate.BuildingBlockEntries.Item(1).Insert(rang)
}
```


```JavaScript
/*本示例为活动文档附加名为“Letter.dot”模板。*/
function test() {
    ActiveDocument.AttachedTemplate = "D:\\示例\\Letter.dot"
}
```
