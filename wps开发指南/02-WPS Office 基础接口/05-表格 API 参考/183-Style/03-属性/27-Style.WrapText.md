# Style.WrapText

返回或设置一个 **Boolean** 值，它指明 ET 是否为对象中的文本自动换行。



## 语法

express.**WrapText**

express   一个代表 **Style** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例为单元格 B1 赋值，并设置单元格的文本可自动换行。*/
function test() {
    Range("B1").Value2 = "这是示例文本"
    Range("B1").Style.WrapText = true
}
```


```JavaScript
/*本示例为单元格 C1 赋值，并显示单元格的文本是否可以自动换行。*/
function test() {
    Range("C1").Value2 = "这是示例文本"
    alert(Range("C1").Style.WrapText)
}
```
