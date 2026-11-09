# Shape.OLEFormat

返回一个 **OLEFormat** 对象，该对象代表指定形状、内嵌形状或域的 OLE 特性（链接除外）。只读。



## 语法

express.**OLEFormat**

express   一个代表 **Shape** 对象的变量。

## 类型

OLEFormat

## 示例


```JavaScript
/*本示例遍历活动文档中的所有浮动形状，并显示所有链接的 ET 工作表的路径和名称。*/
function test() {
    for (let i = 1; i <= ActiveDocument.Shapes.Count; i++) {
        if (ActiveDocument.Shapes.Item(i).Type == msoLinkedOLEObject) {
            if (ActiveDocument.Shapes.Item(i).OLEFormat.ProgID == "Excel.Sheet.12") {
                alert(ActiveDocument.Shapes.Item(i).LinkFormat.SourceFullName)
            }
        }
    }
}
```


```JavaScript
/*本示例打开活动文档中的第一个形状的 OLEFormat 对象。*/
function test() {
    ActiveDocument.Shapes.Item(1).OLEFormat.Open()
}
```
