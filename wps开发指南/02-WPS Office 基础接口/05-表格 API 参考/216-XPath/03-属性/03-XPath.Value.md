# XPath.Value

返回一个 **String** ，它代表指定对象的 XPath。



## 语法

express.**Value**

express   一个代表 **XPath** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示映射到A1单元格的XPath的值。*/
function test() {
    alert(Application.Range("A1").XPath.Value)
}
```


```JavaScript
/*本示例将映射到活动工作表上D1单元格的XPath的值赋值到A7单元格。*/
function test() {
    let xPath = ActiveSheet.Range("D1").XPath
    Range("A7").Value2 = xPath.Value
}
```
