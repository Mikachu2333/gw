# Sections.PageSetup

返回一个 **PageSetup** 对象，该对象与指定文档、区域、节或选定内容相关联。



## 语法

express.**PageSetup**

express   一个代表 **Sections** 对象的变量。

## 类型

PageSetup

## 示例


```JavaScript
/*本示例将第一个文档中所有节的装订线设置为 36 磅（0.5 英寸）。*/
function test() {
    Documents.Item(1).Sections.PageSetup.Gutter = 36
}
```


```JavaScript
/*本示例将活动文档中所有节的页面方向设置为横向。*/
function test() {
    Application.ActiveDocument.Sections.PageSetup.Orientation = wdOrientLandscape
}
```
