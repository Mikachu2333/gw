# Window.DisplayFormulas

如果窗口正显示公式，则为 **True** ；如果窗口正显示值，则为 **False** 。可读/写 **Boolean** 类型。



## 语法

express.**DisplayFormulas**

express   一个代表 **Window** 对象的变量。

## 类型

boolean

## 说明


该属性仅适用于工作表和宏工作表。



## 示例


```JavaScript
/*本示例将工作簿1的活动窗口更改为显示公式。*/
function test() {
    Application.Workbooks.Item("工作簿1").Worksheets.Item("Sheet1").Activate()
    ActiveWindow.DisplayFormulas = true
}
```


```JavaScript
/*本示例演示 DisplayFormulas 属性的数据类型，并将 DisplayFormulas 属性的值设置为false。*/
function test() {
    alert("DisplayFormulas属性的数据类型为：" + typeof ActiveWindow.DisplayFormulas)
    ActiveWindow.DisplayFormulas = false
}
```
