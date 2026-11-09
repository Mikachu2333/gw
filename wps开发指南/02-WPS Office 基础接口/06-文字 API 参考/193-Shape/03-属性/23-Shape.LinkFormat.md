# Shape.LinkFormat

返回一个 **LinkFormat** 对象，该对象代表链接到文件的形状的链接选项。只读。



## 语法

express.**LinkFormat**

express   一个代表 **Shape** 对象的变量。

## 类型

LinkFormat

## 示例


```JavaScript
/*本示例显示活动文档中第一个 LinkFormat 对象的源名称。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(1)
    alert(shape.LinkFormat.SourceName)
}
```


```JavaScript
/*本示例显示第一个文档中所有 LinkFormat 对象的完整文件名。*/
function test() {
    let shapes = Documents.Item(1).Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        alert(shapes.Item(i).LinkFormat.SourceFullName)
    }
}
```
