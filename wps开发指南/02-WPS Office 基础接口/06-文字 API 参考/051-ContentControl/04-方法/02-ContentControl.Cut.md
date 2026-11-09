# ContentControl.Cut

从活动文档中删除内容控件并将该内容控件移动到剪贴板中。



## 语法

express.**Cut()**

express   一个代表 **ContentControl** 对象的变量。

## 返回值

void

## 说明


可以使用 **[Selection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/obj)** 对象的 **Paste** 方法或 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象的 **Paste** 方法插入剪切内容控件，也可以使用 WPS 中的 **“粘贴”** 功能。



## 示例


```JavaScript
/*本示例删除活动文档中第一个内容控件并移动到剪贴板上，然后粘贴到光标处。*/
function test() {
    ActiveDocument.ContentControls.Item(1).Cut()
    Selection.Paste()
}
```


```JavaScript
/*本示例删除所选内容中第二个内容控件并移动到剪贴板上，然后粘贴到指定位置。*/
function test() {
    Selection.ContentControls.Item(2).Cut()
    ActiveDocument.Range(0, 0).Paste()
}
```
