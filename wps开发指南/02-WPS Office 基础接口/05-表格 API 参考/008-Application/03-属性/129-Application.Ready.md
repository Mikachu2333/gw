# Application.Ready

当 ET 应用程序就绪时，返回 **True** ，当 ET 未就绪时，返回 **False** 。 **Boolean** 类型，只读。



## 语法

express.**Ready**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例ET检查Ready属性是否设置为True，如果是，就显示“应用程序就绪”的消息。否则，ET显示“应用程序未就绪”的消息。*/
function test() {
    if (Application.Ready) {
        alert("Application is ready.")
    } else {
        alert("Application is not ready.")
    }
}
```


```JavaScript
/*本示例显示ET应用程序是否就绪。*/
function test() {
    alert(Application.Ready)
}
```
