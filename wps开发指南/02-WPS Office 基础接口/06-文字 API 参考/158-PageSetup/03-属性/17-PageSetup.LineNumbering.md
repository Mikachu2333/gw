# PageSetup.LineNumbering

返回或设置一个 **[LineNumbering](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LineNumbering/obj)** 对象，该对象代表指定 **PageSetup** 对象的行号。



## 语法

express.**LineNumbering**

express   一个代表 **PageSetup** 对象的变量。

## 类型

LineNumbering

## 说明


只有在页面视图中才能看到行号。



## 示例


```JavaScript
/*本示例将为活动文档设置行号。*/
function test() {
    ActiveDocument.PageSetup.LineNumbering.Active = true
}
```


```JavaScript
/*本示例为名为“example.docx”的文档设置行号。起始行号设置为 1，每 5 行显示一次行号，行号文档的各节中连续编号。*/
function test() {
    let document = Documents.Item("example.docx")
    document.PageSetup.LineNumbering.Active = true
    document.PageSetup.LineNumbering.StartingNumber = 1
    document.PageSetup.LineNumbering.CountBy = 5
    document.PageSetup.LineNumbering.RestartMode = wdRestartContinuous
}
```


```JavaScript
/*本示例将活动文档的行号设置为与 example.docx 相同。*/
function test() {
    ActiveDocument.PageSetup.LineNumbering = Documents.Item("example.docx").PageSetup.LineNumbering
}
```
