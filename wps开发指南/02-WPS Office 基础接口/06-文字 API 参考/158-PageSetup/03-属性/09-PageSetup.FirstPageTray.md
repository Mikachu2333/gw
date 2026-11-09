# PageSetup.FirstPageTray

返回或设置用于文档或章节首页的纸盒。 **WdPaperTray** 类型，可读写。



## 语法

express.**FirstPageTray**

express   一个代表 **PageSetup** 对象的变量。

## 类型

WdPaperTray

## 示例


```JavaScript
/*本示例设置送纸盒，用来打印活动文档每节的首页。*/
function test() {
    ActiveDocument.PageSetup.FirstPageTray = wdPrinterLowerBin
}
```


```JavaScript
/*本示例设置送纸盒，用来打印所选部分每节的首页。*/
function test() {
    Selection.PageSetup.FirstPageTray = wdPrinterUpperBin
}
```
