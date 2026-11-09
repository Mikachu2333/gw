# CellFormat.Orientation

返回或设置一个 **Variant** 值，它代表文本方向。



## 语法

express.**Orientation**

express   一个代表 **CellFormat** 对象的变量。

## 类型

any

## 说明


此属性的值可以设置为 -90 到 90 度的整数值，或设置为 **[XlOrientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlOrientation)** 常量之一。



## 示例


```JavaScript
/*此示例显示查找条件的文本方向是否为向下排列。*/
function test() {
    alert(Application.FindFormat.Orientation == xlDownward)
}
```


```JavaScript
/*此示例设置查找条件的文本方向为向上排列。*/
function test() {
    Application.FindFormat.Orientation = xlUpward
}
```
