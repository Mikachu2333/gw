# Document.SaveSubsetFonts

如果 WPS 将嵌入的 TrueType 字体子集和文档一起保存，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**SaveSubsetFonts**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 说明


如果在一个文档中使用的 TrueType 字体少于 32 个字符，则 WPS 将在文档中嵌入 TrueType 字体子集（只包含所用的字体）；如果使用的 TrueType 字体多于 32 个字符，则 WPS 在文档中嵌入整个 TrueType 字体。



## 示例


```JavaScript
/*本示例将嵌入的 TrueType 字体子集和第一个文档一起保存（如果使用很少的字符），然后再保存该文档。*/
function test() {
    let document = Documents.Item(1)
    document.EmbedTrueTypeFonts = true
    document.SaveSubsetFonts = true
    document.Save()
}
```


```JavaScript
/*本示例显示 WPS 是否将嵌入的 TrueType 字体子集与活动文档一起保存。*/
function test() {
    alert(ActiveDocument.SaveSubsetFonts)
}
```
