# TableOfFigures.Update

更新图表目录中显示的项。



## 语法

express.**Update()**

express   一个代表 **TableOfFigures** 对象的变量。

## 返回值

void

## 说明


可用 **UpdatePageNumbers** 方法更新图表目录中项目的页码。



## 示例


```JavaScript
/*本示例更新活动文档中第一个图表目录显示的项。*/
function test() {
    if (ActiveDocument.TablesOfFigures.Count >= 1) {
        ActiveDocument.TablesOfFigures.Item(1).Update()
    }
}
```


```JavaScript
/*本示例判断如果第一个文档上第一个图表目录的题注为“example”，则更新该图表目录中显示的项。*/
function test() {
    let tableOfFigures = Documents.Item(1).TablesOfFigures.Item(1)
    if (tableOfFigures.Caption == "example") {
        tableOfFigures.Update()
    }
}
```
