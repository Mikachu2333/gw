# Range.EnhMetaFileBits

返回一个 **Variant** 类型的值，该值代表文本区域的图片表示形式。



## 语法

express.**EnhMetaFileBits**

express   一个代表 **Range** 对象的变量。

## 类型

any

## 说明


 **EnhMetaFileBits** 属性返回一个字节数组，该数组可在 JavaScript 或 C++ 开发环境中通过 Windows 32 应用程序编程接口来使用。



## 示例


```JavaScript
/*本示例显示所选区域的图片表示形式。*/
function test() {
    alert(Selection.Range.EnhMetaFileBits.toString())
}
```


```JavaScript
/*本示例在光标处插入活动文档的主文档文章的图片表示形式。*/
function test() {
    Selection.TypeText(ActiveDocument.Content.EnhMetaFileBits.toString())
}
```
