# TableOfContents.UseFields

如果使用目录项（TC）域创建目录或图表目录，则该属性值为 **True** 。可读写 **Boolean** 类型。



## 语法

express.**UseFields**

express   一个代表 **TableOfContents** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例为活动文档中第一个目录设置格式，以使用标题样式而不是 TC 域。*/
function test() {
    if (ActiveDocument.TablesOfContents.Count >= 1) {
        let tableOfContents = ActiveDocument.TablesOfContents.Item(1)
        tableOfContents.UseFields = false
        tableOfContents.UseHeadingStyles = true
    }
}
```


```JavaScript
/*本示例显示第一个文档上最后一个目录是否为目录项（TC）域。*/
function test() {
    let tablesOfContents = Documents.Item(1).TablesOfContents
    alert(tablesOfContents.Item(tablesOfContents.Count).UseFields)
}
```
