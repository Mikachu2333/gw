# Window.DisplayWorkbookTabs

如果显示工作簿标签，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**DisplayWorkbookTabs**

express   一个代表 **Window** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示工作簿标签。*/
function test() {
    ActiveWindow.DisplayWorkbookTabs = true
}
```


```JavaScript
/*本示例演示 DisplayWorkbookTabs 属性的数据类型，并将第一个窗口的 DisplayWorkbookTabs 属性的值设置为false。*/
function test() {
    alert("DisplayWorkbookTabs属性的数据类型为：" + typeof Windows.Item(1).DisplayWorkbookTabs)
    Windows.Item(1).DisplayWorkbookTabs = false
}
```
