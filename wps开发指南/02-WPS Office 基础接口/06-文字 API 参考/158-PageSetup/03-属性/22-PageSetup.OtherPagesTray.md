# PageSetup.OtherPagesTray

返回或设置用于文档或节中除第一页以外其他所有页的纸盒。 **WdPaperTray** 类型，可读写。



## 语法

express.**OtherPagesTray**

express   一个代表 **PageSetup** 对象的变量。

## 类型

WdPaperTray

## 示例


```JavaScript
/*本示例设置纸盒用于打印活动文档各节除第一页以外的所有页。*/
function test() {
    ActiveDocument.PageSetup.OtherPagesTray = wdPrinterUpperBin
}
```


```JavaScript
/*本示例设置纸盒用于打印选定内容各节中除第一页以外的所有页。*/
function test() {
    Selection.PageSetup.OtherPagesTray = wdPrinterLowerBin
}
```
