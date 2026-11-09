# Workbook.DisplayInkComments

确定墨迹批注是否显示在工作簿中的 **Boolean** 值。 **Boolean** 类型，可读写。



## 语法

express.**DisplayInkComments**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例演示在活动工作簿中显示墨迹批注。*/
function test() {
    ActiveWorkbook.DisplayInkComments = true
}
```


```JavaScript
/*本示例演示DisplayInkComments的数据类型，并将DisplayInkComments属性的值设为false。*/
function test() {
    alert("DisplayInkComments数据类型为：" + typeof ActiveWorkbook.DisplayInkComments)
    ActiveWorkbook.DisplayInkComments = false
}
```
