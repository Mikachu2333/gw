# Options.PrecisePositioning

返回或设置一个 **Boolean** 类型的值，该值表示 WPS 是否针对打印版式而不是针对屏幕可读性优化字符位置。如果该属性的值为 **True** ，则禁用压缩字符间距以便增强屏幕可读性的默认设置，并启用适用于打印介质的字符间距。可读/写。



## 语法

express.**PrecisePositioning**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 禁用压缩字符间距以便增强屏幕可读性的默认设置，并启用适用于打印介质的字符间距。*/
function test() {
    Options.PrecisePositioning = true
}
```


```JavaScript
/*本示例判断如果 WPS 禁用压缩字符间距以便增强屏幕可读性的默认设置，并启用适用于打印介质的字符间距，则通知用户。*/
function test() {
    if (Options.PrecisePositioning) {
        alert("WPS 禁用压缩字符间距以便增强屏幕可读性的默认设置，并启用适用于打印介质的字符间距。")
    }
}
```
