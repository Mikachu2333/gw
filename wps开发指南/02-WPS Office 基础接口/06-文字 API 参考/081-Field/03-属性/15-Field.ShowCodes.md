# Field.ShowCodes

如果显示指定域的域代码而不是域结果，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ShowCodes**

express   一个代表 **Field** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例选定下一个域，并显示其域代码。*/
function test() {
    Selection.GoTo(wdGoToField)
    Selection.Expand(wdWord)
    if (Selection.Fields.Count == 1) {
        Selection.Fields.Item(1).ShowCodes = true
    }
}
```


```JavaScript
/*本示例更新并显示活动文档中第一个域的结果。*/
function test() {
    if (ActiveDocument.Fields.Count >= 1) {
        let field = ActiveDocument.Fields.Item(1)
        field.Update()
        field.ShowCodes = false
    }
}
```
