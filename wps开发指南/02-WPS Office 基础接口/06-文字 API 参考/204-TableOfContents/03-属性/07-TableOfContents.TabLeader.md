# TableOfContents.TabLeader

返回或设置索引、引文目录、目录或图表目录中的项目及其页码之间的字符。可读写 **[WdTabLeader](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdTabLeader)** 类型。



## 语法

express.**TabLeader**

express   一个代表 **TableOfContents** 对象的变量。

## 类型

WdTabLeader

## 示例


```JavaScript
/*本示例为第一个文档中的目录设置格式，以使用点式制表符前导符。*/
function test() {
    let tablesOfContents = Documents.Item(1).TablesOfContents
    for (let i = 1; i <= tablesOfContents.Count; i++) {
        tablesOfContents.Item(i).TabLeader = wdTabLeaderDots
    }
}
```


```JavaScript
/*本示例显示第一个文档上最后一个目录中的项目及其页码之间的字符是否为划线。*/
function test() {
    let tablesOfContents = Documents.Item(1).TablesOfContents
    alert(tablesOfContents.Item(tablesOfContents.Count).TabLeader == wdTabLeaderDashes)
}
```
