# Style.HorizontalAlignment

返回或设置一个 [XlHAlign](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlHAlign) 值，它代表指定对象的水平对齐方式。



## 语法

express.**HorizontalAlignment**

express   一个代表 **Style** 对象的变量。

## 类型

XlHAlign

## 说明


某些常量可能不可用，这取决于所选择或安装的语言支持（例如，美国英语）。



## 示例


```JavaScript
/*本示例为单元格 A1 赋值，并将单元格水平对齐方式设置为靠左对齐。*/
function test() {
    Range("A1").Value2 = "示例文本"
    Range("A1").Style.HorizontalAlignment = xlHAlignLeft
}
```


```JavaScript
/*本示例为单元格 D1 赋值，并显示D1单元格水平对齐方式是否为靠右对齐。*/
function test() {
    Range("D1").Value2 = "示例文本"
    alert(Range("D1").Style.HorizontalAlignment == xlHAlignRight)
}
```
