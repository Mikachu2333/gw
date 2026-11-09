# Application.ReferenceStyle

返回或设置 ET 是以 A1 引用样式还是以 R1C1 引用样式显示单元格引用和行、列标题。 **[XlReferenceStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlReferenceStyle)** 类型，可读写。



## 语法

express.**ReferenceStyle**

express   一个代表 **Application** 对象的变量。

## 类型

XlReferenceStyle

## 说明


| **XlReferenceStyle** 可为以下 **XlReferenceStyle** 常量之一。 |
| ---------------------------------------------------- |
| **xlA1**                                             |
| **xlR1C1**                                           |



## 示例


```JavaScript
/*本示例显示ET当前引用样式。*/
function test() {
    if (Application.ReferenceStyle == xlR1C1) {
        alert("ET is using R1C1 references")
    } else {
        alert("ET is using A1 references")
    }
}
```


```JavaScript
/*本示例将ET设置为以A1引用样式显示单元格引用和行、列标题。*/
function test() {
    Application.ReferenceStyle = xlA1
}
```
