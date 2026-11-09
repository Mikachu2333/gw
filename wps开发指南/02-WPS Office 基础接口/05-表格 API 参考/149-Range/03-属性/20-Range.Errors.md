# Range.Errors

允许用户访问错误检查选项。



## 语法

express.**Errors**

express   一个代表 **Range** 对象的变量。

## 类型

Errors

## 说明


引用 **[Errors](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Errors/obj)** 对象可查看与错误检查选项相关联的索引值列表。



## 示例


```JavaScript
/*在本例中，单元格 A1 中放置了文本格式的数字。然后判断单元格 A1 中的数字是否为文本格式，并通知用户。*/
function test() {
    Range("A1").Formula = "\'12"
    if (Range("A1").Errors.Item(xlNumberAsText).Value) {
        MsgBox("The number is written as text.")
    } else {
        MsgBox("The number is not written as text.")
    }
}
```


```JavaScript
/*本示例在 A2 单元格的公式设置为 =B1+B2，判断 A2 单元格是否引用了空单元格；然后将 B1:B2 单元格区域赋值为 1，判断 A2 单元格引用空单元格的问题是否解决*/
function test() {
    Range("A2").Formula = "=B1+B2"
    if (Range("A2").Errors.Item(xlEmptyCellReferences).Value) {
        alert("A2存在引用空单元格问题")
    }
    Range("B1:B2").Value2 = 1
    if (!Range("A2").Errors.Item(xlEmptyCellReferences).Value) {
        alert("A2引用空单元格问题已解决")
    }
}
```
