# TableOfFigures.HidePageNumbersInWeb

返回或设置向网站发布时是否隐藏目录或图表目录中的页码。 **Boolean** 类型，可读写。



## 语法

express.**HidePageNumbersInWeb**

express   一个代表 **TableOfFigures** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示向网站发布时是否隐藏活动文档上第一个图表目录的页码。*/
function test() {
    let tableOfFigures = ActiveDocument.TablesOfFigures.Item(1)
    alert(tableOfFigures.HidePageNumbersInWeb)
}
```


```JavaScript
/*本示例将第一个文档上第二个图表目录设置为向网站发布时展示页码。*/
function test() {
    let tableOfFigures = Documents.Item(1).TablesOfFigures.Item(2)
    tableOfFigures.HidePageNumbersInWeb = false
}
```
