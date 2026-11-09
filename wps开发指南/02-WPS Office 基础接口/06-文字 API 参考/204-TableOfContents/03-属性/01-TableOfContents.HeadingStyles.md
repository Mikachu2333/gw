# TableOfContents.HeadingStyles

返回一个 **[HeadingStyles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HeadingStyles/obj)** 对象，该对象代表用于编译目录或图表目录的其他样式（标题 1 至标题 9 以外的样式）。只读。



## 语法

express.**HeadingStyles**

express   一个代表 **TableOfContents** 对象的变量。

## 类型

HeadingStyles

## 示例


```JavaScript
/*本示例将一个样式添至 HeadingStyles 集合，然后显示集合中所有样式名。*/
function test() {
    let tablesOfContents = ActiveDocument.TablesOfContents
    if (tablesOfContents.Count >= 1) {
        let headingStyles = tablesOfContents.Item(1).HeadingStyles
        headingStyles.Add("标题", 2)
        for (let i = 1; i <= headingStyles.Count; i++) {
            alert(headingStyles.Item(i).Style)
        }
    }
}
```


```JavaScript
/*本示例将一个名为“Blue”的样式添至第一个文档的目录中的 HeadingStyles 集合。*/
function test() {
    Documents.Item(1).Styles.Add("Blue")
    let tableOfContents = Documents.Item(1).TablesOfContents.Item(1)
    tableOfContents.UseHeadingStyles = true
    tableOfContents.HeadingStyles.Add("Blue", 4)
}
```
