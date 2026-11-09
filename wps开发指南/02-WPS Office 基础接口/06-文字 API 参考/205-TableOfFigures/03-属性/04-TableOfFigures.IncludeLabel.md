# TableOfFigures.IncludeLabel

如果在图表目录中包含题注标签和题注编号，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**IncludeLabel**

express   一个代表 **TableOfFigures** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例为活动文档中的第一个图表目录设置格式，使其不包含题注标签。*/
function test() {
    if (ActiveDocument.TablesOfFigures.Count >= 1) {
        ActiveDocument.TablesOfFigures.Item(1).IncludeLabel = false
    }
}
```


```JavaScript
/*本示例添加图表目录以替换选定内容，然后设置目录的格式，使其包含题注标签。*/
function test() {
    let tableOfFigures = ActiveDocument.TablesOfFigures.Add(Selection.Range, "example")
    tableOfFigures.IncludeLabel = true
}
```
