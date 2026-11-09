# TableOfContents.UseHeadingStyles

如果使用内置标题样式创建目录，则该属性值为 **True** 。可读写 **Boolean** 类型。



## 语法

express.**UseHeadingStyles**

express   一个代表 **TableOfContents** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例为活动文档中第一个目录设置格式，以编撰设置为“标题 1”、“标题 2”或“标题 3”样式格式的目录项。*/
function test() {
    if (ActiveDocument.TablesOfContents.Count >= 1) {
        let tableOfContents = ActiveDocument.TablesOfContents.Item(1)
        tableOfContents.UseHeadingStyles = true
        tableOfContents.UseFields = false
        tableOfContents.UseHeadingStyles = 1
        tableOfContents.LowerHeadingLevel = 3
    }
}
```


```JavaScript
/*本示例显示第一个文档上最后一个目录是否使用内置标题样式。*/
function test() {
    let tablesOfContents = Documents.Item(1).TablesOfContents
    alert(tablesOfContents.Item(tablesOfContents.Count).UseHeadingStyles)
}
```
