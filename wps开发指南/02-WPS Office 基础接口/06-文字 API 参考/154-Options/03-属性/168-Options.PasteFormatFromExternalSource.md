# Options.PasteFormatFromExternalSource

返回或设置一个 **[WdPasteOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdPasteOptions)** 常量，该常量代表在从外部源（如网页）复制文本时粘贴文本的方式。可读写。



## 语法

express.**PasteFormatFromExternalSource**

express   一个代表 **Options** 对象的变量。

## 类型

WdPasteOptions

## 示例


```JavaScript
/*本示例设置 WPS 从外部源（如网页）复制文本时粘贴文本的方式为 wdKeepTextOnly*/
function test() {
    Options.PasteFormatFromExternalSource = wdKeepTextOnly
}
```


```JavaScript
/*本示例显示 WPS 从外部源（如网页）复制文本时粘贴文本的方式。*/
function test() {
    switch (Options.PasteFormatFromExternalSource) {
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
