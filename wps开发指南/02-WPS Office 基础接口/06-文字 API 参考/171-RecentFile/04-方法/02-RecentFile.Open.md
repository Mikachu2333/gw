# RecentFile.Open

打开指定的对象。返回一个 **Document** 对象，该对象代表打开的文档。



## 语法

express.**Open()**

express   一个代表 **RecentFile** 对象的变量。

## 返回值

Document

## 示例


```JavaScript
/*本示例打开 RecentFiles 集合中的每个文档。*/
function test() {
    for (let i = 1; i <= Application.RecentFiles.Count; i++) {
        Application.RecentFiles.Item(i).Open()
    }
}
```


```JavaScript
/*本示例打开最近使用的第一个文档，并在该文档中添加一个内嵌图表。*/
function test() {
    let document = Application.RecentFiles.Item(1).Open()
    document.InlineShapes.AddChart2()
}
```
