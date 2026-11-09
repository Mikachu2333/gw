# Field.Data

返回或设置 ADDIN 域中的数据。可读写 **String** 类型。



## 语法

express.**Data**

express   一个代表 **Field** 对象的变量。

## 类型

string

## 说明


该数据在域代码或结果中是不可见的，只有通过返回 **Data** 属性的值才能进行访问。如果该域不是 ADDIN 域，该属性将发生错误。



## 示例


```JavaScript
/*本示例在活动文档的插入点插入一个 ADDIN 域，然后设置该域的数据。*/
function test() {
    Selection.Collapse(wdCollapseStart)
    let field = ActiveDocument.Fields.Add(Selection.Range, wdFieldAddin)
    field.Data = "Hidden information"
}
```


```JavaScript
/*本示例显示第一个文档中 ADDIN 域的数据。*/
function test() {
    let fields = Documents.Item(1).Fields
    for (let i = 1; i <= fields.Count; i++) {
        if (fields.Item(i).Type == wdFieldAddin) {
            alert(fields.Item(i).Data)
        }
    }
}
```
