# Window.AutoFilterDateGrouping

如果用于日期分组的自动筛选器当前显示在指定的窗口中，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**AutoFilterDateGrouping**

express   一个代表 **Window** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置日期分组的自动筛选器当前显示在窗口中。*/
function test() {
    ActiveWindow.AutoFilterDateGrouping = true
}
```


```JavaScript
/*本示例演示 AutoFilterDateGrouping 属性的数据类型，并将第一个窗口 AutoFilterDateGrouping 属性的值设置为false。*/
function test() {
    alert("AutoFilterDateGrouping属性的数据类型为：" + typeof Windows.Item(1).AutoFilterDateGrouping)
    Windows.Item(1).AutoFilterDateGrouping = false
}
```
