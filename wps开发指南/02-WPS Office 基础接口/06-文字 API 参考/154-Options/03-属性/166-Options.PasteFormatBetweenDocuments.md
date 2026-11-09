# Options.PasteFormatBetweenDocuments

返回或设置一个 **[WdPasteOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdPasteOptions)** 常量，该常量代表在从另一个 WPS 文档复制文本时粘贴文本的方式。可读写。



## 语法

express.**PasteFormatBetweenDocuments**

express   一个代表 **Options** 对象的变量。

## 类型

WdPasteOptions

## 示例


```JavaScript
/*本示例设置 WPS 从另一个 WPS 文档复制文本时粘贴文本的方式为 wdKeepSourceFormatting。*/
function test() {
    Options.PasteFormatBetweenDocuments = wdKeepSourceFormatting
}
```


```JavaScript
/*本示例显示 WPS 从另一个 WPS 文档复制文本时粘贴文本的方式。*/
function test() {
    switch (Options.PasteFormatBetweenDocuments) {
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
