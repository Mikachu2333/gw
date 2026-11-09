# TableOfFigures.TableID

返回或设置用于从 TOC 域生成图表目录的单字母标识符。可读写 **String** 类型。



## 语法

express.**TableID**

express   一个代表 **TableOfFigures** 对象的变量。

## 类型

string

## 说明


该属性对应于 TOC 域的 \\f 开关。例如，“T”表示用表格标识符 T 从 TOC 域生成图表目录。



## 示例


```JavaScript
/*本示例在活动文档的开头添加图表目录，然后为该目录设置格式，以编译“B”目录项。*/
function test() {
    let tableOfFigures = ActiveDocument.TablesOfFigures.Add(ActiveDocument.Range(0, 0))
    tableOfFigures.UseFields = true
    tableOfFigures.UseHeadingStyles = false
    tableOfFigures.TableID = "B"
    tableOfFigures.Caption = "example"
}
```


```JavaScript
/*本示例显示第一个文档上第一个图表目录用于从 TOC 域生成图表目录的单字母标识符。*/
function test() {
    let tableOfFigures = Documents.Item(1).TablesOfFigures.Item(1)
    alert(tableOfFigures.TableID)
}
```
