# Options.DefaultTrayID

返回或设置用于打印文档的默认纸盒。 **WdPaperTray** 类型，可读写。



## 语法

express.**DefaultTrayID**

express   一个代表 **Options** 对象的变量。

## 类型

number（int4 精度）

## 说明


使用 **DefaultTray** 属性也可设置该选项。



## 示例


```JavaScript
/*本示例将用于打印文档的默认纸盒设置为上层纸盒，并打印活动文档。*/
function test() {
    Options.DefaultTrayID = wdPrinterUpperBin
    ActiveDocument.PrintOut()
}
```


```JavaScript
/*本示例显示用于打印文档的默认纸盒类型是否为 wdPrinterDefaultBin。*/
function test() {
    alert(Options.DefaultTrayID == wdPrinterDefaultBin)
}
```
