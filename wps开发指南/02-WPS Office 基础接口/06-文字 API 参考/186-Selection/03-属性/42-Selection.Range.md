# Selection.Range

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象代表指定对象所含的部分文档。



## 语法

express.**Range**

express   一个代表 **Selection** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例将选中文本设置为粗体。*/
function test() {
    let range = Application.Selection.Range
    if (range.Text == '') {
        alert('当前没有选中文本')
    } else {
        range.Font.Bold = true
    }
}
```


```JavaScript
/*本示例在活动窗口选定区域前后插入文本。*/
function test() {
    let range = ActiveWindow.Selection.Range
    range.InsertBefore('前置文本')
    range.InsertAfter('后置文本')
}
```
