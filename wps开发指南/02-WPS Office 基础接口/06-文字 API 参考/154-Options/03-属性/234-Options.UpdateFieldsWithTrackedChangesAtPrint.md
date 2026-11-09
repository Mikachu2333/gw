# Options.UpdateFieldsWithTrackedChangesAtPrint

如果 WPS 允许在打印前更新包含修订的字段，则该属性值为 **True** 。可读/写。



## 语法

express.**UpdateFieldsWithTrackedChangesAtPrint**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将 WPS 设置为允许在打印前更新包含修订的字段。*/
function test() {
    Options.UpdateFieldsWithTrackedChangesAtPrint = true
}
```


```JavaScript
/*本示例判断如果 WPS 允许在打印前更新包含修订的字段，则通知用户。*/
function test() {
    if (Application.Options.UpdateFieldsWithTrackedChangesAtPrint) {
        alert("WPS 允许在打印前更新包含修订的字段")
    }
}
```
