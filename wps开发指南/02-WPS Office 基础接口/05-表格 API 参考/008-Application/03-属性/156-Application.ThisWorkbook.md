# Application.ThisWorkbook

返回一个 **[Workbook](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/obj)** 对象，该对象表示其中正在运行当前宏代码的工作簿。只读。



## 语法

express.**ThisWorkbook**

express   一个代表 **Application** 对象的变量。

## 类型

Workbook

## 说明


可使用该属性引用包含您的宏代码的工作簿。 **ThisWorkbook** 是从加载宏自身内部引用加载宏工作簿的唯一途径。 **ActiveWorkbook** 属性不返回加载宏工作簿，而是返回调用加载宏的工作簿。

 **Workbooks** 属性可能失败，因为在创建加载宏时工作簿的名称有可能改变。 **ThisWorkbook** 总是返回其中正在运行代码的工作簿。

例如，可使用下列代码激活加载宏工作簿中存储的对话框工作表。

```JavaScript
ThisWorkbook.DialogSheets(1).Show()
```

本属性仅可在 ET 内使用。不能使用此属性访问任何其他应用程序的工作簿。



## 示例


```JavaScript
/*本示例关闭包含示例代码的工作簿，不保存对工作簿的任何更改（如有）。*/
function test() {
    ThisWorkbook.Close(false)
}
```


```JavaScript
/*本示例将包含示例代码的工作簿的名称和完整路径分别赋值给A1和A2单元格。*/
function test() {
    Range("A1").Value2 = ThisWorkbook.Name
    Range("A2").Value2 = ThisWorkbook.Path
}
```
