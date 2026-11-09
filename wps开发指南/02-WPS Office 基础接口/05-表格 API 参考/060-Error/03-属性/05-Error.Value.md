# Error.Value

返回一个 **Boolean** 值，它指明是否符合所有的有效性验证条件（即，该区域是否包含有效数据）。



## 语法

express.**Value**

express   一个代表 **Error** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*下例将一个数字作为文本放在单元格 C1 中，然后当单元格 C1 的值包含文本格式的数字时通知用户。*/
function test() {
    Range("C1").Formula = "'2"
    if (Range("C1").Errors.Item(xlNumberAsText).Value) {
        alert("单元格C1有个数字作为文本")
    } else {
        alert("单元格C1有个数字")
    }
}
```


```JavaScript
/*本示例显示 Error 对象的 Value 属性值。*/
function test() {
    Range("B1").Select()
    alert(Application.Range("B1").Errors.Item(xlEmptyCellReferences).Value)
}
```
