# Options.DefaultBorderLineStyle

返回或设置默认边框的样式。 **WdLineStyle** 类型，可读写。



## 语法

express.**DefaultBorderLineStyle**

express   一个代表 **Options** 对象的变量。

## 类型

WdLineStyle

## 示例


```JavaScript
/*本示例将默认边框的样式设置为双线。*/
function test() {
    Options.DefaultBorderLineStyle = wdLineStyleDouble
}
```


```JavaScript
/*本示例显示默认边框的样式是否为单实线。*/
function test() {
    alert(Options.DefaultBorderLineStyle == wdLineStyleSingle)
}
```
