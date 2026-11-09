# TableOfFigures.TabLeader

返回或设置图表目录中的目录项及其页码之间的字符。可读写 **[WdTabLeader](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdTabLeader)** 类型。



## 语法

express.**TabLeader**

express   一个代表 **TableOfFigures** 对象的变量。

## 类型

WdTabLeader

## 示例


```JavaScript
/*本示例为 example.docx 文档中的图表目录设置格式，以使用点式制表符前导符。*/
function test() {
    let tablesOfFigures = Documents.Item("example.docx").TablesOfFigures
    for (let i = 1; i <= tablesOfFigures.Count; i++) {
        tablesOfFigures.Item(i).TabLeader = wdTabLeaderDots
    }
}
```


```JavaScript
/*本示例显示第一个文档上第二个图表目录的目录项及其页码之间的字符是否为wdTabLeaderDashes。*/
function test() {
    let tableOfFigures = Documents.Item(1).TablesOfFigures.Item(2)
    alert(tableOfFigures.TabLeader == wdTabLeaderDashes)
}
```
