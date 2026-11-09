# Selection.Flags

返回或设置选定内容的属性。 **[WdSelectionFlags](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdSelectionFlags)** 类型，可读写。



## 语法

express.**Flags**

express   一个代表 **Selection** 对象的变量。

## 类型

WdSelectionFlags

## 说明


设置此值后，它将与 WPS 本身一起存储，这意味着下次启动 WPS 时，Selection 对象的行为将是上一个设置。因此，如果将此值设置为 8 或 9，下次添加或键入新区域时将无法替换所选区域。例如，当选择“hello”并在所选区域上键入“world”时，它将插入到“hello”之前，而不是将“hello”替换为“world”。必须将此值重置为 24 或 25 才能还原有关 Selection 对象的默认行为。此属性 24 的值应为 [wdSelActive](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdSelectionFlags) 和 [wdSelReplace](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdSelectionFlags) 的总和，25 = 24 + 1 应加上之后的 [wdSelStartActive](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdSelectionFlags)。8 或 9 没有值 wdSelReplace，因此，如果没有 wdSelReplace 设置，则不允许替换所选区域。



## 示例


```JavaScript
/*本示例选定活动文档中第一个单词。因为所选内容的末尾被激活，第一个消息框显示"false"。Flags属性激活所选内容的开头，并且第二个消息框显示"true"。*/
function test() {
    ActiveDocument.Words.Item(1).Select()
    alert(Selection.StartIsActive)
    Selection.Flags = wdSelStartActive
    alert(Selection.StartIsActive)
}
```


```JavaScript
/*本示例为选定内容打开改写模式。*/
function test() {
    Selection.Flags = wdSelOvertype
}
```
