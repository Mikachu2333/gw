# Options.PasteFormatWithinDocument

返回或设置一个 **[WdPasteOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdPasteOptions)** 常量，该常量代表在同一文档内复制或剪切文本然后进行粘贴时的文本粘贴方式。可读写。



## 语法

express.**PasteFormatWithinDocument**

express   一个代表 **Options** 对象的变量。

## 类型

WdPasteOptions

## 示例


```JavaScript
/*本示例设置 WPS 在同一文档内复制或剪切文本然后进行粘贴时的文本粘贴方式为 wdMatchDestinationFormatting*/
function test() {
    Options.PasteFormatWithinDocument = wdMatchDestinationFormatting
}
```


```JavaScript
/*本示例显示 WPS 在同一文档内复制或剪切文本然后进行粘贴时的文本粘贴方式。*/
function test() {
    switch (Options.PasteFormatWithinDocument) {
        case wdKeepSourceFormatting:
            alert("保留源文档的格式。")
            break
        case wdMatchDestinationFormatting:
            alert("使格式与目标文档匹配。")
            break
        case wdKeepTextOnly:
            alert("只保留文本，不保留格式。")
            break
        case wdUseDestinationStyles:
            alert("使用样式来设置格式，以使格式与目标文档匹配。")
            break
    }
}
```
