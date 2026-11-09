# Application.CommandUnderlines

返回或设置 Mac 版 ET 中命令加下划线的状态。可以是 **[XlCommandUnderlines](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlCommandUnderlines)** 常量之一。 **Long** 类型，可读写。



## 语法

express.**CommandUnderlines**

express   一个代表 **Application** 对象的变量。

## 类型

XlCommandUnderlines

## 说明


在 Windows 版 ET 中，该属性总是返回 **xlCommandUnderlinesOn** ，该属性只能设置为 **xlCommandUnderlinesOn** ，不允许设置为其他任何值。



## 示例


```JavaScript
/*本示例关闭 Mac 版 ET 中的命令加下划线。*/
function test() {
    Application.CommandUnderlines = xlCommandUnderlinesOff
}
```


```JavaScript
/*本示例判断如果CommandUnderlines属性的值为xlCommandUnderlinesAutomatic，则将该值设置为xlCommandUnderlinesOn。*/
function test() {
    if (Application.CommandUnderlines == xlCommandUnderlinesAutomatic) {
        Application.CommandUnderlines = xlCommandUnderlinesOn
    }
}
```
