# Selection.HeaderFooter

为指定的选定内容返回 **[HeaderFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HeaderFooter/obj)** 对象。只读。



## 语法

express.**HeaderFooter**

express   一个代表 **Selection** 对象的变量。

## 类型

HeaderFooter

## 说明


如果选定内容并非位于页眉或页脚，则会出现错误。



## 示例


```JavaScript
/*本示例向当前选中页脚中添加居中的页码。*/
function test() {
    let view = ActiveDocument.ActiveWindow.View
    view.Type = wdPrintView
    view.SeekView = wdSeekCurrentPageFooter
    Selection.HeaderFooter.PageNumbers.Add(wdAlignPageNumberCenter)
}
```


```JavaScript
/*本示例设置选中页眉的文本。*/
function test() {
    Selection.HeaderFooter.Range.Text = "这是页眉"
}
```
