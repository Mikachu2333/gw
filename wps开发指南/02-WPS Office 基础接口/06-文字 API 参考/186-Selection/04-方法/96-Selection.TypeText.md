# Selection.TypeText

插入指定的文本。



## 语法

express.**TypeText(Text)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Text | 必选 | string | 要插入的文字。 |

## 返回值

void

## 说明


如果 **[ReplaceSelection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/ReplaceSelection)** 属性为 **True** ，则用指定文本替换选定内容。如果 **[ReplaceSelection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/ReplaceSelection)** 为 **False** ，则在选定内容之前插入指定的文本。

此方法已更改。对带批注的用户选择内容使用选择命令（如 `Selection.BoldRun`），不再对用户所选文本应用粗体格式设置，或者对于带批注的用户选择内容使用 `Selection.TypeTxt` 命令不再插入文本。



## 示例


```JavaScript
/*如果将 WPS 设置为用键入文本替换选定文本，则本示例在插入“Hello”前先折叠选定内容。这样可以避免现有文档文本被替换。*/
function test() {
    if (Options.ReplaceSelection) {
        Selection.Collapse(wdCollapseStart)
        Selection.TypeText("Hello")
    }
}
```


```JavaScript
/*本示例插入“Title”和一个新段落。*/
function test() {
    Options.ReplaceSelection = false
    Selection.TypeText("Title")
    Selection.TypeParagraph()
}
```
