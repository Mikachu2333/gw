# Envelope.FeedSource

返回或设置打印信封时的纸盒。 **WdPaperTray** 类型，可读写。



## 语法

express.**FeedSource**

express   一个代表 **Envelope** 对象的变量。

## 类型

WdPaperTray

## 示例


```JavaScript
/*本示例询问用户是否手动将信封送入打印机。如果是，本示例将送纸盒设置为手动方式。*/
function test() {
    let reply = MsgBox("Are the envelopes manually fed?", jsOKCancel)
    if (reply == jsResultOK) {
        try {
            ActiveDocument.Envelope.FeedSource = wdPrinterManualEnvelopeFeed
        } catch (error) {
            alert("Envelope not part of the active document")
        }
    }
}
```


```JavaScript
/*本示例显示附加到第一个文档的信封送纸盒是否为wdPrinterDefaultBin。*/
function test() {
    let envelope = Documents.Item(1).Envelope
    alert(envelope.FeedSource == wdPrinterDefaultBin)
}
```
