# Options.PrintBackgrounds

返回一个 **Boolean** 类型的值，该值代表打印文档时，是否打印背景颜色和图像。



## 语法

express.**PrintBackgrounds**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


如果为 **True** ，代表打印背景颜色和图像。如果为 **False** ，则代表不打印背景颜色和图像。



## 示例


```JavaScript
/*本示例指定打印文档的同时要打印背景颜色和图像。*/
function test() {
    Options.PrintBackgrounds = true
}
```


```JavaScript
/*本示例显示“选项”对话框中“打印”选项卡上“打印文档的附加信息”下“打印背景色和图像”选项的当前状态。*/
function test() {
    alert(Options.PrintBackgrounds)
}
```
