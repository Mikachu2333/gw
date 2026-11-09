# TableOfFigures.Delete

删除指定的图表目录。



## 语法

express.**Delete()**

express   一个代表 **TableOfFigures** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动文档上第二个图表目录。*/
function test() {
    let tableOfFigures = ActiveDocument.TablesOfFigures.Item(2)
    tableOfFigures.Delete()
}
```


```JavaScript
/*本示例判断如果第一个文档上第一个图表目录的题注为“example”，则删除该图表目录。*/
function test() {
    let tableOfFigures = Documents.Item(1).TablesOfFigures.Item(1)
    if (tableOfFigures.Caption == "example") {
        tableOfFigures.Delete()
    }
}
```
