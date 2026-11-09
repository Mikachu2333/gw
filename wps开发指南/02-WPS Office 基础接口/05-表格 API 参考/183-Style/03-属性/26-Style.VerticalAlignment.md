# Style.VerticalAlignment

返回或设置一个 **[XlVAlign](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlVAlign)** 值，它代表指定对象的垂直对齐方式。



## 语法

express.**VerticalAlignment**

express   一个代表 **Style** 对象的变量。

## 类型

XlVAlign

## 说明


某些常量可能不可用，这取决于所选择或安装的语言支持（例如，美国英语）。



## 示例


```JavaScript
/*本示例为单元格 B1 赋值，并将单元格垂直对齐方式设置为顶部对齐。*/
function test() {
    Range("B1").Value2 = "示例文本"
    Range("B1").Style.VerticalAlignment = xlVAlignTop
}
```


```JavaScript
/*本示例为单元格 C1 赋值，并显示单元格垂直对齐方式是否为居中对齐。*/
function test() {
    Range("C1").Value2 = "示例文本"
    alert(Range("C1").Style.VerticalAlignment == xlVAlignCenter)
}
```
