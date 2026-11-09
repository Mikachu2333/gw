# Options.AutoFormatAsYouTypeApplyDates

如果为 **True** ，则 WPS 自动为键入的日期应用“日期”样式。可读写。



## 语法

express.**AutoFormatAsYouTypeApplyDates**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 自动为键入时输入的日期应用“日期”样式。*/
function test() {
    Options.AutoFormatAsYouTypeApplyDates = true
}
```


```JavaScript
/*本示例判断如果 WPS 在键入时自动为输入的日期应用“日期”样式，则通知用户。*/
function test() {
    if (Options.AutoFormatAsYouTypeApplyDates) {
        alert("自动为输入的日期应用“日期”样式")
    }
}
```
