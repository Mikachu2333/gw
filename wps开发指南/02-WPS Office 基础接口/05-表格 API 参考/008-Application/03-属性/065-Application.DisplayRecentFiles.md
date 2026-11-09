# Application.DisplayRecentFiles

如果最近使用的文件列表显示在用户界面中，则该属性值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**DisplayRecentFiles**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例关闭最近使用过的文件名称列表。*/
function test() {
    Application.DisplayRecentFiles = false
}
```


```JavaScript
/*本示例演示DisplayRecentFiles的数据类型，当提示框关闭后将DisplayRecentFiles属性设置为true。*/
function test() {
    alert("DisplayRecentFiles 属性的数据类型为：" + typeof Application.DisplayRecentFiles)
    Application.DisplayRecentFiles = true
}
```
