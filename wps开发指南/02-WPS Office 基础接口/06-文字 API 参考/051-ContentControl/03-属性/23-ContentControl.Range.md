# ContentControl.Range

返回 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** ，它表示活动文档中的内容控件的内容。只读。



## 语法

express.**Range**

express   一个代表 **ContentControl** 对象的变量。

## 类型

Range

## 说明


使用 **Range** 属性可以访问文本、文本格式和其他文本属性。有关详细信息，请参阅处理 **Range** 对象。



## 示例


```JavaScript
/*本示例在活动文档中插入日期内容控件，然后设置内容控件的内容，并指定用户不能编辑这些内容或将该控件从文档中删除。*/
function test() {
    let control = Application.ActiveDocument.ContentControls.Add(wdContentControlDate)
    control.Range.Text = "January 1, 2007"
    control.LockContents = true
    control.LockContentControl = true
}
```


```JavaScript
/*本示例设置所选内容中第三个内容控件的内容的加粗格式和字号。*/
function test() {
    let range = Selection.ContentControls.Item(3).Range
    range.Bold = true
    range.Font.Size = 16
}
```
