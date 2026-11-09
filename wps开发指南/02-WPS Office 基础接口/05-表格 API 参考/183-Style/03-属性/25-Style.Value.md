# Style.Value

返回一个 **String** 值，它代表指定样式的名称。



## 语法

express.**Value**

express   一个代表 **Style** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例为A1单元格添加文本，并显示A1单元格样式的名称。*/
function test() {
    Range("A1").Value2 = "示例文本"
    alert(Range("A1").Style.Value)
}
```


```JavaScript
/*本示例显示B1单元格样式的名称是否为“Percent”。*/
function test() {
    alert(Range("B1").Style.Value == "Percent")
}
```
