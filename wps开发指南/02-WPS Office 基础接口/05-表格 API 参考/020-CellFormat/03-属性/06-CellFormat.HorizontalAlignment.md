# CellFormat.HorizontalAlignment

返回或设置一个 **Variant** 值，它代表指定对象的水平对齐方式。



## 语法

express.**HorizontalAlignment**

express   一个代表 **CellFormat** 对象的变量。

## 类型

any

## 说明


此属性的值可以设置为 **[XlHAlign](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlHAlign)** 常量之一。

某些常量可能不可用，这取决于所选择或安装的语言支持（例如，美国英语）。



## 示例


```JavaScript
/*此示例设置搜索条件中对象的水平对其方式为居中。*/
function test() {
    Application.FindFormat.HorizontalAlignment = xlHAlignCenter
}
```


```JavaScript
/*此示例显示替换条件中水平对齐方式是否为两端对齐。*/
function test() {
    alert(Application.ReplaceFormat.HorizontalAlignment == xlHAlignJustify)
}
```
