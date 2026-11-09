# Field.Update

更新域的结果。如果该域更新成功，则返回 **True** 。



## 语法

express.**Update()**

express   一个代表 **Field** 对象的变量。

## 返回值

Boolean

## 示例


```JavaScript
/*本示例更新活动文档中的第一个域。返回 True 表示字段已更新且未出错。*/
function test() {
    let field = ActiveDocument.Fields.Item(1)
    if (field.Update()) {
        alert("Update Successful")
    } else {
        alert("Field " + field.Update() + " has an error")
    }
}
```


```JavaScript
/*本示例更新第一个文档中所有域。*/
function test() {
    let fields = Documents.Item(1).Fields
    for (let i = 1; i <= fields.Count; i++) {
        fields.Update()
    }
}
```
