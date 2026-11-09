# Application.EnableEvents

如果对指定对象启用事件，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**EnableEvents**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在保存文件之前禁用事件，以使 BeforeSave 事件不能触发。*/
function test() {
    Application.EnableEvents = false
    ActiveWorkbook.Save()
    Application.EnableEvents = true
}
```


```JavaScript
/*本示例判断如果已启用事件，在通知用户后将EnableEvents属性的值设置为false。*/
function test() {
    if (Application.EnableEvents) {
        alert("已启用事件")
        Application.EnableEvents = false
    }
}
```
