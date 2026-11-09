# Application.RestrictLinkedStyles

返回或设置一个 **Boolean** 类型的值，该值表示 WPS 是否允许链接样式。可读写。



## 语法

express.**RestrictLinkedStyles**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 说明


链接样式是可以作为字符样式或段落样式应用的样式。



## 示例


```JavaScript
/*本示例判断 WPS 是否禁用链接样式，并通知用户。*/
function test() {
    if (Application.RestrictLinkedStyles) {
        alert("WPS 禁用链接样式")
    } else {
        alert("WPS 允许链接样式")
    }
}
```


```JavaScript
/*本示例禁用 WPS 中的链接样式。*/
function test() {
    Application.RestrictLinkedStyles = true
}
```
