# CellFormat.VerticalAlignment

返回或设置一个 **Variant** 值，它代表指定对象的垂直对齐方式。



## 语法

express.**VerticalAlignment**

express   一个代表 **CellFormat** 对象的变量。

## 类型

any

## 说明


此属性的值可以设置为 **[XlVAlign](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlVAlign)** 常量之一。



## 示例


```JavaScript
/*此示例显示查找条件中的垂直对齐方式是否为 xlVAlignDistributed 。*/
function test() {
    alert(Application.FindFormat.VerticalAlignment == xlVAlignDistributed)
}
```


```JavaScript
/*此示例将替换条件设置为向下垂直对齐。*/
function test() {
    Application.ReplaceFormat.VerticalAlignment = xlVAlignBottom
}
```
