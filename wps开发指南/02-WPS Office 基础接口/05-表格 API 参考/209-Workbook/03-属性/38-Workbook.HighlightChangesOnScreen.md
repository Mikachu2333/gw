# Workbook.HighlightChangesOnScreen

如果将指定共享工作簿的更改在屏幕上突出显示，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**HighlightChangesOnScreen**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将共享工作簿的更改突出显示。*/
function test() {
    ActiveWorkbook.HighlightChangesOnScreen = true
}
```


```JavaScript
/*本示例演示HighlightChangesOnScreen属性的数据类型，并将HighlightChangesOnScreen属性的值设置为false。*/
function test() {
    alert("HighlightChangesOnScreen属性的数据类型为：" + typeof ActiveWorkbook.HighlightChangesOnScreen)
    ActiveWorkbook.HighlightChangesOnScreen = false
}
```
