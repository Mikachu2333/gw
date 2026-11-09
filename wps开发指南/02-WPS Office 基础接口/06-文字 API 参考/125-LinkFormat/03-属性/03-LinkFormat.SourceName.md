# LinkFormat.SourceName

返回指定的链接 OLE 对象、图片或域的源文件的名称。 **String** 类型，只读。



## 语法

express.**SourceName**

express   一个代表 **LinkFormat** 对象的变量。

## 类型

string

## 说明


本属性不返回源文件的路径。



## 示例


```JavaScript
/*本示例显示活动文档中链接 OLE 对象的任何图形的源文件路径和名称。*/
function test() {
    let shapes = ActiveDocument.Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        if (shapes.Item(i).Type == msoLinkedOLEObject) {
            alert(shapes.Item(i).LinkFormat.SourcePath + "\\" + shapes.Item(i).LinkFormat.SourceName)
        }
    }
}
```


```JavaScript
/*本示例显示活动文档中第二个 LinkFormat 对象源文件的名称。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(2)
    alert(shape.LinkFormat.SourceName)
}
```
