# Index.Range

返回一个 **Range** 对象，该对象代表索引中包含的文档部分。



## 语法

express.**Range**

express   一个代表 **Index** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例将活动文档上每个索引的文档范围的格式设置为加粗格式，并将字体的颜色设置为红色。*/
function test() {
    for (let i = 1; i <= ActiveDocument.Indexes.Count; i++) {
        let range = ActiveDocument.Indexes.Item(i).Range
        range.Bold = msoTrue
        range.Font.Color = wdColorRed
    }
}
```


```JavaScript
/*本示例显示第一个文档上所有索引的文档范围的文本。*/
function test() {
    let str = ""
    let indexes = Documents.Item(1).Indexes
    for (let i = 1; i <= indexes.Count; i++) {
        let range = indexes.Item(i).Range
        str += range.Text + "\n"
    }
    alert(str)
}
```
