# Selection.PreviousField

选择并返回前一域。



## 语法

express.**PreviousField()**

express   一个代表 **Selection** 对象的变量。

## 返回值

Field

## 说明


如果找到了一个域，则该方法返回 **Field** 对象；否则，该方法返回 **null** 。



## 示例


```JavaScript
/*本示例更新前一个域（选定内容前面的域）。*/
function test() {
    if (Selection.PreviousField() != null) {
        Selection.PreviousField().Update()
    }
}
```


```JavaScript
/*本示例选定前一个域。如果找到了一个域，则显示一条信息。*/
function test() {
    let field = Selection.PreviousField()
    if (field != null) {
        alert("Field found")
    }
}
```
