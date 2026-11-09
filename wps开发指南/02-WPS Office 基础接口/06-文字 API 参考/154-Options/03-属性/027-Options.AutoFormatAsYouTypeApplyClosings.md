# Options.AutoFormatAsYouTypeApplyClosings

如果为 **True** ，则 WPS 会在键入时自动为信函的结束语应用“结束语”样式。 **Boolean** 类型，可读写。



## 语法

express.**AutoFormatAsYouTypeApplyClosings**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 在键入时自动为信函的结束语应用“结束语”样式。*/
function test() {
    Options.AutoFormatAsYouTypeApplyClosings = true
}
```


```JavaScript
/*本示例判断如果 WPS 在键入时自动为信函的结束语应用“结束语”样式，则通知用户。*/
function test() {
    if (Options.AutoFormatAsYouTypeApplyClosings) {
        alert("自动为信函的结束语应用“结束语”样式")
    }
}
```
