# Application.DisplayDocumentActionTaskPane

设置为 **True** 可显示 **“文档操作”** 任务窗格；设置为 **False** 可隐藏 **“文档操作”** 任务窗格。 **Boolean** 类型，可读写。



## 语法

express.**DisplayDocumentActionTaskPane**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 说明


如果活动工作簿不是智能文档，则将该属性设置为 **True** 将产生运行时错误。



## 示例


```JavaScript
/*本示例确定是否可以显示“文档操作” 任务窗格，并通知用户。*/
function test() {
    if (Application.DisplayDocumentActionTaskPane == true) {
        alert("显示文档操作任务窗格。")
    } else {
        alert("隐藏文档操作任务窗格。")
    }
}
```


```JavaScript
/*本示例演示DisplayDocumentActionTaskPane的数据类型，当提示框关闭后将DisplayDocumentActionTaskPane属性设置为true。*/
function test() {
    alert("DisplayDocumentActionTaskPane 属性的数据类型为：" + typeof Application.DisplayDocumentActionTaskPane)
    Application.DisplayDocumentActionTaskPane = true
}
```
