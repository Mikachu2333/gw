# TableOfFigures.HeadingStyles

返回一个 **[HeadingStyles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HeadingStyles/obj)** 对象，该对象代表用于编译目录或图表目录的其他样式（标题 1 至标题 9 以外的样式）。只读。



## 语法

express.**HeadingStyles**

express   一个代表 **TableOfFigures** 对象的变量。

## 类型

HeadingStyles

## 示例


```JavaScript
/*本示例显示活动文档上第一个图表目录的 HeadingStyles 集合中项的数目。*/
function test() {
    let tableOfFigures = ActiveDocument.TablesOfFigures.Item(1)
    alert(tableOfFigures.HeadingStyles.Count)
}
```


```JavaScript
/*本示例向第一个文档上第二个图表目录的 HeadingStyles 集合中添加样式。*/
function test() {
    let tableOfFigures = Documents.Item(1).TablesOfFigures.Item(2)
    tableOfFigures.HeadingStyles.Add("Title", 2)
}
```
