# Application.MouseAvailable

如果鼠标可用，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**MouseAvailable**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例检查鼠标是否可用，如果不可用，则显示一条消息。*/
function test() {
    if (!Application.MouseAvailable) {
        alert("Your system does not have a mouse")
    }
}
```


```JavaScript
/*本示例显示鼠标是否可用。*/
function test() {
    alert(Application.MouseAvailable)
}
```
