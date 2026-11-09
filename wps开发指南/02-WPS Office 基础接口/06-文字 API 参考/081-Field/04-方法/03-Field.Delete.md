# Field.Delete

删除指定的域。



## 语法

express.**Delete()**

express   一个代表 **Field** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动文档中的第一个域，并通知用户。*/
function test() {
    if (ActiveDocument.Fields.Count >= 1) {
        ActiveDocument.Fields.Item(1).Delete()
        alert("第一个域已删除")
    }
}
```


```JavaScript
/*本示例删除所选内容中的最后一个域，并显示所选内容中域的数量。*/
function test() {
    let fields = Selection.Fields
    fields.Item(fields.Count).Delete()
    alert(fields.Count)
}
```
