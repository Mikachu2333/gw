# TableOfFigures.UseHyperlinks

返回或设置在网站上发布图表目录项时是否将其设为超链接格式。可读写 **Boolean** 类型。



## 语法

express.**UseHyperlinks**

express   一个代表 **TableOfFigures** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动文档中第一个图表目录设为超链接格式。*/
function test() {
    ActiveDocument.TablesOfFigures.Item(1).UseHyperlinks = true
}
```


```JavaScript
/*本示例显示在网站上发布第一个文档上第二个图表目录时是否将其设为超链接格式。*/
function test() {
    let tableOfFigures = Documents.Item(1).TablesOfFigures.Item(2)
    alert(tableOfFigures.UseHyperlinks)
}
```
