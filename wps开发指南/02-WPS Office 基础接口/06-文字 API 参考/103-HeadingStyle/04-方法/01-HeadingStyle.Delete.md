# HeadingStyle.Delete

删除指定的标题样式。



## 语法

express.**Delete()**

express   一个代表 **HeadingStyle** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除第一个文档上第二个图表目录的第一个标题样式。*/
function test() {
    let tableOfFigures = Documents.Item(1).TablesOfFigures.Item(2)
    tableOfFigures.HeadingStyles.Item(1).Delete()
}
```


```JavaScript
/*本示例删除活动文档上第二个图表目录的所有标题样式。*/
function test() {
    let tableOfFigures = ActiveDocument.TablesOfFigures.Item(2)
    let headingStyles = tableOfFigures.HeadingStyles
    for (let i = headingStyles.Count; i > 0; i--) {
        headingStyles.Item(i).Delete()
    }
}
```
