# Section.PageSetup

返回一个 **PageSetup** 对象，该对象与指定的节相关联。



## 语法

express.**PageSetup**

express   一个代表 **Section** 对象的变量。

## 类型

PageSetup

## 说明


代表页面设置说明。 **PageSetup** 对象包含文档的所有页面设置属性（如左边距、下边距和纸张大小）。



## 示例


```JavaScript
/*本示例将活动文档中第一节的页面方向设置为横向。*/
function test() {
    Application.ActiveDocument.Sections.Item(1).PageSetup.Orientation = wdOrientLandscape
}
```


```JavaScript
/*本示例将第一个文档中第一节的装订线设置为 36 磅（0.5 英寸）。*/
function test() {
    Documents.Item(1).Sections.Item(1).PageSetup.Gutter = 36
}
```
