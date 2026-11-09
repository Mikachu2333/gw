# Style.Orientation

返回或设置一个 **[XlOrientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlOrientation)** 值，它代表文本方向。



## 语法

express.**Orientation**

express   一个代表 **Style** 对象的变量。

## 类型

XlOrientation

## 示例


```JavaScript
/*本示例为A1单元格添加文本，并显示A1单元格文本方向是否为文字水平排列。*/
function test() {
    Range("A1").Value2 = "示例文本1"
    alert(Range("A1").Style.Orientation == xlHorizontal)
}
```


```JavaScript
/*本示例将B1单元格文本方向设置为向下排列。*/
function test() {
    Range("B1").Style.Orientation = xlDownward
}
```
