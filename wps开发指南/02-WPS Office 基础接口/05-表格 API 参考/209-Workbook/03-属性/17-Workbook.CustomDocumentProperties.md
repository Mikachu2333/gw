# Workbook.CustomDocumentProperties

返回或设置一个 **[DocumentProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/DocumentProperties/obj)** 集合，该集合表示指定工作簿的所有自定义文档属性。



## 语法

express.**CustomDocumentProperties**

express   一个代表 **Workbook** 对象的变量。

## 类型

Object

## 说明


本属性返回的是自定义文档属性的整个集合。通过指定属性的名称或集合索引号（数字），用 **Item** 方法可返回集合中的单个成员（一个 **DocumentProperty** 对象）。

由于 **Item** 方法是 **DocumentProperties** 集合的默认方法，所以下列语句是相同的：

```JavaScript
CustomDocumentProperties.Item("Complete")
CustomDocumentProperties("Complete")
```

使用 **[BuiltinDocumentProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/BuiltinDocumentProperties)** 属性可返回内置文档属性的集合。

 **msoPropertyTypeString** 类型的属性长度不能超过 255 个字符。



## 示例


```JavaScript
/*本示例在第一张工作表中以列表显示活动工作簿的自定义文档属性的名称和值。*/
function test() {
    Worksheets.Item(1).Activate()
    for (let i = 1; i <= ActiveWorkbook.CustomDocumentProperties.Count; i++) {
        let p = ActiveWorkbook.CustomDocumentProperties.Item(i)
        Cells(i, 1).Value(undefined, p.Name)
        Cells(i, 2).Value(undefined, p.Value)
    }
}
```


```JavaScript
/*本示例演示CustomDocumentProperties属性的总数，并向活动工作簿CustomDocumentProperties属性中添加新的自定义文档属性Complete，并告知用户。*/
function test() {
    alert(ActiveWorkbook.CustomDocumentProperties.Count)
    let ret = ActiveWorkbook.CustomDocumentProperties.Add("Complete", false, undefined, 1)
    if (ret) {
        alert("Complete自定义文档属性添加成功")
    }
}
```
