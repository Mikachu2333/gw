# Border.Weight

返回或设置一个 **[XlBorderWeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlBorderWeight)** 值，它代表边框的粗细。



## 语法

express.**Weight**

express   一个代表 **Border** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例对 Sheet1 上椭圆一的边框粗细进行设置。*/
function test() {
    Application.Worksheets.Item("Sheet1").Ovals(1).Border.Weight = xlMedium
}
```


```JavaScript
/*本示例显示 I1 单元格左边缘边框的粗细是否为 xlThin 。*/
function test() {
    alert(Range("I1").Borders.Item(xlEdgeLeft).Weight == xlThin)
}
```
