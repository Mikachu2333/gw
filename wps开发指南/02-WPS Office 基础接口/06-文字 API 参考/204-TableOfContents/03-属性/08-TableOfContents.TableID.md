# TableOfContents.TableID

返回或设置用于从 TOC 域生成目录的单字母标识符。可读写 **String** 类型。



## 语法

express.**TableID**

express   一个代表 **TableOfContents** 对象的变量。

## 类型

string

## 说明


该属性对应于 TOC 域的 \\f 开关。例如，“T”表示用表格标识符 T 从 TOC 域生成目录。



## 示例


```JavaScript
/*本示例在第一个文档中的所选内容后插入一个带有“A”标识符的 TOC 域，然后设置第一个目录的格式以编撰“A”目录项。*/
function test() {
    Documents.Item(1).TablesOfContents.MarkEntry(Selection.Range, "Hello", null, "A")
    let tableOfContents = Documents.Item(1).TablesOfContents.Item(1)
    tableOfContents.TableID = "A"
    tableOfContents.UseFields = true
    tableOfContents.UseHeadingStyles = false
    tableOfContents.Update()
}
```


```JavaScript
/*本示例显示第一个文档上最后一个目录的（TOC 域）单字母标识符。*/
function test() {
    let tablesOfContents = Documents.Item(1).TablesOfContents
    alert(tablesOfContents.Item(tablesOfContents.Count).TableID)
}
```
