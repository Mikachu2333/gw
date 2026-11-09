# Field.OLEFormat

返回一个 **OLEFormat** 对象，该对象代表指定域的 OLE 特征（链接除外）。只读。



## 语法

express.**OLEFormat**

express   一个代表 **Field** 对象的变量。

## 类型

OLEFormat

## 示例


```JavaScript
/*本示例显示活动文档上第一个域的OLE类型。*/
function test() {
    let field = ActiveDocument.Fields.Item(1)
    alert(field.OLEFormat.ClassType)
}
```


```JavaScript
/*本示例显示所选内容中第二个域的OLE编程标识符。*/
function test() {
    let field = Selection.Fields.Item(2)
    alert(field.OLEFormat.ProgID)
}
```
