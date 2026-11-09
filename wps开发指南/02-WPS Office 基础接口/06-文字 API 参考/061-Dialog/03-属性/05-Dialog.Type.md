# Dialog.Type

返回内置 WPS 对话框的类型。只读 **[WdWordDialog](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdWordDialog)** 类型。



## 语法

express.**Type**

express   一个代表 **Dialog** 对象的变量。

## 类型

WdWordDialog

## 示例


```JavaScript
/*本示例显示内置WPS对话框“对话连接”的类型是否为wdDialogConnect。*/
function test() {
    alert(Application.Dialogs.Item(wdDialogConnect).Type == wdDialogConnect)
}
```


```JavaScript
/*本示例判断如果内置WPS对话框“段落格式”的类型为wdDialogFormatParagraph，则通知用户*/
function test() {
    if (Application.Dialogs.Item(wdDialogFormatParagraph).Type == wdDialogFormatParagraph) {
        alert("对话框“段落格式”的类型为wdDialogFormatParagraph")
    }
}
```
