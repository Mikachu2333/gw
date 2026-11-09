# PageSetup.PaperSize

返回或设置纸张大小。 **WdPaperSize** 类型，可读写。



## 语法

express.**PaperSize**

express   一个代表 **PageSetup** 对象的变量。

## 类型

WdPaperSize

## 说明


设置 **PageHeight** 或 **PageWidth** 属性会将 **PaperSize** 属性更改为 **wdPaperCustom** 。



## 示例


```JavaScript
/*本示例将第一个文档的纸张大小设置为 legal 型。*/
function test() {
    Documents.Item(1).PageSetup.PaperSize = wdPaperLegal
}
```


```JavaScript
/*本示例显示活动文档第一节的纸张大小是否为 A4 型。*/
function test() {
    if (ActiveDocument.Sections.Item(1).PageSetup.PaperSize == wdPaperA4) {
        alert("纸张大小是 A4 型")
    } else {
        alert("纸张大小不是 A4 型")
    }
}
```
