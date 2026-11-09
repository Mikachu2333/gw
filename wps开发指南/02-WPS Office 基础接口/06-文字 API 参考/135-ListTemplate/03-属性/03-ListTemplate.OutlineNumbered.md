# ListTemplate.OutlineNumbered

如果指定 **ListTemplate** 对象应用了多级符号，则该属性值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**OutlineNumbered**

express   一个代表 **ListTemplate** 对象的变量。

## 类型

boolean

## 说明


如果将该属性设置为 **False** ，会将列表模板转换为使用第一级的格式的单级列表。

对于 **[ListGallery](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListGallery/obj)** 对象所返回的 **ListTemplate** 对象，不能设置该属性。



## 示例


```JavaScript
/*本示例将选定的多级符号列表改为单级编号列表。*/
function test() {
    Selection.Range.ListFormat.ListTemplate.OutlineNumbered = false
}
```


```JavaScript
/*本示例判断如果第一个文档的第三个列表为多级符号列表，则为其应用第三种多级符号列表模板。*/
function test() {
    let listTemplate = Documents.Item(1).Lists.Item(3).Range.ListFormat.ListTemplate
    if (listTemplate.OutlineNumbered) {
        let listTemplate_1 = Application.ListGalleries.Item(wdOutlineNumberGallery).ListTemplates.Item(3)
        ActiveDocument.Lists.Item(3).ApplyListTemplate(listTemplate_1)
    }
}
```
