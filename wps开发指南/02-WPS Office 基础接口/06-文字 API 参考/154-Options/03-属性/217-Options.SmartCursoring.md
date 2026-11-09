# Options.SmartCursoring

返回或设置一个 **Boolean** 类型的值，该值表示是否启用智能指针。如果值为 **True** ，则启用智能指针。



## 语法

express.**SmartCursoring**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


 **SmartCursoring** 属性为 **True** 时，使用 Page Down 键在文档中滚动会使指针移到当前页面。如果 **SmartCursoring** 属性为 **False** ，则指针停留在上次编辑的位置。



## 示例


```JavaScript
/*本示例禁用智能指针。*/
function test() {
    Options.SmartCursoring = false
}
```


```JavaScript
/*本示例判断如果 WPS 启用智能指针，则通知用户。*/
function test() {
    if (Options.SmartCursoring) {
        alert("WPS 启用智能指针。")
    }
}
```
