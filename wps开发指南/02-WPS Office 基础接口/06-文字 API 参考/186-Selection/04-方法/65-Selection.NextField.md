# Selection.NextField

选定下一个域。



## 语法

express.**NextField()**

express   一个代表 **Selection** 对象的变量。

## 返回值

Field

## 说明


如果找到了一个域，则该方法返回 **Field** 对象；否则，该方法返回 **null** 。



## 示例


```JavaScript
/*本示例将更新选定内容中的下一个域。*/
function test() {
    if (Selection.NextField() != null) {
        Selection.NextField().Update()
    }
}
```


```JavaScript
/*本示例选择选定内容中的下一个域，并显示一条消息（如果找到了一个域）。*/
function test() {
    let field = Selection.NextField()
    if (field != null) {
        alert("Field found")
    }
}
```
