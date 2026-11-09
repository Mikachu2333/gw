# Template.Type

返回模板的类型。只读 **[WdTemplateType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdTemplateType)** 类型。



## 语法

express.**Type**

express   一个代表 **Template** 对象的变量。

## 类型

WdTemplateType

## 示例


```JavaScript
/*本示例显示第一个模板的类型是否为wdNormalTemplate。*/
function test() {
    alert(Application.Templates.Item(1).Type == wdNormalTemplate)
}
```


```JavaScript
/*本示例判断附加到活动文档的模板的类型，并通知用户。*/
function test() {
    switch (ActiveDocument.AttachedTemplate.Type) {
        case wdAttachedTemplate:
            alert("模板为附加模板")
            break
        case wdGlobalTemplate:
            alert("模板为全局模板")
            break
        case wdNormalTemplate:
            alert("模板为标准默认模板")
            break
    }
}
```
