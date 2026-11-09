# Selection.EnhMetaFileBits

返回一个 **Variant** 类型的值，该值代表选定文本或文本区域的显示方式的图片表示形式。



## 语法

express.**EnhMetaFileBits**

express   一个代表 **Selection** 对象的变量。

## 类型

any

## 说明


 **EnhMetaFileBits** 属性返回一个字节数组，可与 Windows 32 应用程序编程接口在 JavaScript 或 C++ 开发环境中使用。



## 示例


```JavaScript
/*本示例显示选定文本的 EnhMetaFileBits 属性转为字符串的结果。*/
function test() {
    let byteSelection = Selection.EnhMetaFileBits
    alert(byteSelection.toString())
}
```


```JavaScript
/*本示例选中活动文档的第三段，并显示所选文本的 EnhMetaFileBits 属性的数组长度。*/
function test() {
    ActiveDocument.Paragraphs.Item(3).Range.Select()
    let byteSelection = Selection.EnhMetaFileBits
    alert(byteSelection.length)
}
```
