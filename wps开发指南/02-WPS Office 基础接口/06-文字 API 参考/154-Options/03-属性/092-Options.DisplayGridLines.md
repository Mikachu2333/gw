# Options.DisplayGridLines

如果 WPS 显示文档网格，则该属性值为 **True** 。该属性相当于 **“视图”** 选项卡中的 **“网格线”** 复选框。 **Boolean** 类型，可读写。



## 语法

express.**DisplayGridLines**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


该属性只影响文档网格。对于表格虚框，请使用 **[TableGridlines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/TableGridlines)** 属性。



## 示例


```JavaScript
/*本示例实现的功能是：在显示或隐藏活动窗口的文档网格之间切换。*/
function test() {
    Options.DisplayGridLines = !Options.DisplayGridLines
}
```


```JavaScript
/*本示例显示 WPS 是否显示文档网格*/
function test() {
    alert(Options.DisplayGridLines)
}
```
