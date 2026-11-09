# OLEFormat.ClassType

返回或设置指定的 OLE 对象、图片或域的类型。 **String** 类型，可读写。



## 语法

express.**ClassType**

express   一个代表 **OLEFormat** 对象的变量。

## 类型

string

## 说明


对于除 DDE 链接之外的其他链接对象，本属性是只读的。

在 **“插入”** 菜单上 **“对象”** 对话框中 **“新建”** 选项卡上的 **“对象类型”** 框中可以看到可用应用程序的列表。以嵌入式图形形式插入一个对象，然后查看域代码，可以找到 **ClassType** 字符串。对象的类类型后面都带有单词“EMBED”或“LINK”。



## 示例


```JavaScript
/*本示例遍历活动文档中所有浮动图形，并将所有链接的 ET 工作表设置为可自动更新。*/
function test() {
    for (let i = 1; i <= ActiveDocument.Shapes.Count; i++) {
        let shape = ActiveDocument.Shapes.Item(i)
        if (shape.Type == msoLinkedOLEObject) {
            if (shape.OLEFormat.ClassType == "Excel.Sheet") {
                shape.LinkFormat.AutoUpdate = true
            }
        }
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个内嵌形状中的 OLEFormat 对象的类型。*/
function test() {
    let oleFormat = Documents.Item(1).InlineShapes.Item(1).OLEFormat
    alert(oleFormat.ClassType)
}
```
