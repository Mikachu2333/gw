# OLEFormat.ProgID

返回指定 OLE 对象的程序标识符（ProgID）（程序标识符：窗体 OLEServerName.ObjectName 中的标识符（例如，Excel.Sheet 或 PowerPoint.Slide），由 Windows 注册表用来唯一标识一个对象。）。只读 **String** 类型。



## 语法

express.**ProgID**

express   一个代表 **OLEFormat** 对象的变量。

## 类型

string

## 说明


 **ProgID** 属性和 **ClassType** 属性（默认情况下）会返回相同的字符串。但是，您可以更改 DDE 链接的 **ClassType** 属性。

 **安全性** 动态数据交换（DDE）是一种不安全的陈旧技术。如果可能，请使用比 DDE 更加安全的技术，如对象链接和嵌入（OLE）。

有关程序标识符的信息，请参阅 OLE 程序标识符。



## 示例


```JavaScript
/*本示例遍历活动文档中的所有浮动形状，并显示所有链接的 ET 工作表的名称。*/
function test() {
    for (let i = 1; i <= ActiveDocument.Shapes.Count; i++) {
        let shape = ActiveDocument.Shapes.Item(i)
        if (shape.Type == msoLinkedOLEObject && shape.OLEFormat.ProgID == "Excel.Sheet.12") {
            alert(shape.LinkFormat.SourceName)
        }
    }
}
```


```JavaScript
/*本示例显示第一个文档中第一个内嵌形状中的 OLE 对象的程序标识符。*/
function test() {
    let inlineShape = Documents.Item(1).InlineShapes.Item(1)
    alert(inlineShape.OLEFormat.ProgID)
}
```
