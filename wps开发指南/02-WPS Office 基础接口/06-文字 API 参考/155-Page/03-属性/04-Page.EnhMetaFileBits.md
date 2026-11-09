# Page.EnhMetaFileBits

返回一个 **Variant** 类型的值，该值代表文本页显示方式的图片表示形式。只读。



## 语法

express.**EnhMetaFileBits**

express   一个代表 **Page** 对象的变量。

## 类型

any

## 说明


 **EnhMetaFileBits** 属性返回一个字节数组，该数组可在 JavaScript 或 C++ 开发环境中用于 Windows 32 应用程序编程接口。



## 示例


```JavaScript
/*本示例显示活动文档上活动窗口的第一个窗格的第一页的 EnhMetaFileBits 属性值。*/
function test() {
    let page = ActiveDocument.ActiveWindow.Panes.Item(1).Pages.Item(1)
    alert(page.EnhMetaFileBits.toString())
}
```


```JavaScript
/*本示例将所选内容的文本替换为第一个窗口的活动窗格的第一页的 EnhMetaFileBits 属性值。*/
function test() {
    let page = Windows.Item(1).ActivePane.Pages.Item(1)
    Selection.Range.Text = page.EnhMetaFileBits.toString()
}
```
