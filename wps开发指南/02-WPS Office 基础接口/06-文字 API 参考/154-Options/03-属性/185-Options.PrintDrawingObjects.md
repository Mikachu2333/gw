# Options.PrintDrawingObjects

如果 WPS 打印图形对象，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**PrintDrawingObjects**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将 WPS 设置为打印图形对象，然后打印活动文档。*/
function test() {
    Options.PrintDrawingObjects = true
    ActiveDocument.PrintOut()
}
```


```JavaScript
/*本示例显示“选项”对话框中“打印”选项卡上“打印文档的附加信息”下“图形对象”选项的当前状态。*/
function test() {
    alert(Options.PrintDrawingObjects)
}
```
