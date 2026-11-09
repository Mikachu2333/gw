# Window.WindowNumber

返回窗口号。例如，名称为“Book1.xls:2”的窗口，其窗口号为 2。大多数窗口的窗口号为 1。 **Long** 类型，只读。



## 语法

express.**WindowNumber**

express   一个代表 **Window** 对象的变量。

## 类型

number（int4 精度）

## 说明


窗口号与窗口的索引（ **Index** 属性的返回值）不同，窗口索引值为该窗口在 **Windows** 集合中的位置。



## 示例


```JavaScript
/*本示例为活动窗口新建一个窗口，然后显示新窗口的窗口号。*/
function test() {
    let window = ActiveWindow.NewWindow()
    alert(window.WindowNumber)
}
```


```JavaScript
/*本示例获取第一个窗口的窗口号并显示在A2单元格上。*/
function test() {
    let windowNumber = Windows.Item(1).WindowNumber
    Range("A2").Value2 =  "第一个窗口的窗口号为: " + windowNumber
}
```
